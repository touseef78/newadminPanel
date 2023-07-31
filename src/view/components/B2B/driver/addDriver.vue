
<template>
    <b-card>
        <b-row>

            <div class="col-12 mt-16">
                <!-- Company Information  -->
                <div style="background-color: rgb(97,116,152); height:30px">
                    <h5 style="color: rgb(223,227,238); margin-left:5px;">Company Information</h5>
                </div>
                <div class="row">
                    <div class="col-4">

                        <b-form-group id="input-group-1" label="Comapany:" label-for="company">
                            <b-form-input id="company" type="text" placeholder="Enter comapany" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-4">
                        <b-form-group id="input-group-1" label=" Owner Name:" label-for="owner_name">
                            <b-form-input id="owner_name" type="text" placeholder="Enter owner name"
                                required></b-form-input>
                        </b-form-group>

                    </div>
                    <div class="col-4">

                        <b-form-group id="input-group-1" label=" Owner Number:" label-for="owner_number">
                            <b-form-input id="owner_number" type="text" placeholder="Enter owner number"
                                required></b-form-input>
                        </b-form-group>
                    </div>

                </div>

                <div class="row">
                    <div class="col-4">

                        <b-form-group id="input-group-1" label="Comapany Document:" label-for="company_document">

                            <div style="margin-left: 3px; margin-bottom:15px;">
                                <!-- Input field to upload image -->
                                <input type="file" accept="image/*">

                                <!-- Image preview -->
                                <!-- <div v-if="imageUrl">
                            <img :src="imageUrl" alt="Uploaded Image" style="max-width: 300px; max-height: 300px;">
                        </div> -->
                            </div>
                        </b-form-group>



                    </div>



                </div>

                <!-- Company information End -->
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <div style="background-color: rgb(97,116,152); height:30px">
                        <h5 style="color: rgb(223,227,238); margin-left:5px;">Personal Information</h5>
                    </div>
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
                                <b-form-input id="emg_name" type="text" placeholder="Enter emergency name"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Emergency Number:" label-for="emg_num">
                                <b-form-input id="emg_num" placeholder="Enter emergency number" required></b-form-input>
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
                    <!-- Driver -->
                    <!-- <div style="background-color: rgb(121, 156, 166); height:20px">
                        <h6 style="color: rgba(2, 2, 252, 0.607);">Driver Information</h6>
                    </div> -->
                    <div style="background-color: rgb(97,116,152); height:30px">
                        <h5 style="color: rgb(223,227,238); margin-left:5px;">Driver Information</h5>
                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Name:" label-for="name">
                                <b-form-input id="name" type="text" placeholder="Enter  name" autocomplete="off"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Phone Number:" label-for="phone_num">
                                <b-form-input id="phone_num" placeholder="Enter phone number" required></b-form-input>
                            </b-form-group>


                        </div>

                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Profile Picture:" label-for="profile_pic">

                                <div style="margin-left: 3px; margin-bottom:15px;">
                                    <!-- Input field to upload image -->
                                    <input type="file" accept="image/*">

                                    <!-- Image preview -->
                                    <!-- <div v-if="imageUrl">
                            <img :src="imageUrl" alt="Uploaded Image" style="max-width: 300px; max-height: 300px;">
                        </div> -->
                                </div>
                            </b-form-group>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Start Date:" label-for="start_date">
                                <b-form-input id="start_date" type="date" placeholder="Enter start date" required>

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
                                    <option>Taxi</option>
                                    <option>Delivery</option>
                                    <option>Service</option>
                                    <option>Office Use</option>
                                    <option>Extra</option>

                                </b-form-select>
                            </b-form-group>
                        </div>
                        <!-- Dropdown  of Add Vehicle -->
                        <div v-if="selectedCarType === 'Own'">
                            <b-row>

                                <div class="col-12 mt-16">
                                    <div style="background-color: rgb(97,116,152); height:30px">
                                        <h5 style="color: rgb(223,227,238); margin-left:5px;">Add Vehicle</h5>
                                    </div>

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

                    </div>

                    <!-- <div style="background-color: rgb(121, 156, 166); height:20px">
                        <h6 style="color: rgba(2, 2, 252, 0.829);">Salary Information</h6>
                    </div> -->
                    <div style="background-color: rgb(97,116,152); height:30px">
                        <h5 style="color: rgb(223,227,238); margin-left:5px;">Salary Information</h5>
                    </div>

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
                    <!-- Bank Information -->
                    <div style="background-color: rgb(97,116,152); height:30px">
                        <h5 style="color: rgb(223,227,238); margin-left:5px;">Bank Information</h5>
                    </div>
                    <!-- <h3>Bank Infomation</h3> -->
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Bank Account Holder Name:"
                                label-for="bank_account_holder_name">
                                <b-form-input id="bank_account_holder_name" type="text"
                                    placeholder="Enter bank account holder name" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Bank Account Number:" label-for="bank_account_number">
                                <b-form-input id="bank_account_number" placeholder="Enter bank account number"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label=" Company Name(own):" label-for="company_name">
                                <b-form-input id="company_name" type="text" placeholder="Enter company name"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Upload Document:" label-for="upload_doc">

                                <div style="margin-left: 3px; margin-bottom:15px;">
                                    <!-- Input field to upload image -->
                                    <input type="file" accept="image/*">

                                    <!-- Image preview -->
                                    <!-- <div v-if="imageUrl">
                            <img :src="imageUrl" alt="Uploaded Image" style="max-width: 300px; max-height: 300px;">
                        </div> -->
                                </div>
                            </b-form-group>
                        </div>
                        <div class="col-4">
                            <!-- 
                                <b-form-group id="input-group-2" label="Taxi Driving Liscence:" label-for="taxi_driving_liscence">
                                    <b-form-select id="taxi_driving_liscence" placeholder="Enter taxi driving liscence" required>
                                        <option>Liscence B</option>
                                    </b-form-select>
                                </b-form-group> -->

                            <b-form-group id="input-group-1" label="Taxi Driving Liscence:"
                                label-for="taxi_driving_liscence">
                                <b-form-select v-model="selectedOption" required>
                                    <option value="">Select Liscence</option>
                                    <option>Liscence B</option>
                                    <!-- <option>Commission</option> -->
                                </b-form-select>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label=" Emergency Contact Name:"
                                label-for="emergenct_contact_name">
                                <b-form-input id="emergenct_contact_name" type="text"
                                    placeholder="Enter emergency contact name" required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <!-- Bank Information End -->

                    <!-- Company Information  -->
                    <!-- <div style="background-color: rgb(97,116,152); height:30px">
                        <h5 style="color: rgb(223,227,238); margin-left:5px;">Company Information</h5>
                    </div>
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Comapany:" label-for="company">
                                <b-form-input id="company" type="text" placeholder="Enter comapany" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">
                            <b-form-group id="input-group-1" label=" Owner Name:" label-for="owner_name">
                                <b-form-input id="owner_name" type="text" placeholder="Enter owner name"
                                    required></b-form-input>
                            </b-form-group>

                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-1" label=" Owner Number:" label-for="owner_number">
                                <b-form-input id="owner_number" type="text" placeholder="Enter owner number"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Comapany Document:" label-for="company_document">
                                <b-form-input id="company_document" type="text" placeholder="Enter comapany document" required></b-form-input>
                            </b-form-group>
                        </div>



                    </div> -->

                    <!-- Company information End -->

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

// import code from "../components/data-entry/form/code";

export default {
    data() {
        return {
            show: true,
            // codeText: code.introduction,
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
