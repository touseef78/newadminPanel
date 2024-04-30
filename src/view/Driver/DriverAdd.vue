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
                                Personal Information
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Name:" label-for="name">
                                    <b-form-input id="name" type="text" placeholder="Enter first name"
                                        autocomplete="off" v-model="name" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Email Address:" label-for="email">
                                    <b-form-input id="email" type="email" placeholder="Enter email address"
                                        v-model="email" required>
                                    </b-form-input>
                                    <!-- <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span> -->
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Mobile:" label-for="mobile">
                                    <b-form-input id="mobile" type="number" placeholder="Enter mobile number"
                                        v-model="mobile" pattern="[0-9]+" title="Please enter only numeric characters"
                                        required>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Gender:" label-for="gender">
                                    <b-form-select v-model="gender" required>
                                        <option value="">Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </b-form-select>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Address:" label-for="address">
                                    <b-form-input id="address" placeholder="Enter address" v-model="address" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Date of Birth:" label-for="date_of_birth">
                                    <b-form-input id="date_of_birth" type="date" placeholder="Enter date of birth"
                                        v-model="date_of_birth" required></b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Joining Date:" label-for="joining_date">
                                    <b-form-input id="joining_date" type="date" v-model="joining_date"
                                        required></b-form-input>
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


                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Postal Code:" label-for="postal_code">
                                    <b-form-input id="postal_code" placeholder="Enter Postal code"
                                        v-model="postal_code">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="City:" label-for="city">
                                    <b-form-input id="city" placeholder="Enter city" v-model="city">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Password:" label-for="password">
                                    <b-form-input id="password" type="number" placeholder="Enter password"
                                        v-model="password" minlength="8" maxlength="8">
                                    </b-form-input>
                                </b-form-group>
                            </div>


                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Salary:" label-for="salary">
                                    <b-form-input id="salary" type="number" placeholder="Enter your salary"
                                        v-model="salary">
                                    </b-form-input>

                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Profile Picture:" label-for="profile_picture">
                                    <div style="margin-left: 3px; margin-bottom: 15px">
                                        <input type="file" accept="image/*" id="profile_picture"
                                            @change="onProfilePictureChange" required />
                                    </div>
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
            postal_code: '',
            city: '',
            password: '',
            email: "",
            mobile: "",
            gender: "",
            address: "",
            date_of_birth: "",
            salary: "",
            company_name: "",
            profile_picture: null,
            successMessage: "",
            vehicle_id: "",
            vehicles: [],
            joining_date: '',
            ////
            description: "",
            vehicle_image: [],

            company_name: "",

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
            .get("notAssign")
            .then((response) => {
                this.vehicles = response.data.data;
            })
            .catch((error) => {
                console.log(error);
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
            formData.append("profile_picture", this.profile_picture);
            formData.append("name", this.name);
            formData.append("postal_code", this.postal_code);
            formData.append("city", this.city);
            formData.append("email", this.email);
            formData.append("password", this.password);
            formData.append("joining_date", this.joining_date);
            formData.append("mobile", this.mobile);
            formData.append("gender", this.gender);
            formData.append("address", this.address);
            formData.append("date_of_birth", this.date_of_birth);
            formData.append("salary", this.salary);
            formData.append("vehicle_id", this.vehicle_id);
            axios

                .post("drivers", formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("Driver added successfully!", {
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
    },
};
</script>
