<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <b-form @submit.prevent="addUser" v-if="show">
                    <!-- <h2>Car Information</h2> -->
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
                            Payment
                        </h5>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Driver Name:" label-for="driver_name">
                                <b-form-input id="driver_name" v-model="driver_name" placeholder="Enter  driver name"
                                    disabled>
                                    
                                </b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Receiveable:" label-for="receiveable">
                                <b-form-input id="receiveable" v-model="receiveable" placeholder="Enter  receiveable"
                                    disabled></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Payable:" label-for="payable">
                                <b-form-input id="payable" v-model="payable" placeholder="Enter  payable"
                                    disabled></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Uber Amount:" label-for="uber_amount">
                                <b-form-input id="uber_amount" v-model="uber_amount" placeholder="Enter  uber amount"
                                    disabled></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Expense Deduct From Salary:"
                                label-for="expense_deduct_from_salary">
                                <b-form-input id="expense_deduct_from_salary" v-model="expense_deduct_from_salary"
                                    placeholder="Enter  expense deduct from salary" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-4 col-12">
                            <b-form-group id="input-group-2" label="Total Salary:" label-for="total_salary">
                                <b-form-input id="total_salary" v-model="total_salary" placeholder="Enter total salary"
                                    disabled></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <!-- <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading">
                        <span v-if="!isLoading">Pay</span>
                        <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                    </b-button> -->
                     <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading" @click="payAndNavigate">
                <span v-if="!isLoading">Pay</span>
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
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            image: null,
            isLoading: false,
            amount: '',
            category: '',
            card: '',
            user_id: '',
            drivers: [],
            driver_name: '',
            receiveable: '',
            payable: '',
            uber_amount: '',
            expense_deduct_from_salary: '',
            total_salary: '',


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
            .get("drivers")
            .then((response) => {
                this.drivers = response.data.data;
            })
            .catch((error) => {
                console.log(error);
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

            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
        //    Add Vehicle
        addUser() {
            this.isLoading = true;
            // Create a FormData object to handle the image file
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("amount", this.amount);
            formData.append("category", this.category);
            formData.append("card", this.card);
            formData.append("user_id", this.user_id);
            formData.append("driver_name", this.driver_name);
            formData.append("receiveable", this.receiveable);
            formData.append("payable", this.payable);
            formData.append("uber_amount", this.uber_amount);
            formData.append("expense_deduct_from_salary", this.expense_deduct_from_salary);
            formData.append("total_salary", this.total_salary);
            axios
                .post("expense", formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("Expense added successfully!", {
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

        vehicleImageChange(event) {
            const files = event.target.files;
            if (files && files.length > 0) {
                // Convert FileList to an array
                this.image = Array.from(files);
            }
        },
        payAndNavigate() {
            // Assuming `this.user_id` is the ID you want to pass to the invoiceShow route
            this.$router.push({ name: 'invoiceShow', params: { id: this.user_id } });
        },

        addUser() {
            // ... your existing addUser logic ...
        },
        // ... other methods ...

    },
};
</script>
