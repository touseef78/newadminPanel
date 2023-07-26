
<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <!-- <div class="s"></div> -->
                    <h6 style="color: rgba(2, 2, 252, 0.607);">Personal Information</h6>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="First Name:" label-for="first_name">
                                <b-form-input id="first_name" type="text" placeholder="Enter first name" autocomplete="off"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Email Address:" label-for="email">
                                <b-form-input id="email" placeholder="Enter email address" required></b-form-input>
                            </b-form-group>


                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="SSN:" label-for="ssn">
                                <b-form-input id="ssn" placeholder="Enter SSN" required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <!------------------------ Second Row--------------------------- -->
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Mobile:" label-for="mobile">
                                <b-form-input id="mobile" type="text" placeholder="Enter mobile number"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Gender:" label-for="gender">
                                <b-form-input id="gender" placeholder="Enter gender" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Emergency Name:" label-for="emg_name">
                                <b-form-input id="emg_name" type="text" placeholder="Enter emer name"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Emergency Number:" label-for="emg_num">
                                <b-form-input id="emg_num" placeholder="Enter remergency number" required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Address:" label-for="address">
                                <b-form-input id="address" placeholder="Enter address" required>



                                </b-form-input>
                            </b-form-group>


                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Date of Birth:" label-for="date_of_birth">
                                <b-form-input id="date_of_birth" type="date" placeholder="Enter date of birth"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <!----------------------------------- Third Row -------------------->
                    <h6 style="color: rgba(2, 2, 252, 0.607);">Driver Information</h6>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Infomation:" label-for="info">
                                <b-form-input id="info" type="text" placeholder="Enter information" required>
                                    <!-- <option>Fix</option>
                                    <option>Commission</option> -->
                                </b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Select Car Type:" label-for="select_car_type">
                                <b-form-select v-model="selectedCarType" required>
                                    <option value="">Select Car Type</option>
                                    <option>Own</option>
                                    <option>Company</option>
                                </b-form-select>
                            </b-form-group>
                        </div>



                        <div v-if="selectedCarType === 'Company'" class="col-4">
                            <b-form-group id="input-group-2" label="Select Car:" label-for="select_car">
                                <b-form-select id="select_car" placeholder="Enter select car" required>
                                    <option value="">Select Car</option>
                                    <option>Car</option>
                                    <option>Mini car</option>
                                </b-form-select>
                            </b-form-group>
                        </div>
                        <!-- Dropdown  of Add Vehicle -->
                        <div v-if="selectedCarType === 'Own'">
                            <b-row>

                                <div class="col-12 mt-16">
                                    <h6 style="color: rgba(2, 2, 252, 0.607);">Add Vehicle</h6>
                                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                        <div class="row">
                                            <div class="col-4">

                                                <b-form-group id="input-group-1" label="Name:" label-for="name">
                                                    <b-form-input id="name" type="text" placeholder="Enter name"
                                                        autocomplete="off" required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div class="col-4">

                                                <b-form-group id="input-group-2" label="Company Name:"
                                                    label-for="comapnay_name">
                                                    <b-form-input id="comapnay_name" placeholder="Enter comapnay name"
                                                        required></b-form-input>
                                                </b-form-group>
                                            </div>


                                            <div class="col-4">

                                                <b-form-group id="input-group-2" label="Description:"
                                                    label-for="description">
                                                    <b-form-input id="description" placeholder="Enter Description"
                                                        required></b-form-input>
                                                </b-form-group>
                                            </div>

                                            <div class="col-4">

                                                <b-form-group id="input-group-2" label="Car Make:" label-for="car_make">
                                                    <b-form-input id="car_make" placeholder="Enter Car Make"
                                                        required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div class="col-4">

                                                <b-form-group id="input-group-2" label="Car Model:" label-for="car_model">
                                                    <b-form-input id="car_model" placeholder="Enter Car Model"
                                                        required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div class="col-4">

                                                <b-form-group id="input-group-2" label="Car Color:" label-for="car_color">
                                                    <b-form-input id="car_color" placeholder="Enter Car Color"
                                                        required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div class="col-4">

                                                <b-form-group id="input-group-2" label="Car Number:" label-for="car_numbar">
                                                    <b-form-input id="car_numbar" placeholder="Enter Car Number"
                                                        required></b-form-input>
                                                </b-form-group>
                                            </div>
                                        </div>

                                        <!--------------------- Uploading images button----------------------- -->
                                        <div style="margin-left: 3px; margin-bottom:15px;">
                                            <!-- Input field to upload image -->
                                            <input type="file" accept="image/*">
                                        </div>
                                    </b-form>


                                </div>

                                <div v-if="codeActive" class="col-12 mt-24 hljs-container"
                                    :class="{ active: codeActiveClass }">
                                    <pre v-highlightjs>
                                     <code class="hljs html">
                                    {{ codeText }}
                                          </code>
                                                </pre>
                                </div>
                            </b-row>
                        </div>


                        <!-- <b-modal v-if="selectedCarType === 'Own'" v-model="showModal" title="Own Car Modal">
                            <b-form-group label="Input Field 1:" label-for="input_field_1">
                                <b-form-input id="input_field_1" type="text" v-model="inputField1"
                                    placeholder="Enter Input Field 1" required></b-form-input>
                            </b-form-group>
                            <b-form-group label="Input Field 2:" label-for="input_field_2">
                                <b-form-input id="input_field_2" type="text" v-model="inputField2"
                                    placeholder="Enter Input Field 2" required></b-form-input>
                            </b-form-group>
                            <b-form-group label="Input Field 3:" label-for="input_field_3">
                                <b-form-input id="input_field_3" type="text" v-model="inputField3"
                                    placeholder="Enter Input Field 3" required></b-form-input>
                            </b-form-group>
                            <b-button @click="saveOwnCar" variant="primary">Save</b-button>
                            <b-button @click="showModal = false">Cancel</b-button>
                        </b-modal> -->

                    </div>
                    <!-- Add Vehicle -->

                    <!-- Add Vehicle End -->

                    <h6 style="color: rgba(2, 2, 252, 0.607);">Salary Information</h6>
                    <div class="row">
                        <div class="col-4">
                            <b-form-group id="input-group-1" label="Salary:" label-for="salary">
                                <b-form-select v-model="selectedOption" required>
                                    <option value="">Select Salary Type</option>
                                    <option>Fix</option>
                                    <option>Commission</option>
                                </b-form-select>
                            </b-form-group>
                        </div>

                        <div v-if="selectedOption === 'Fix'" class="col-4">
                            <b-form-group label="Fix Salary ($/hr)" label-for="fix-salary-input">
                                <b-form-input id="fix-salary-input" type="text" v-model="fixSalary"
                                    placeholder="Enter fix salary"></b-form-input>
                            </b-form-group>
                        </div>

                        <div v-if="selectedOption === 'Commission'" class="col-4">
                            <b-form-group label="Commission (%/Company)" label-for="commission-input">
                                <b-form-input id="commission-input" type="text" v-model="commission"
                                    placeholder="Enter commission"></b-form-input>
                            </b-form-group>
                        </div>
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
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            selectedOption: '', // Holds the selected option from the <b-form-select>
            fixSalary: '', // Holds the value of the fix salary input
            commission: '', // Holds the value of the commission input
            selectedCarType: '', // Holds the selected car type from the first <b-form-select>
            inputField1: '', // Holds the value of the first input field
            inputField2: '', // Holds the value of the second input field
            inputField3: '', // Holds the value of the third input field
            showModal: false, // Controls the visibility of the modal

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
        showMsgBoxOne() {
            debugger
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

        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },

        saveOwnCar() {
            // Add your logic here to handle the data when "Save" is clicked
            // For example, you can save the inputField1, inputField2, and inputField3 values to your database or perform any other action.
            // Then, close the modal by setting showModal to false
            this.showModal = false;
        },
    },
};
</script>
