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
                                School Information
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="School Name:" label-for="name">
                                    <b-form-input id="name" type="text" placeholder="Enter school name"
                                        autocomplete="off" v-model="name" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="position-relative col-md-4 col-12">
                                <b-form-group id="input-group-1" label="School Address:" label-for="address">
                                    <b-form-input id="address" type="text" placeholder="Enter pickup location"
                                        autocomplete="off" v-model="address" @change="geocodeAddress"
                                        @input="getLocationSuggestions" @keydown.down.prevent="moveDown"
                                        @keydown.up.prevent="moveUp" @keydown.enter.prevent="selectHighlightedLocation"
                                        required>
                                    </b-form-input>
                                    <ul class="dropdown-menu" v-if="suggestions.length > 0">
                                        <li v-for="(suggestion, index) in suggestions" :key="index"
                                            :class="{ 'highlighted': index === highlightedIndex }"
                                            @click="selectLocation(suggestion)">
                                            <strong>{{ suggestion.description }}</strong>
                                        </li>
                                    </ul>
                                    <div class="invalid-feedback" v-if="!address">
                                        This field must be filled.
                                    </div>
                                </b-form-group>
                            </div>
                            <!-- 
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Branch Name:" label-for="branch_name">
                                    <b-form-input id="branch_name" type="branch_name" placeholder="Enter branch name"
                                        v-model="branch_name" required>
                                    </b-form-input>
                                </b-form-group>
                            </div> -->

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Monthly Amount:" label-for="amount">
                                    <b-form-input id="amount" type="amount" placeholder="Enter monthy amount"
                                        v-model="amount" required>
                                    </b-form-input>
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
            branch_name: "",
            amount: "",
            suggestions: [],
            highlightedIndex: -1,
            drop_latitude: "",
            drop_longitude: "",
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
        // Load the vehicles data when the component is created
        axios
        // .get("notAssign")
        // .then((response) => {
        //     this.vehicles = response.data.data;
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    },
    methods: {
        getLocationSuggestions() {
            if (this.address.length > 2) {
                fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.address}&key=AIzaSyDRL4y2_cSzAcP0bedr-67CkG1kifDKYfg`)
                    .then(response => response.json())
                    .then(data => {
                        this.suggestions = data.predictions;
                    })
                    .catch(error => console.error(error));
            } else {
                this.suggestions = [];
            }
        },
        selectLocation(suggestion) {
            this.address = suggestion.description;
            this.suggestions = [];
        },
        moveDown() {
            if (this.highlightedIndex < this.suggestions.length - 1) {
                this.highlightedIndex++;
            }
        },
        moveUp() {
            if (this.highlightedIndex > 0) {
                this.highlightedIndex--;
            }
        },
        selectHighlightedLocation() {
            if (this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
                this.selectLocation(this.suggestions[this.highlightedIndex]);
            }
        },
        // latitude code here 

        geocodeAddress() {
            var geocoder = new google.maps.Geocoder();
            var address = this.address;
            var self = this; // Store reference to Vue component

            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == 'OK') {
                    self.drop_latitude = results[0].geometry.location.lat();
                    self.drop_longitude = results[0].geometry.location.lng();
                    console.log("Latitude: " + self.drop_latitude + ", Longitude: " + self.drop_longitude);
                    // You can use drop_latitude and drop_longitude here as needed
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });
        },
        // end latitude code here 
        // ................. 
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
            formData.append("address", this.address);
            formData.append("amount", this.amount);
            formData.append("drop_latitude", this.drop_latitude);
            formData.append("drop_longitude", this.drop_longitude);
            formData.append("branch_name", this.branch_name);
            axios

                .post("schoolsStore", formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("School added successfully!", {
                        title: "Success",
                        variant: "success",
                        solid: true,
                        appendToast: true,
                        toaster: "b-toaster-top-right",
                        autoHideDelay: 5000,
                        variant: "primary", // Background color
                    });
                    this.isLoading = false;
                    this.$router.push({ name: 'ListSchool' });
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


        },

        saveOwnCar() {
            this.showModal = false;
        },
    },
};
</script>

<style>
.dropdown-menu {
    display: block;
    /* Ensure the dropdown is displayed */
    max-height: 200px;
    /* Limit the height of the dropdown */
    overflow-y: auto;
    /* Enable scrolling for overflowing content */
    border: 1px solid #ccc;
    padding: 0;
}

.dropdown-menu li {
    padding: 10px;
    cursor: pointer;
}

.dropdown-menu li.highlighted {
    background-color: #617498;
    color: white;
}

.dropdown-menu li strong {
    font-weight: bold;
    /* Make suggestion descriptions bold */
}
</style>
