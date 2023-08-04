
<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                <b-form @submit.prevent="addUser" v-if="show">
                    <div style="background-color: rgb(97,116,152); height:32px; border-radius:4px;">
                        <h5 style="color: rgb(223,227,238); margin-left:5px; font-weight:bold;">Personal Information</h5>
                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="First Name:" label-for="first_name">
                                <b-form-input id="name" type="text" placeholder="Enter first name" autocomplete="off"
                                    v-model="name" required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Email Address:" label-for="email">
                                <b-form-input id="email" placeholder="Enter email address" v-model="email"
                                    required></b-form-input>
                            </b-form-group>


                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="SSN:" label-for="ssn">
                                <b-form-input id="ssn" placeholder="Enter SSN" v-model="ssn" required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <!------------------------ Second Row--------------------------- -->
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Mobile:" label-for="mobile">
                                <b-form-input id="mobile" type="text" placeholder="Enter mobile number" v-model="mobile"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Gender:" label-for="gender">
                                <b-form-input id="gender" placeholder="Enter gender" v-model="gender"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Emergency Name:" label-for="emergency_name">
                                <b-form-input id="emergency_name" type="text" placeholder="Enter emer name"
                                    v-model="emergency_name" required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Emergency Number:" label-for="emergency_number">
                                <b-form-input id="emergency_number" placeholder="Enter remergency number"
                                    v-model="emergency_number" required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Address:" label-for="address">
                                <b-form-input id="address" placeholder="Enter address" v-model="address" required>



                                </b-form-input>
                            </b-form-group>


                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Date of Birth:" label-for="date_of_birth">
                                <b-form-input id="date_of_birth" type="date" placeholder="Enter date of birth"
                                    v-model="date_of_birth" required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Profile Picture:" label-for="profile_pic">
                                <div style="margin-left: 3px; margin-bottom:15px;">
                                    <input type="file" accept="image/*" id="profile_pic">
                                </div>
                            </b-form-group>
                        </div>

                        <div class="col-4">
                            <b-form-group id="input-group-2" label="Select Car Type:" label-for="select_car_type">
                                <b-form-select v-model="selectedCarType">
                                    <option value="">Select Car Type</option>
                                    <option>Own</option>
                                    <option>Company</option>
                                </b-form-select>
                            </b-form-group>
                        </div>



                        <div v-if="selectedCarType === 'Company'" class="col-4">
                            <b-form-group id="input-group-2" label="Select Car:" label-for="select_car">
                                <b-form-select id="select_car" placeholder="Enter select car" v-model="vehicle_id" required>
                                    <option value="">Select Car</option>
                                    <option>Taxi</option>
                                </b-form-select>
                            </b-form-group>
                        </div>
                        <!-- Dropdown  of Add Vehicle -->
                        <div v-if="selectedCarType === 'Own'">
                            <b-row>

                                <div class="col-12 mt-16">
                                    <div style="background-color: rgb(97,116,152); height:32px;border-radius:4px;">
                                        <h5 style="color: rgb(223,227,238); margin-left:5px; font-weight:bold;">Add Vehicle
                                        </h5>
                                    </div>

                                    <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
                                    <div class="row">
                                        <div class="col-4">

                                            <b-form-group id="input-group-1" label="Name:" label-for="name">
                                                <b-form-input id="name" type="text" placeholder="Enter name"
                                                    autocomplete="off"></b-form-input>
                                            </b-form-group>
                                        </div>
                                        <div class="col-4">

                                            <b-form-group id="input-group-2" label="Company Name:" label-for="company_name">
                                                <b-form-input id="company_name" placeholder="Enter comapnay name"
                                                    v-model="company_name" required></b-form-input>
                                            </b-form-group>
                                        </div>


                                        <div class="col-4">

                                            <b-form-group id="input-group-2" label="Description:" label-for="description">
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
                                                    v-model="emergency_number" required></b-form-input>
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
                                    <!-- </b-form> -->


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


                    </div>

                    <div style="background-color: rgb(97,116,152); height:32px; border-radius:4px;">
                        <h5 style="color: rgb(223,227,238); margin-left:5px; font-weight:bold;">Salary Information</h5>
                    </div>

                    <div class="row">
                        <div class="col-4">
                            <b-form-group id="input-group-1" label="Salary:" label-for="salary">
                                <b-form-select v-model="selectedOption" required>
                                    <option value="">Select Salary Type</option>
                                    <option>Fix</option>
                                    <option>Commission</option>
                                    <option>Hourly Enter Amount</option>
                                </b-form-select>
                            </b-form-group>
                        </div>

                        <div v-if="selectedOption === 'Fix'" class="col-4">
                            <b-form-group label="Fix Salary ($/hr)" label-for="fix-salary-input">
                                <b-form-input id="salary_fix" type="text" v-model="salary_fix"
                                    placeholder="Enter fix salary"></b-form-input>
                            </b-form-group>
                        </div>

                        <div v-if="selectedOption === 'Commission'" class="col-4">
                            <b-form-group label="Commission (%/Company)" label-for="commission-input">
                                <b-form-input id="salary_commission" type="text" v-model="salary_commission"
                                    placeholder="Enter commission"></b-form-input>
                            </b-form-group>
                        </div>
                        <div v-if="selectedOption === 'Hourly Enter Amount'" class="col-4">
                            <b-form-group label="Hourly Enter Amount" label-for="commission-input">
                                <b-form-input id="hourly_enter_amount" type="text" v-model="hourly_enter_amount"
                                    placeholder="Enter commission"></b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                    <!-- Bank Information -->
                    <div style="background-color: rgb(97,116,152); height:32px;border-radius:4px;">
                        <h5 style="color: rgb(223,227,238); margin-left:5px; font-weight:bold;">Bank Information</h5>
                    </div>
                    <!-- <h3>Bank Infomation</h3> -->
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Bank Account Holder Name:"
                                label-for="bank_account_holder_name">
                                <b-form-input id="bank_name" type="text" placeholder="Enter bank account holder name"
                                    v-model="bank_name" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Bank Account Number:" label-for="bank_account_number">
                                <b-form-input id="bank_account_number" placeholder="Enter bank account number"
                                    v-model="bank_account_number" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label=" Company Name(own):" label-for="company_name_own">
                                <b-form-input id="company_name_own" type="text" placeholder="Enter company name"
                                    v-model="company_name_own" required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Upload Document:" label-for="upload_doc">
                                <div style="margin-left: 3px; margin-bottom:15px;">
                                    <input type="file" accept="image/*" id="bank_upload_document">
                                </div>
                            </b-form-group>
                        </div>
                        <div class="col-4">
                            <b-form-group id="input-group-1" label="Taxi Driving Liscence:"
                                label-for="taxi_driving_liscence">
                                <b-form-select v-model="taxi_driving_liscence" required>
                                    <option value="">Select Liscence</option>
                                    <option>Liscence B</option>
                                    <!-- <option>Commission</option> -->
                                </b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label=" Emergency Contact Name:"
                                label-for="bank_emergency_contact_name">
                                <b-form-input id="bank_emergency_contact_name" type="text"
                                    placeholder="Enter emergency contact name" v-model="bank_emergency_contact_name"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <!-- Bank Information End -->
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
import axios from 'axios';
import code from "../components/data-entry/form/code";

export default {
    data() {
        return {
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            selectedOption: '',
            fixSalary: '',
            commission: '',
            selectedCarType: '',
            inputField1: '',
            inputField2: '',
            inputField3: '',
            showModal: false,
            // Add Driver 
            name: '',
            email: '',
            ssn: '',
            mobile: '',
            gender: '',
            emergency_name: '',
            emergency_number: '',
            address: '',
            date_of_birth: '',
            profile_picture: '',
            salary: '',
            bank_name: '',
            bank_title: '',
            bank_account_number: '',
            company_name_own: '',
            bank_upload_document: '',
            taxi_driving_liscence: '',
            bank_emergency_contact_name: '',
            company_name: '',
            owner_name: '',
            owner_number: '',
            company_document: '',
            salary_commission: '',
            salary_fix: '',
            hourly_enter_amount: '',




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


        addUser() {
            axios
                .post("drivers", {
                    name: this.name,
                    email: this.email,
                    ssn: this.ssn,
                    mobile: this.mobile,
                    emergency_name: this.emergency_name,
                    gender: this.gender,
                    emergency_number: this.emergency_number,
                    address: this.address,
                    date_of_birth: this.date_of_birth,
                    profile_picture: this.profile_picture,
                    salary: this.salary,
                    bank_name: this.bank_name,
                    bank_account_number: this.bank_account_number,
                    company_name_own: this.company_name_own,
                    company_name: this.company_name,
                    taxi_driving_liscence: this.taxi_driving_liscence,
                    bank_emergency_contact_name: this.bank_emergency_contact_name,
                    owner_name: this.owner_name,
                    owner_number: this.owner_number,
                    company_document: this.company_document,
                    salary_commission: this.salary_commission,
                    salary_fix: this.salary_fix,
                    hourly_enter_amount: this.hourly_enter_amount,
                })
                .then((response) => {
                    console.log(response.data);
                    this.successMessage = "driver added successfully!";
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(error.response.data);
                });
        },


        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },

        saveOwnCar() {
            this.showModal = false;
        },
    },
};
</script>
