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
                            <b-form-group id="input-group-2" label="Select Driver:" label-for="user_id">
                                <b-form-select id="user_id" v-model="user_id" disabled>
                                    <option value="">Select Driver</option>
                                    <option v-for="driver in drivers" :key="driver.id" :value="driver.id">
                                        {{ driver.name }}
                                    </option>
                                </b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Amount:" label-for="amount">
                                <b-form-input id="amount" v-model="amount" placeholder="Enter  amount"
                                    disabled></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Category:" label-for="category">
                                <b-form-input id="category" v-model="category" placeholder="Enter  amount"
                                        disabled></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Card:" label-for="card">
                              <b-form-input id="card" v-model="card" placeholder="Enter  amount"
                                disabled></b-form-input>
                            </b-form-group>
                        </div>

                        <!-- <h4>Upload Document</h4> -->
                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Document Upload:" label-for="profile_picture">
                                <div style="margin-left: 3px; margin-bottom: 15px">
                                    <!-- Display current profile picture -->
                                    <img v-if="editExpense.image" :src="'https://boltapi.fastnetstaffing.in/' + image"
                                        alt="Picture" style="max-width: 100px; max-height: 100px" />

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
            amount: '',
            category: '',
            card:'',
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
        // Load the clients data when the component is created
        const userId = this.$route.params.id;
        axios
            .get(`expense/${userId}`)
            .then((response) => {
                this.editExpense = response.data.data;
                this.image = this.editExpense.image;
                this.amount = this.editExpense.amount;
                this.category = this.editExpense.category;
                 this.card = this.editExpense.card;
                this.user_id = this.editExpense.user_id;

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
        //    Add Vehicle
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
