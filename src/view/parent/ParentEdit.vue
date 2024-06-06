<template>
    <div>
        <div v-if="successMessage" class="alert alert-success" style="color: rgb(5, 20, 48)">
            {{ successMessage }}
        </div>
        <b-card>
            <b-row>
                <div class="col-12 mt-16">
                    <b-form @submit.prevent="addUser" v-if="show">
                        <div style="background-color: rgb(97, 116, 152); height: 32px; border-radius: 4px;">
                            <h4 style="color: rgb(223, 227, 238); margin-left: 5px; font-weight: bold;">
                                Personal Information
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Name:" label-for="name">
                                    <b-form-input id="name" type="text" placeholder="Enter first name"
                                        autocomplete="off" v-model="name">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Email:" label-for="email">
                                    <b-form-input id="email" type="email" placeholder="Enter email address"
                                        v-model="email"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Mobile:" label-for="phone_number">
                                    <b-form-input id="phone_number" type="number" placeholder="Enter mobile number"
                                        v-model="phone_number"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="City:" label-for="city">
                                    <b-form-input id="city" placeholder="Enter city " v-model="city"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Pickup Location:" label-for="pickup_location">
                                    <b-form-input id="pickup_location" placeholder="Enter pickup location"
                                        v-model="pickup_location">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Dropoff Location:" label-for="drop_location">
                                    <b-form-input id="drop_location" type="text" placeholder="Enter dropoff location"
                                        v-model="drop_location">
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Amount :" label-for="amount">
                                    <b-form-input id="amount" type="amount" placeholder="Enter amount"
                                        v-model="amount"></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
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
            selectedCarType: "",
            inputField1: "",
            inputField2: "",
            inputField3: "",
            showModal: false,
            isLoading: false,
            // Add Driver
            name: "",
            email: "",
            phone_number: "",
            city: "",
            pickup_location: "",
            drop_location: "",
            amount: "",
            successMessage: '',
            editedUser: null, // Add this to hold the entire user data
        };
    },
    components: {
        BRow,
        BCol,
        BCard,
        BButton,
        BForm,
        BFormGroup,
        BFormInput,
        BToast, // Add this line
        BSpinner,
    },
    created() {
        // Load the clients data when the component is created
        // axios
        //     .post("notAssign")
        //     .then((response) => {
        //         this.vehicles = response.data.data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        const userId = this.$route.params.id;
        axios
            .get(`registration/${userId}`)
            .then((response) => {
                const user = response.data.data; // Assuming the response is an array with a single user object
                this.editedUser = user; // Save the entire user object for later use
                this.name = user.name;
                this.email = user.email;
                this.phone_number = user.phone_number;
                this.city = user.city;
                this.pickup_location = user.pickup_location;
                this.drop_location = user.drop_location;
                this.amount = user.amount;
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    },
    methods: {
        addUser() {
            this.isLoading = true;
            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("city", this.city);
            formData.append("phone_number", this.phone_number);
            formData.append("pickup_location", this.pickup_location);
            formData.append("drop_location", this.drop_location);
            formData.append("amount", this.amount);
            axios
                .post(`updateReguest/${this.editedUser.id}`, formData)
                .then((response) => {
                    console.log(response.data);
                    this.successMessage = "Parent Updated successfully!";
                    this.$bvToast.toast(this.successMessage, {
                        title: "Success",
                        variant: "success",
                        solid: true,
                        appendToast: true,
                        toaster: "b-toaster-top-right",
                        autoHideDelay: 5000,
                        variant: "primary",
                    });
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(error.response.data);
                    this.isLoading = false;
                });
        },
        onReset(event) {
            event.preventDefault();
            this.name = "";
            this.email = "";
            this.phone_number = "";
            this.city = "";
            this.pickup_location = "";
            this.drop_location = "";
            this.amount = "";
        },
    },
};
</script>
