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
                                Company Expense
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Name:" label-for="name">
                                    <b-form-input id="name" type="text" placeholder="Enter  name" autocomplete="off"
                                        v-model="name">
                                    </b-form-input>
                                </b-form-group>
                            </div>


                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Amount:" label-for="amount">
                                    <b-form-input id="amount" type="amount" placeholder="Enter amount "
                                        v-model="amount">
                                    </b-form-input>
                                    <!-- <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span> -->
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Expense Type:" label-for="type">
                                    <b-form-select v-model="type" required>
                                        <option value="">Select Expense Type</option>
                                        <option value="fuel">Fuel</option>
                                        <option value="others">Others</option>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Profile Picture:" label-for="image">
                                    <div style="margin-left: 3px; margin-bottom: 15px">
                                        <!-- Display current profile picture -->
                                        <img v-if="editedUser.image" :src="'https://backendbigways.singsavatech.com/' + image
                                            " alt="Picture" style="max-width: 100px; max-height: 100px" />
                                        <!-- Input field to upload new profile picture -->
                                        <input type="file" accept="image/*" id="image"
                                            @change="onProfilePictureChange" />
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

            name: "",
            amount: "",
            type: '',
            image: null,
            successMessage: "",
            vehicles: [],


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
            .get(`/expenseShow/${userId}`)
            .then((response) => {

                this.editedUser = response.data.data;
                this.name = this.editedUser.name;
                this.amount = this.editedUser.amount;
                this.type = this.editedUser.type;
                this.image = this.editedUser.image;
                // this.city = this.editedUser.city;


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

        addUser() {
            this.isLoading = true;
            // Create a FormData object to handle the image file

            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("amount", this.amount);
            formData.append("type", this.type);
            formData.append("image", this.image);

            axios
                .post(`expenseUpdate/${this.editedUser.id}`, formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("Expense Update successfully!", {
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
                // Set the selected file to the data property
                this.image = file;
            }
        },



        BnakImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                // Set the selected file to the data property
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
