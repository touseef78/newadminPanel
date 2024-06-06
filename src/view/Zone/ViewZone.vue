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
                                Zone Information
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

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Midpoint Location:">
                                    <div v-for="(mid_name, index) in mid_names" :key="index"
                                        class="mb-2 d-flex align-items-center">
                                        <b-form-input :id="'midpoint-' + index" type="text"
                                            placeholder="Enter midpoint location" autocomplete="off"
                                            v-model="mid_name.value" @input="getLocationSuggestions2(index)"
                                            @keydown.down.prevent="moveDown2(index)"
                                            @keydown.up.prevent="moveUp2(index)"
                                            @keydown.enter.prevent="selectHighlightedLocation2(index)"
                                            disabled></b-form-input>
                                        <ul class="dropdown-menu"
                                            v-if="suggestions2[index] && suggestions2[index].length > 0">
                                            <li v-for="(suggestion, suggestionIndex) in suggestions2[index]"
                                                :key="suggestionIndex"
                                                :class="{ 'highlighted': suggestionIndex === highlightedIndex2[index] }"
                                                @click="selectLocation2(suggestion, index)">
                                                <strong>{{ suggestion.description }}</strong>
                                            </li>
                                        </ul>
                                        <!-- <b-button variant="danger" @click="removeMidpoint(index)"
                                            class="ml-2">Remove</b-button> -->
                                    </div>
                                    <!-- <b-button variant="primary" @click="addMidpoint">Add New Field</b-button> -->
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Dropoff Location:" label-for="schools_id">
                                    <b-form-input id="schools_id" placeholder="Dropoff location"
                                        v-model="editedUser.schools.address" disabled></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                    </b-form>

                    <template>
                        <div>
                            <!-- Your existing code -->

                            <!-- Loop through zone_times to display vehicle information -->
                            <b-card v-for="(zone, index) in editedUser.zone_times" :key="index">
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
                                        Vehicle Information {{ index + 1 }}
                                    </h4>
                                </div>
                                <div class="row">
                                    <!-- <div class="col-md-4 col-12">
                                        <b-form-group id="input-group-2" label="Car Name:" label-for="vehicle_id">
                                            <b-form-select id="vehicle_id" placeholder="Select car" v-model="vehicle_id"
                                                disabled>
                                                <option value="">Select Car</option>
                                                <option v-for="vehicle in vehicles" :key="vehicle.id"
                                                    :value="vehicle.id">
                                                    {{ vehicle.name }}
                                                </option>
                                            </b-form-select>
                                        </b-form-group>
                                    </div> -->
                                    <div class="col-md-4 col-12">
                                        <b-form-group :id="'input-group-2-' + index"
                                            :label="'Car Name ' + (index + 1) + ':'" :label-for="'vehicle_id_' + index">
                                            <b-form-input :id="'vehicle_id_' + index" placeholder="Car name"
                                                v-model="zone.vehicles.name" disabled></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <b-form-group id="input-group-2" label="Pickup Time:" label-for="pickup_time">
                                            <b-form-input id="pickup_time" type="time" placeholder="Enter pickup time "
                                                v-model="zone.pickup_time" disabled>
                                            </b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <b-form-group id="input-group-2" label="Dropoff Time:" label-for="return_time">
                                            <b-form-input id="return_time" type="time" placeholder="Enter dropoff time "
                                                v-model="zone.return_time" disabled>
                                            </b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <b-form-group id="input-group-2" label="Car Number:" label-for="reg_no">
                                            <b-form-input id="reg_no" type="number" placeholder="Enter car type"
                                                v-model="zone.vehicles.reg_no" disabled></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <b-form-group id="input-group-2" label="Seating Capacity: "
                                            label-for="seating_capacity">
                                            <b-form-input id="seating_capacity" type="number"
                                                placeholder="Enter sitting capacity"
                                                v-model="zone.vehicles.seating_capacity" disabled></b-form-input>
                                        </b-form-group>
                                    </div>
                                </div>
                            </b-card>

                            <!-- Your existing code -->
                        </div>
                    </template>

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
            mid_names: [{ value: '' }],
            suggestions2: [[]],
            highlightedIndex2: [-1],
            highlightedIndex: -1,
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
            seating_capacity: "",
            reg_no: "",



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
                this.pickup_time = this.editedUser.zone_times[0].pickup_time;
                this.return_time = this.editedUser.zone_times[0].return_time;
                this.zone_pickup_name = this.editedUser.zone_pickup_name;
                this.schools_address = this.editedUser.schools.address;

                // Set selectedVehicle to the first vehicle in zone_times
                this.selectedVehicle = this.editedUser.zone_times[0].vehicles;
                // ......... 
                this.schools_id = this.editedUser.schools.address;
                this.vehicle_id = this.editedUser.zone_times[0].vehicle_id;
                this.schools_id = this.editedUser.schools_id;
                this.mid_names = this.editedUser.midpoints.map(point => ({
                    value: point.mid_name
                }));

                // ... and so on for other properties ...
                const vehicle = this.editedUser.zone_times[0].vehicles;
                this.seating_capacity = vehicle.seating_capacity;
                this.reg_no = vehicle.reg_no;
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    },
    methods: {
        // end latitude code here 
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
            this.midpoints.push({ value: '' });
        },
        removeMidpoint(index) {
            if (this.midpoints.length > 1) {
                this.midpoints.splice(index, 1);
            } else {
                this.midpoints[index].value = '';
            }
        }
    },
};
</script>
