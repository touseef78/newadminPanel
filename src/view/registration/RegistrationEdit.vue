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
                                <b-form-group id="input-group-1" label="Phone No:" label-for="phone_number">
                                    <b-form-input id="phone_number" type="text" placeholder="Enter phone number"
                                        v-model="phone_number" pattern="[0-9]+"
                                        title="Please enter only numeric characters" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>



                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="City:" label-for="city">
                                    <b-form-input id="city" type="text" placeholder="Enter city" v-model="city"
                                        required>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Location:" label-for="pickup_location">
                                    <b-form-input id="pickup_location" type="text" placeholder="Enter pickup location"
                                        v-model="pickup_location" required></b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Dropoff Location:" label-for="drop_location">
                                    <b-form-input id="drop_location" type="text" placeholder="Enter dropoff location"
                                        v-model="drop_location" required></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Amount:" label-for="amount">
                                    <b-form-input id="amount" type="number" placeholder="Enter amount" v-model="amount"
                                        required></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Fix Monthly Amount:"
                                    label-for="fixed_monthly_amount">
                                    <b-form-input id="fixed_monthly_amount" type="number"
                                        placeholder="Enter fixed monthly amount" v-model="fixedMonthlyAmount"
                                        @input="updateAmount"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Total Students:" label-for="total_students">
                                    <b-form-input id="total_students" type="number" placeholder="Enter total student"
                                        v-model="total_students" required>
                                    </b-form-input>
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
                                Car Information
                            </h4>
                        </div>
                        <div class="row">

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Car Type:" label-for="vehicle_type">
                                    <b-form-select id="vehicle_type" v-model="vehicle_type" @change="fetchVehicles"
                                        required>
                                        <option value="AC">AC</option>
                                        <option value="Non AC">Non-AC</option>
                                    </b-form-select>

                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Select Car:" label-for="vehicle_id">
                                    <b-form-select id="vehicle_id" placeholder="Enter select car" v-model="vehicle_id">
                                        <option value="">Select Car</option>
                                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                                            {{ vehicle.name }}
                                        </option>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <!-- Zone  Information  code  here  -->
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Zone Title:" label-for="zone_name">
                                    <b-form-input id="zone_name" type="text" placeholder="Enter zone title"
                                        v-model="zone_name" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Pickup Location:"
                                    label-for="zone_pickup_location">
                                    <b-form-input id="zone_pickup_location" type="zone_pickup_location"
                                        placeholder="Enter pickup location " v-model="zone_pickup_location" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <!-- Zone  infomation  code  here  end  -->
                        </div>
                        <b-button @click="updateAmount" type="submit" variant="primary" class="mb-8 mr-8"
                            :disabled="isLoading">
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
<style>
/* Remove up and down arrows from number input */
#total_students::-webkit-inner-spin-button,
#total_students::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>

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
            // reg_no: '',
            // vehicle_number: '',
            // name: "",
            // per_km: "",
            phone_number: '',
            number_of_student: "",
            pickup_location: "",
            drop_location: "",
            amount: "",
            total_students: "",
            // bank_upload_document: null,
            // profile_picture: null,
            successMessage: "",
            vehicle_id: "",
            vehicles: [],
            fixedMonthlyAmount: "", // New property to store fixed monthly amount
            originalAmount: "",
            submitted: false,
            amountUpdatedManually: false,
            zone_name: "",
            zone_pickup_location: "",
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

    created() {
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
            .get(`registration/${userId}`)
            .then((response) => {

                this.editedUser = response.data.data;
                this.first_name = this.editedUser.name;
                this.city = this.editedUser.city;
                this.email = this.editedUser.email;
                this.vehicle_id = this.editedUser.vehicle_id;
                // this.vehicle_number = this.editedUser.vehicle.vehicle_number;
                this.number_of_student = this.editedUser.number_of_student;
                this.car_type = this.editedUser.car_type;
                // this.per_km = this.editedUser.vehicle.per_km;
                this.phone_number = this.editedUser.phone_number;
                this.pickup_location = this.editedUser.pickup_location;
                this.drop_location = this.editedUser.drop_location;
                this.amount = this.editedUser.amount;
                this.total_students = this.editedUser.total_students;
                this.vehicle_type = this.editedUser.vehicle.vehicle_type;
                this.name = this.editedUser.vehicle.name;
                // this.zone_name = this.editedUser.name;
                this.zone_name = this.editedUser.zone.name;
                this.zone_pickup_location = this.editedUser.pickup_location;
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

        addUser() {
            this.isLoading = true;
            // Create a FormData object to handle the image file
            this.amount = this.updatedAmount;
            const formData = new FormData();
            formData.append("profile_picture", this.profile_picture);
            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("vehicle_id", this.vehicle_id);
            formData.append("number_of_student", this.number_of_student);
            formData.append("distance", this.distance);
            formData.append("city", this.city);
            formData.append("phone_number", this.phone_number);
            formData.append("pickup_location", this.pickup_location);
            formData.append("drop_location", this.drop_location);
            formData.append("amount", this.amount);
            formData.append("total_students", this.total_students);
            formData.append("zone_name", this.zone_name);
            formData.append("zone_pickup_location", this.zone_pickup_location);


            // formData.append("type", "uber");
            formData.append("joining_date", this.joining_date);
            axios

                .post(`updateReguest/${this.editedUser.id}`, formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("Request updated successfully!", {
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
