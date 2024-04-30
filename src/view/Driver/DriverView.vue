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
                                    <b-form-input id="name" type="text" placeholder="Enter  name" autocomplete="off"
                                        v-model="name" disabled>
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



                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Mobile:" label-for="mobile">
                                    <b-form-input id="mobile" type="number" placeholder="Enter mobile number"
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
                                        disabled>
                                        <option value="">Select Car</option>
                                        <option v-for="vehicle in vehicles" :key="vehicle.id">
                                            {{ vehicle.name }}
                                        </option>
                                    </b-form-select>
                                </b-form-group>
                            </div> -->

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Postal Code:" label-for="postal_code">
                                    <b-form-input id="postal_code" placeholder="Enter Postal code" v-model="postal_code"
                                        disabled>
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
                                <b-form-group id="input-group-2" label="Password:" label-for="password">
                                    <b-form-input id="password" type="number" placeholder="Enter password"
                                        v-model="password" disabled>
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
                                <b-form-group id="input-group-2" label="Vehicle Name:" label-for="vehicle_name">
                                    <b-form-input id="vehicle_name" placeholder="Enter vehicle name"
                                        v-model="vehicle_name" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Vehicle Type:" label-for="vehicle_type">
                                    <b-form-input id="vehicle_type" placeholder="Enter vehicle type"
                                        v-model="vehicle_type" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Vehicle Number:" label-for="vehicle_number">
                                    <b-form-input id="vehicle_number" placeholder="Enter vehicle number"
                                        v-model="vehicle_number" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Distance: (Km)" label-for="per_km">
                                    <b-form-input id="per_km" type="number" placeholder="Enter Distance"
                                        v-model="per_km" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Seating Capacity: "
                                    label-for="seating_capacity">
                                    <b-form-input id="seating_capacity" type="number"
                                        placeholder="Enter sitting capacity" v-model="seating_capacity"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <!-- ...  -->
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Pickup Location: " label-for="pickup_location">
                                    <b-form-input id="pickup_location" type="text" placeholder="Enter pickup location"
                                        v-model="pickup_location" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Drop Location: " label-for="drop_location">
                                    <b-form-input id="drop_location" type="text" placeholder="Enter dropoff location"
                                        v-model="drop_location" disabled></b-form-input>
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
            salary: "",
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
            per_km: "",
            seating_capacity: "",
            pickup_location: "",
            drop_location: "",
            password: '',
            address: "",
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
            vehicle_number: '',
            vehicle_type: "",
            date_of_birth: "",


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
        // axios
        //     .get("vehicle")
        //     .then((response) => {
        //         this.vehicles = response.data.data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        const userId = this.$route.params.id;
        axios
            .get(`drivers/${userId}`)
            .then((response) => {
                this.editedUser = response.data.data;
                // Set the data properties with values from editedUser
                this.name = this.editedUser.name;
                this.vehicle_type = this.editedUser.vehicle.vehicle_type;
                this.vehicle_number = this.editedUser.vehicle.vehicle_number;
                this.postal_code = this.editedUser.postal_code;
                this.city = this.editedUser.city;
                this.password = this.editedUser.password;
                this.email = this.editedUser.email;
                this.mobile = this.editedUser.mobile;
                this.joining_date = this.editedUser.joining_date;
                this.gender = this.editedUser.gender;
                this.address = this.editedUser.address;
                this.date_of_birth = this.editedUser.date_of_birth;
                this.profile_picture = this.editedUser.profile_picture;
                this.salary = this.editedUser.salary;
                this.vehicle_id = this.editedUser.vehicle_id;
                this.vehicle_name = this.editedUser.vehicle.name; // Assign vehicle name to vehicle_name
                this.vehicle_image = this.editedUser.vehicle_image;
                this.per_km = this.editedUser.vehicle.per_km;
                this.seating_capacity = this.editedUser.vehicle.seating_capacity;
                this.pickup_location = this.editedUser.vehicle.pickup_location;
                this.drop_location = this.editedUser.vehicle.drop_location;
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
