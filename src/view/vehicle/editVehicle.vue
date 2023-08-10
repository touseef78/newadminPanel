
<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Name:" label-for="name">
                                <b-form-input id="name" type="text" v-model="name" placeholder="Enter name"
                                    autocomplete="off" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Company Name:" label-for="company_name">
                                <b-form-input id="company_name" v-model="company_name" placeholder="Enter company name"
                                    required></b-form-input>
                            </b-form-group>
                        </div>


                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Description:" label-for="description">
                                <b-form-input id="description" v-model="description" placeholder="Enter Description"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Car Make:" label-for="car_make">
                                <b-form-input id="car_make" v-model="car_make" placeholder="Enter Car Make"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Car Model:" label-for="car_model">
                                <b-form-input id="car_model" v-model="car_model" placeholder="Enter Car Model"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Car Color:" label-for="car_color">
                                <b-form-input id="car_color" v-model="car_color" placeholder="Enter Car Color"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Car Number:" label-for="car_number">
                                <b-form-input id="car_numbar" v-model="car_numbar" placeholder="Enter Car Number"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Model Year:" label-for="model_year">
                                <b-form-input id="model_year" v-model="model_year" placeholder="Enter Model Year"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Registration Number:" label-for="registration_number">
                                <b-form-input id="registration_number" v-model="registration_number"
                                    placeholder="Enter Registration Number" required></b-form-input>
                            </b-form-group>
                        </div>
                                           <div class="col-4">

                                >
                                <b-form-group id="input-group-2" label="Vehicle Type:" label-for="vehicle_type">
                                    <b-form-select v-model="selectedVehicleType" required>
                                        <option value="">Select Vehicle Type</option>
                                        <option>Taxi</option>
                                        <option>Delivery Service</option>
                                        <option>Office Use</option>
                                        <option>Extra</option>


                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <div class="col-4">

                                <b-form-group id="input-group-2" label="Last Inspection:" label-for="last_inspection">
                                    <b-form-input id="last_inspection" placeholder="Enter Last Inspection"
                                        required></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-4">

                                <b-form-group id="input-group-2" label="Next Inspection:" label-for="next_inspection">
                                    <b-form-input id="next_inspection" placeholder="Enter Next Inspection"
                                        required></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-4">

                                <b-form-group id="input-group-2" label="Insurance:" label-for="insurance">
                                    <b-form-input id="insurance" placeholder="Enter Insurance" required></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-4">

                                <b-form-group id="input-group-2" label="Texameter Inspection Date:"
                                    label-for="texameter_inspection_date">
                                    <b-form-input id="texameter_inspection_date" type="date"
                                        placeholder="Enter Texameter Inspection Date" required></b-form-input>
                                </b-form-group>
                            </div>

                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Select Equipment:" label-for="select_equipment">
                                <b-form-select v-model="selectedCarType" required>
                                    <!-- <option value="">Select Car Type</option> -->
                                    <option>Tool Kit</option>
                                    <option>Air Pump</option>
                                    <option>Tyre Repair Kit</option>
                                    <option>Pallet Jack</option>
                                    <option>Jump Cable</option>

                                </b-form-select>
                            </b-form-group>
                        </div>



                        <!-- <b-button type="submit" variant="primary" class="mb-8 mr-8">Submit</b-button> -->
                    </div>
                    <!-- Equipment -->
                    <h4>Equipment</h4>


                    <!--------------------- Uploading images button----------------------- -->
                    <div style="margin-left: 3px; margin-bottom:15px;">
                        <!-- Input field to upload image -->
                        <input type="file" accept="image/*">

                        <!-- Image preview -->
                        <!-- <div v-if="imageUrl">
                            <img :src="imageUrl" alt="Uploaded Image" style="max-width: 300px; max-height: 300px;">
                        </div> -->
                    </div>
                    <b-button type="submit" variant="primary" class="mb-8 mr-8">Submit</b-button>

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

} from "bootstrap-vue";
import axios from "axios";
import code from "../components/data-entry/form/code";
import { BToast } from "bootstrap-vue";
export default {
    data() {
        return {
            // form: {
            //     email: "",
            //     name: "",
            //     food: null,
            //     checked: [],
            // },
            // AddExpensive: [
            //     { text: "Select One", value: null },
            //     "Tuning",
            //     "Change Mobile Oil",
            //     "Petrol",
            //     "washing",
            // ],
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            // Add Vehicle 
            name: '',
            vehicle_company: '',
            description: '',
            car_make: '',
            car_model: '',
            car_color: '',
            car_number: '',
            model_year: '',
            registration_number: '',
            equipment: '',
            image: '',
             vehicle_type: '',
            last_inspection: '',
            insurance: '',
            texameter_inspection_date: '',
            last_inspection: '',
            next_inspection: '',


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

    },
    created() {
        console.log('created');
        // Load the clients data when the component is created
        axios
            .get("vehicle/" + this.$route.params.id + '/edit')
            .then((response) => {
                this.vehicles = response.data.data;
                this.name = this.vehicles.name;
                this.vehicle_company = this.vehicles.vehicle_company;
                this.description = this.vehicles.description;
                this.car_make = this.vehicles.car_make;
                this.car_model = this.vehicles.car_model;
                this.car_color = this.vehicles.car_color;
                this.car_number = this.vehicles.car_number;
                this.model_year = this.vehicles.model_year;
                this.registration_number = this.vehicles.registration_number;
                this.equipment = this.vehicles.equipment;
                this.image = this.vehicles.image;
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
            formData.append(" name", this.name);
            formData.append("vehicle_company", this.vehicle_company);
            formData.append("description", this.description);
            formData.append("car_make", this.car_make);
            formData.append("car_model", this.car_model);
            formData.append("car_color", this.car_color);
            formData.append("car_number", this.car_number);
            formData.append("model_year", this.model_year);
            formData.append("registration_number", this.registration_number);
            formData.append("equipment", this.equipment);
            formData.append("image", this.image);


            axios
                .post("Vehicle", formData)
                .then((response) => {
                    console.log(response.data);
                    this.successMessage = "Vehicle added successfully!";
                    setTimeout(() => {
                        this.successMessage = ""; // Clear the success message after 5 seconds
                    }, 5000);
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(error.response.data);
                    this.isLoading = false;
                });
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
