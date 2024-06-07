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
                                <b-form-group id="input-group-1" label="Name:" label-for="first_name">
                                    <b-form-input id="first_name" type="text" placeholder="Enter name"
                                        autocomplete="off" v-model="first_name" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
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
                                <b-form-group id="input-group-1" label="Phone No:" label-for="phone_number">
                                    <b-form-input id="phone_number" type="text" placeholder="Enter phone number"
                                        v-model="phone_number" pattern="[0-9]+"
                                        title="Please enter only numeric characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>



                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="City:" label-for="city">
                                    <b-form-input id="city" type="text" placeholder="Enter city" v-model="city"
                                        disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Location:" label-for="pickup_location">
                                    <b-form-input id="pickup_location" type="text" placeholder="Enter pickup location"
                                        v-model="pickup_location" disabled></b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Dropoff Location:" label-for="drop_location">
                                    <b-form-input id="drop_location" type="text" placeholder="Enter dropoff location"
                                        v-model="drop_location" disabled></b-form-input>
                                </b-form-group>
                            </div>

                        </div>
                        <div style="
                background-color: rgb(97, 116, 152);
                height: 32px;
                border-radius: 4px;
              ">
                            <h5 style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                ">
                                Car Information
                            </h5>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12" v-if="request_type === 'private'">
                                <b-form-group id="input-group-2" label="Car Type:" label-for="vehicle_type">
                                    <b-form-input id="vehicle_type" type="text" placeholder="Enter car type"
                                        v-model="vehicle_type" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12" v-if="request_type === 'private'">
                                <b-form-group id="input-group-2" label="Car Name:" label-for="carname">
                                    <b-form-input id="carname" type="text" placeholder="Enter car type" v-model="name"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12" v-if="request_type === 'private'">
                                <b-form-group id="input-group-2" label="Car Number:" label-for="reg_no">
                                    <b-form-input id="reg_no" type="number" placeholder="Enter car type"
                                        v-model="reg_no" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12" v-if="request_type === 'private'">
                                <b-form-group id="input-group-2" label="Distance: (Km)" label-for="per_km">
                                    <b-form-input id="per_km" type="number" placeholder="Enter Distance"
                                        v-model="per_km" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12" v-if="request_type === 'private'">
                                <b-form-group id="input-group-2" label="Amount:" label-for="amount">
                                    <b-form-input id="amount" type="number" placeholder="Enter amount" v-model="amount"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12" v-if="request_type === 'private'">
                                <b-form-group id="input-group-2" label="Total Students:" label-for="total_students">
                                    <b-form-input id="total_students" type="number" placeholder="Enter total student"
                                        v-model="total_students" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- Zone  Information  code  here  -->
                            <div class="col-md-4 col-12" v-if="request_type === 'public'">
                                <b-form-group id="input-group-2" label="Zone Title:" label-for="zone_name">
                                    <b-form-input id="zone_name" type="zone_name" placeholder="Enter zone title "
                                        v-model="zone_name" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <!-- Zone  infomation  code  here  end  -->
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
            // vehicle_type: "",
            selectedImage: null,
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            selectedOption: "",
            inputField1: "",
            inputField2: "",
            inputField3: "",
            showModal: false,
            isLoading: false,
            // Add Driver
            first_name: '',
            // name: "",
            email: '',
            city: '',
            car_type: "",
            reg_no: "",
            // vehicle_number: '',
            // name: "",
            per_km: "",
            phone_number: '',
            number_of_student: "",
            pickup_location: "",
            drop_location: "",
            amount: "",
            total_students: "",
            // bank_upload_document: null,
            request_type: "",
            successMessage: "",
            vehicle_id: "",
            vehicles: [],
            fixedMonthlyAmount: "", // New property to store fixed monthly amount
            originalAmount: "",
            submitted: false,
            amountUpdatedManually: false,
        };

    },

    computed: {
        updatedAmount() {
            // Return the updated amount based on whether the form has been submitted
            // and if the amount has been manually updated
            if (this.submitted || this.amountUpdatedManually) {
                return this.fixedMonthlyAmount || this.amount;
            } else {
                return this.amount;
            }
        },
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

    // created() {
    //     axios
    //         .get("vehicle")
    //         .then((response) => {
    //             this.vehicles = response.data.data;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    //     const userId = this.$route.params.id;
    //     axios
    //         .get(`registration/${userId}`)
    //         .then((response) => {

    //             this.editedUser = response.data.data;
    //             this.first_name = this.editedUser.name;
    //             this.city = this.editedUser.city;
    //             this.email = this.editedUser.email;
    //             this.reg_no = this.editedUser.vehicle.reg_no;
    //             this.vehicle_id = this.editedUser.vehicle_id;
    //             // this.vehicle_number = this.editedUser.vehicle.vehicle_number;
    //             this.number_of_student = this.editedUser.number_of_student;
    //             this.car_type = this.editedUser.car_type;
    //             this.per_km = this.editedUser.vehicle.per_km;
    //             this.phone_number = this.editedUser.phone_number;
    //             this.pickup_location = this.editedUser.pickup_location;
    //             this.drop_location = this.editedUser.drop_location;
    //             this.amount = this.editedUser.amount;
    //             this.total_students = this.editedUser.total_students;
    //             this.vehicle_type = this.editedUser.vehicle.vehicle_type;
    //             this.name = this.editedUser.vehicle.name;
    //             this.request_type = this.editedUser.request_type;




    //             // Depending on the selected option, set the appropriate salary value


    //             // ... and so on for other properties ...
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching user data:", error);
    //         });

    // },
    created() {
        // Fetch vehicles data
        axios
            .get("vehicle")
            .then((response) => {
                this.vehicles = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });

        // Fetch user registration data
        const userId = this.$route.params.id;
        axios
            .get(`registration/${userId}`)
            .then((response) => {
                this.editedUser = response.data.data;

                // Assign data from response to component's properties
                this.first_name = this.editedUser.name;
                this.city = this.editedUser.city;
                this.email = this.editedUser.email;
                this.phone_number = this.editedUser.phone_number;
                this.pickup_location = this.editedUser.pickup_location;
                this.drop_location = this.editedUser.drop_location;
                this.amount = this.editedUser.amount;
                this.total_students = this.editedUser.total_students;
                this.request_type = this.editedUser.request_type;

                // Vehicle information
                if (this.editedUser.vehicle) {
                    this.vehicle_type = this.editedUser.vehicle.vehicle_type;
                    this.name = this.editedUser.vehicle.name;
                    this.reg_no = this.editedUser.vehicle.reg_no;
                    this.per_km = this.editedUser.vehicle.per_km;
                }

                // Check and assign zone name if available
                if (this.editedUser.zone) {
                    this.zone_name = this.editedUser.zone.name; // Assign the zone name to zone_name
                } else {
                    this.zone_name = 'No Zone'; // Fallback in case zone is not available
                }

                // Depending on the selected option, set the appropriate salary value
                // ... and so on for other properties ...
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    },
    methods: {
        // updateAmount() {
        //     // Set the submitted flag to true to indicate that the form has been submitted
        //     this.submitted = true;
        // },
        updateAmount() {
            if (!this.fixedMonthlyAmount) {
                // If fixedMonthlyAmount is not entered, use the calculated amount
                this.amountUpdatedManually = false;
            } else {
                // If fixedMonthlyAmount is entered, use it
                this.amount = this.fixedMonthlyAmount;
                this.amountUpdatedManually = true;
            }
        },
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

        fetchVehicles() {
            // this.isLoading = true;
            axios
                .get(`vehicleIndex/${vehicleType.value}`)
                .then((response) => {
                    this.vehicles = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            // this.isLoading = false;

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
        updateAmountManually() {
            // Set the flag to true when amount is updated manually
            this.amountUpdatedManually = true;
        },
    },
};
</script>
