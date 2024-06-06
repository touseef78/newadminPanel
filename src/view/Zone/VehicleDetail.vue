<template>
    <div>
        <div v-if="successMessage" class="alert alert-success" style="color: rgb(5, 20, 48)">
            {{ successMessage }}
        </div>
        <b-card>
            <b-row>
                <div class="col-12 mt-16">
                    <b-form @submit.prevent="addUser" v-if="show">
                        <div style="
                background-color: rgb(97, 116, 152);
                height: 32px;
                border-radius: 4px;
              ">
                            <h4 style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                ">
                                Vehicle Information
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Zone Title:" label-for="name">
                                    <b-form-input id="name" type="name" placeholder="Enter zone title " v-model="name"
                                        disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Pickup Time:" label-for="pickup_time">
                                    <b-form-input id="pickup_time" type="time" placeholder="Enter pickup time "
                                        v-model="pickup_time" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Dropoff Time:" label-for="return_time">
                                    <b-form-input id="return_time" type="time" placeholder="Enter dropoff time "
                                        v-model="return_time" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Select Car:" label-for="vehicle_id">
                                    <b-form-select id="vehicle_id" placeholder="Select car" v-model="vehicle_id"
                                        required>
                                        <option value="">Select Car</option>
                                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                                            {{ vehicle.name }}
                                        </option>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <div class="position-relative col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Location:" label-for="zone_pickup_name">
                                    <b-form-input id="zone_pickup_name" type="text" placeholder="Enter pickup location"
                                        autocomplete="off" v-model="zone_pickup_name" @change="geocodeAddress"
                                        @input="getLocationSuggestions" @keydown.down.prevent="moveDown"
                                        @keydown.up.prevent="moveUp" @keydown.enter.prevent="selectHighlightedLocation"
                                        disabled>
                                    </b-form-input>
                                    <ul class="dropdown-menu" v-if="suggestions.length > 0">
                                        <li v-for="(suggestion, index) in suggestions" :key="index"
                                            :class="{ 'highlighted': index === highlightedIndex }"
                                            @click="selectLocation(suggestion)">
                                            <strong>{{ suggestion.description }}</strong>
                                        </li>
                                    </ul>
                                    <div class="invalid-feedback" v-if="!zone_pickup_name">
                                        This field must be filled.
                                    </div>
                                </b-form-group>
                            </div>
                            <!-- <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Dropoff Location:" label-for="schools_id">
                                    <b-form-select id="schools_id" placeholder="Dropoff location" v-model="schools_id"
                                        disabled>
                                        <option value="">Dropoff Location</option>
                                        <option v-for="schools in schools" :key="schools.id" :value="schools.id">
                                            {{ schools.address }}
                                        </option>
                                    </b-form-select>
                                </b-form-group>
                            </div> -->
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Dropoff Location:" label-for="schools_id">
                                    <b-form-input id="schools_id" placeholder="Dropoff location"
                                        v-model="editedUser.schools.address" disabled></b-form-input>
                                </b-form-group>
                            </div>


                        </div>

                        <!-- Bank Information End -->
                        <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading">
                            <span v-if="!isLoading">Submit</span>
                            <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                        </b-button>
                    </b-form>
                </div>
                <div v-if="codeActive" class="col-12 mt-24 hljs-container" :class="{ active: codeActiveClass }">
                    <pre v-highlightjs>
          <code class="hljs html">
            {{ codeText }}
          </code>
        </pre>
                </div>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import {
    BRow,
    BCol,
    BCard,
    BButton,
    BForm,
    BFormGroup,
    BFormCheckboxGroup,
    BFormCheckbox,
    BFormSelect,
    BFormInput,
    BSpinner,
} from "bootstrap-vue";
import axios from "axios";
import { BToast } from "bootstrap-vue";
import code from "../components/data-entry/form/code";

export default {
    data() {
        return {
            select_vehicle_type: "",
            selectedImage: null,
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            selectedOption: "",
            fixSalary: "",
            inputField1: "",
            inputField2: "",
            inputField3: "",
            showModal: false,
            isLoading: false,
            // Add Driver
            name: "",
            address: "",
            suggestions: [],
            highlightedIndex: -1,
            dropoff_location: "",
            pickup_time: "",
            return_time: "",
            mid_names: [
                { value: '' }
            ],
            vehicle_id: "",
            schools_id: "",
            vehicles: [],
            schools: [],
            zone_pickup_latitude: "",
            zone_pickup_longitude: "",
            mid_latitude: "",
            mid_longitude: "",
            editedUser: null,
            zone_pickup_name: "",
            pickup_location: "",




        };
    },
    components: {
        BRow,
        BCol,
        BCard,
        BButton,
        BForm,
        BFormGroup,
        BFormCheckboxGroup,
        BFormCheckbox,
        BFormSelect,
        BFormInput,
        BToast, // Add this line
        BSpinner,
    },

    created() {
        // Load the clients data when the component is created
        axios
            .get("notAssign")
            .then((response) => {
                this.vehicles = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get("schools")
            .then((response) => {
                this.schools = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });

        const userId = this.$route.params.id;

        axios
            .get(`zonesShow/${userId}`)
            .then((response) => {

                this.editedUser = response.data.data;
                this.name = this.editedUser.name;
                this.zone_pickup_name = this.editedUser.zone_pickup_name;
                this.schools_id = this.editedUser.schools.address;
                this.schools_id = this.editedUser.schools_id;


            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    },

    methods: {
        showMsgBoxOne() {
            debugger;
        },
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            // debugger
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.email = "";
            this.form.name = "";
            this.form.food = null;
            this.form.checked = [];
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },

        addUser() {
            this.isLoading = true;

            // Create a FormData object to handle the image file
            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("pickup_time", this.pickup_time);
            formData.append("mid_name[]", this.mid_name);
            formData.append("return_time", this.return_time);
            formData.append("zone_pickup_name", this.address);
            formData.append("schools_id", this.schools_id);
            formData.append("zone_pickup_longitude", this.zone_pickup_longitude);
            formData.append("zone_pickup_latitude", this.zone_pickup_latitude);
            formData.append("vehicle_id", this.vehicle_id);
            formData.append("zone_id", this.$route.params.id);
            formData.append("mid_longitude", this.mid_longitude);
            axios

                .post("addvehicle", formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("Vehicle added successfully!", {
                        title: "Success",
                        variant: "success",
                        solid: true,
                        appendToast: true,
                        toaster: "b-toaster-top-right",
                        autoHideDelay: 5000,
                        variant: "primary", // Background color
                    });
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(error.response.data);
                    this.isLoading = false;
                });
        },
        onProfilePictureChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.profile_picture = file;
            }
        },

        vehicleImageChange(event) {
            const files = event.target.files;
            if (files && files.length > 0) {
                // Convert FileList to an array
                this.vehicle_image = Array.from(files);
            }
        },

        BankImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.bank_upload_document = file;
            }
        },

        codeClick() {
            this.codeActive = !this.codeActive;

            //   setTimeout(() => {
            //     this.codeActiveClass = !this.codeActiveClass;
            //   }, 100);
        },

        saveOwnCar() {
            this.showModal = false;
        },
        // multiple  field code 
        addMidpoint() {
            this.mid_names.push({ value: '' });
        },
        removeMidpoint(index) {
            if (this.mid_names.length > 1) {
                this.mid_names.splice(index, 1);
            } else {
                this.mid_names[index].value = '';
            }
        }
    },
};
</script>
