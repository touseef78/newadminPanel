
<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Name:" label-for="name">
                                <b-form-input id="name" type="text" placeholder="Enter name" autocomplete="off"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Company Name:" label-for="company_name">
                                <b-form-input id="company_name" placeholder="Enter company name" required></b-form-input>
                            </b-form-group>
                        </div>


                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Description:" label-for="description">
                                <b-form-input id="description" placeholder="Enter Description" required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Car Make:" label-for="car_make">
                                <b-form-input id="car_make" placeholder="Enter Car Make" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Car Model:" label-for="car_model">
                                <b-form-input id="car_model" placeholder="Enter Car Model" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Car Color:" label-for="car_color">
                                <b-form-input id="car_color" placeholder="Enter Car Color" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Car Number:" label-for="car_number">
                                <b-form-input id="car_numbar" placeholder="Enter Car Number" required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Model Year:" label-for="model_year">
                                <b-form-input id="model_year" placeholder="Enter Model Year" required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Registration Number:" label-for="reg_number">
                                <b-form-input id="reg_number" placeholder="Enter Registration Number"
                                    required></b-form-input>
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

import code from "../components/data-entry/form/code";

export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                food: null,
                checked: [],
            },
            AddExpensive: [
                { text: "Select One", value: null },
                "Tuning",
                "Change Mobile Oil",
                "Petrol",
                "washing",
            ],
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
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

        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },
    },
};
</script>
