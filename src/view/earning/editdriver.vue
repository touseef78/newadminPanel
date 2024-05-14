<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <b-form @submit.prevent="addExpense" v-if="show">
                    <!-- <h2>Car Information</h2> -->
                    <div style="
              background-color: #0010f7;
              height: 40px;
              border-radius: 4px;
            ">
                        <h5 style="
                color: rgb(223, 227, 238);
                margin-left: 5px;
                font-weight: bold;
                padding:10px;
              ">
                            Add Driver
                        </h5>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Machine Earning:" label-for="machine_earning">
                                <b-form-input id="machine_earning" v-model="machine_earning"
                                    placeholder="Enter  machine earning"></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Salk Amount:" label-for="salk_amount">
                                <b-form-input id="salk_amount" v-model="salk_amount"
                                    placeholder="Enter  salk amount"></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Fuel Amount:" label-for="salk_amount">
                                <b-form-input id="fuel_amount" v-model="fuel_amount"
                                    placeholder="Enter  fuel amount"></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="RMS Trip:" label-for="rms_trip">
                                <b-form-input id="rms_trip" v-model="rms_trip"
                                    placeholder="Enter rms trip"></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Vehicle No:" label-for="vehicle_number">
                                <b-form-input id="vehicle_number" v-model="vehicle_number"
                                    placeholder="Enter vehicle number"></b-form-input>
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
}
    from "bootstrap-vue";
import axios from "axios";
import code from "../components/data-entry/form/code";
import { BToast } from "bootstrap-vue";
export default {
    data() {
        return {
            selectedType: "",
            show: true,
            isLoading: false,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,

            card: '',
            user_id: '',
            drivers: [],
            editExpense: {},
            salk_amount: "",
            fuel_amount: "",
            rms_trip: "",
            machine_earning: "",
            vehicle_number: "",




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
        BToast,
        BSpinner,
    },

    created() {
        // Load the clients data when the component is created
        axios
            .get("uberdata")
            .then((response) => {
                this.drivers = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        // Load the clients data when the component is created
        const userId = this.$route.params.id;
        axios
            .get(`expense/${userId}`)
            .then((response) => {
                this.editExpense = response.data.data;
                this.salk_amount = this.editExpense.salk_amount;
                this.fuel_amount = this.editExpense.fuel_amount;
                this.rms_trip = this.editExpense.rms_trip;
                this.machine_earning = this.editExpense.machine_earning;
                this.vehicle_number = this.editExpense.vehicle_number;
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    },



    methods: {
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
        //    Add Expense
        addExpense() {
            this.isLoading = true;
            // Create a FormData object to handle the image file
            const formData = new FormData();
            formData.append("fuel_amount", this.fuel_amount);
            formData.append("salk_amount", this.salk_amount);
            formData.append("rms_trip", this.rms_trip);
            formData.append("machine_earning", this.machine_earning);
            formData.append("vehicle_number", this.vehicle_number);
            axios
                .post(`driverUpdate/${this.editExpense.id}`, formData)
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
                this.image = file;
            }
        },

        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },
    },
};
</script>
