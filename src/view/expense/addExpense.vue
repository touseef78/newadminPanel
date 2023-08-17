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
                            Add Category
                        </h5>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Amount:" label-for="amount">
                                <b-form-input id="amount" v-model="amount" placeholder="Enter  amount"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Category:" label-for="category">
                                <b-form-select id="category" v-model="category" required>
                                    <option value="">Select Category</option>
                                    <option>Petrol</option>
                                    <option>Puncher</option>
                                    <option>Air Pressure</option>
                                    <option>Tyre Change</option>
                                    <option>Challane</option>
                                    <option>Credid</option>
                                    <option>Debit</option>
                                    <option>Online Payment</option>
                                    <option>Customer</option>
                                    <option>Other</option>
                                </b-form-select>
                            </b-form-group>
                        </div>

                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Add Driver:" label-for="user_id">
                                <b-form-select id="user_id" v-model="user_id" required>
                                    <option value="">Select Add Driver</option>
                                    <option v-for="driver in drivers" :key="driver.id" :value="driver.id">
                                        {{ driver.name }}
                                    </option>
                                </b-form-select>
                            </b-form-group>
                        </div>


                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Document Upload:" label-for="profile_picture">
                                <div style="margin-left: 3px; margin-bottom: 15px">
                                    <input type="file" accept="image/*" id="image[]" @change="onProfilePictureChange" />
                                </div>
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
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false, 
            image: null,
            isLoading: false,
            amount: '',
            category: '',
            user_id: '',
            drivers: [],


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
        //    Add Vehicle
        addUser() {
            this.isLoading = true;
            // Create a FormData object to handle the image file
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("amount", this.amount);
            formData.append("category", this.category);
            formData.append("user_id", this.user_id);
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
    },
};
</script>
