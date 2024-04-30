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
                                <b-form-group id="input-group-1" label="First Name:" label-for="first_name">
                                    <b-form-input id="name" type="text" placeholder="Enter first name"
                                        autocomplete="off" v-model="name" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Email Address:" label-for="email">
                                    <b-form-input id="email" type="email" placeholder="Enter email address"
                                        v-model="email" disabled>
                                    </b-form-input>
                                    <!-- <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span> -->
                                </b-form-group>
                            </div>


                            <!-- <div class="col-md-4 col-12">
                    <b-form-group id="input-group-2" label="Social Security Number:" label-for="security_code">
                      <b-form-input id="security_code" type="text" placeholder="Enter security code" v-model="security_code"
                        required minlength="10" maxlength="12"></b-form-input>
                    </b-form-group>
                  </div> -->

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Mobile:" label-for="mobile">
                                    <b-form-input id="mobile" type="text" placeholder="Enter mobile number"
                                        v-model="mobile" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Gender:" label-for="gender">
                                    <b-form-input id="gender" placeholder="Enter gender" v-model="gender"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Address:" label-for="address">
                                    <b-form-input id="address" placeholder="Enter address" v-model="address" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Date of Birth:" label-for="date_of_birth">
                                    <b-form-input id="date_of_birth" type="date" placeholder="Enter date of birth"
                                        v-model="date_of_birth" disabled></b-form-input>
                                </b-form-group>
                            </div>


                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Joining Date:" label-for="joining_date">
                                    <b-form-input id="joining_date" placeholder="Enter Joining date"
                                        v-model="joining_date" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <!-- 
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Select Car:" label-for="vehicle_id">
                                    <b-form-select id="vehicle_id" placeholder="Enter select car" v-model="vehicle_id"
                                        disabled></b-form-select>
                                </b-form-group>
                            </div> -->

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Postal Code:" label-for="postal_code">
                                    <b-form-input id="postal_code" type="number" placeholder="Enter Postal code"
                                        v-model="postal_code" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="City:" label-for="city">
                                    <b-form-input id="city" placeholder="Enter city" v-model="city" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Salary:" label-for="salary">
                                    <b-form-input id="salary" type="number" placeholder="Enter your salary"
                                        v-model="salary" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>



                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Profile Picture:" label-for="profile_picture">
                                    <div style="margin-left: 3px; margin-bottom: 15px">
                                        <img :src="'https://backendbigways.singsavatech.com/' + profile_picture
                                            " alt="Profile Picture" width="100" height="100" />
                                    </div>
                                </b-form-group>
                            </div>
                        </div>

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
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            selectedOption: "",
            commission: "",
            selectedCarType: "",
            inputField1: "",
            inputField2: "",
            inputField3: "",
            showModal: false,
            isLoading: false,
            // Add Driver
            name: "",
            email: "",
            mobile: "",
            gender: "",
            postal_code: '',
            city: '',
            address: "",
            date_of_birth: "",
            salary: "",
            profile_picture: "",
            successMessage: "",
            vehicle_id: "",
            vehicles: [],
            editedUser: {
                // ... other properties ...
                vehicle_image: [], // Initialize the array here
            },
            joining_date: '',
            vehicle_name: "",
            vehicle_company: "",
            description: "",
            car_make: "",
            car_model: "",
            car_color: "",
            car_number: "",
            total_number_hour: "",
            type: '',

            // vehicle_image: null,
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
            .get("vehicle")
            .then((response) => {
                this.vehicles = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });

        const userId = this.$route.params.id;
        axios
            .get(`careTaker/${userId}`)
            .then((response) => {
                this.editedUser = response.data.data;
                // Set the data properties with values from editedUser

                this.salary_commission_exclusive = this.editedUser.salary_commission_exclusive;
                this.name = this.editedUser.name;
                this.postal_code = this.editedUser.postal_code;
                this.city = this.editedUser.city;
                this.email = this.editedUser.email;
                this.mobile = this.editedUser.mobile;
                this.joining_date = this.editedUser.joining_date;
                this.gender = this.editedUser.gender;
                this.address = this.editedUser.address;
                this.date_of_birth = this.editedUser.date_of_birth;
                this.profile_picture = this.editedUser.profile_picture;
                this.salary = this.editedUser.salary;
                this.vehicle_id = this.editedUser.vehicle_id;
                this.taxi_driving_liscence = this.editedUser.taxi_driving_liscence;
                this.vehicle_name = this.editedUser.vehicle_name;
                this.vehicle_image = this.editedUser.vehicle_image;
                this.type = this.editedUser.type;

                // ... and so on for other properties ...
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

        onProfilePictureChange(event) {
            const file = event.target.files[0];
            if (file) {
                // Set the selected file to the data property
                this.profile_picture = file;
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
