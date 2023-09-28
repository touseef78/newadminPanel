<template>
  <div>
    <div
      v-if="successMessage"
      class="alert alert-success"
      style="color: rgb(5, 20, 48)"
    >
      {{ successMessage }}
    </div>
    <b-card>
      <b-row>
        <div class="col-12 mt-16">
          <b-form @submit.prevent="addUser" v-if="show">
            <div
              style="
                background-color: rgb(97, 116, 152);
                height: 32px;
                border-radius: 4px;
              "
            >
              <h5
                style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                "
              >
                Company Information
              </h5>
            </div>
            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Select Company:"
                  label-for="company_id"
                >
                  <b-form-select
                    id="company_id"
                    placeholder="Select Company"
                    v-model="company_id"
                  >
                    <option value="">Select Company</option>
                    <option
                      v-for="company in companyes"
                      :key="company.id"
                      :value="company.id"
                    >
                      {{ company.company_name }}
                      <!-- Bind company_name here -->
                    </option>
                  </b-form-select>
                </b-form-group>
              </div>
            </div>

            <div
              style="
                background-color: rgb(97, 116, 152);
                height: 32px;
                border-radius: 4px;
              "
            >
              <h5
                style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                "
              >
                Personal Information
              </h5>
            </div>
            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="First Name:"
                  label-for="first_name"
                >
                  <b-form-input
                    id="name"
                    type="text"
                    placeholder="Enter first name"
                    autocomplete="off"
                    v-model="name"
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Last Name:"
                  label-for="last_name"
                >
                  <b-form-input
                    id="last_name"
                    type="text"
                    placeholder="Enter first name"
                    autocomplete="off"
                    v-model="last_name"
                  >
                  </b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Email Address:"
                  label-for="email"
                >
                  <b-form-input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    v-model="email"
                  >
                  </b-form-input>
                  <!-- <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span> -->
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="Password:" label-for="">
                  <b-form-input
                    id="ssn"
                    type="password"
                    placeholder="Enter Password"
                    v-model="ssn"
                  ></b-form-input>
                </b-form-group>
              </div>

              <!------------------------ Second Row--------------------------- -->

              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Mobile:"
                  label-for="mobile"
                >
                  <b-form-input
                    id="mobile"
                    type="text"
                    placeholder="Enter mobile number"
                    v-model="mobile"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Gender:"
                  label-for="gender"
                >
                  <b-form-input
                    id="gender"
                    placeholder="Enter gender"
                    v-model="gender"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Emergency Contact Name:"
                  label-for="emergency_contact_name"
                >
                  <b-form-input
                    id="emergency_contact_name"
                    type="text"
                    placeholder="Enter emergency contact name"
                    v-model="emergency_contact_name"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Emergency Contact Number:"
                  label-for="emergency_contact_number"
                >
                  <b-form-input
                    id="emergency_contact_number"
                    placeholder="Enter emergency contact number"
                    v-model="emergency_contact_number"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Address:"
                  label-for="address"
                >
                  <b-form-input
                    id="address"
                    placeholder="Enter address"
                    v-model="address"
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Date of Birth:"
                  label-for="date_of_birth"
                >
                  <b-form-input
                    id="date_of_birth"
                    type="date"
                    placeholder="Enter date of birth"
                    v-model="date_of_birth"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Person Number:"
                  label-for="security_code"
                >
                  <b-form-input
                    id="security_code"
                    placeholder="Enter person number"
                    v-model="security_code"
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <!-- <div class="col-md-4 col-12">
                    <b-form-group id="input-group-2" label="Social Security Number:" label-for="security_code">
                      <b-form-input id="security_code" type="text" placeholder="Enter security code" v-model="security_code"
                        required minlength="10" maxlength="12"></b-form-input>
                    </b-form-group>
                  </div> -->
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Select Car Type:"
                  label-for="select_car_type"
                >
                  <b-form-select v-model="selectedCarType">
                    <option value="">Select Car Type</option>
                    <option>Own</option>
                    <option>Company</option>
                  </b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Postal Code:"
                  label-for="postal_code"
                >
                  <b-form-input
                    id="postal_code"
                    placeholder="Enter Postal code"
                    v-model="postal_code"
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-2" label="City:" label-for="city">
                  <b-form-input
                    id="city"
                    placeholder="Enter city"
                    v-model="city"
                  >
                  </b-form-input>
                </b-form-group>
              </div>

              <div v-if="selectedCarType === 'Company'" class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Select Car:"
                  label-for="vehicle_id"
                >
                  <b-form-select
                    id="vehicle_id"
                    placeholder="Enter select car"
                    v-model="vehicle_id"
                  >
                    <option value="">Select Car</option>
                    <option
                      v-for="vehicle in vehicles"
                      :key="vehicle.id"
                      :value="vehicle.id"
                    >
                    {{ vehicle.name }} | {{ vehicle.car_number }} 
                    </option>
                  </b-form-select>
                </b-form-group>
              </div>
              <!-- Dropdown  of Add Vehicle -->
              <div v-if="selectedCarType === 'Own'">
                <b-row>
                  <div class="col-12 mt-16">
                    <div
                      style="
                        background-color: rgb(97, 116, 152);
                        height: 32px;
                        border-radius: 4px;
                      "
                    >
                      <h5
                        style="
                          color: rgb(223, 227, 238);
                          margin-left: 5px;
                          font-weight: bold;
                        "
                      >
                        Add Vehicle
                      </h5>
                    </div>

                    <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
                    <div class="row">
                      <div class="col-md-4 col-12">
                        <b-form-group
                          id="input-group-1"
                          label="Name:"
                          label-for="name"
                        >
                          <b-form-input
                            id="name"
                            type="text"
                            placeholder="Enter name"
                            autocomplete="off"
                            v-model="vehicle_name"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-4 col-12">
                        <b-form-group
                          id="input-group-2"
                          label="Company Name:"
                          label-for="company_name"
                        >
                          <b-form-input
                            id="vehicle_company"
                            placeholder="Enter comapnay name"
                            v-model="vehicle_company"
                          ></b-form-input>
                        </b-form-group>
                      </div>

                      <div class="col-md-4 col-12">
                        <b-form-group
                          id="input-group-2"
                          label="Description:"
                          label-for="description"
                        >
                          <b-form-input
                            id="description"
                            placeholder="Enter Description"
                            v-model="description"
                          ></b-form-input>
                        </b-form-group>
                      </div>

                      <div class="col-md-4 col-12">
                        <b-form-group
                          id="input-group-2"
                          label="Car Make:"
                          label-for="car_make"
                        >
                          <b-form-input
                            id="car_make"
                            placeholder="Enter Car Make"
                            v-model="car_make"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-4 col-12">
                        <b-form-group
                          id="input-group-2"
                          label="Car Model:"
                          label-for="car_model"
                        >
                          <b-form-input
                            id="car_model"
                            placeholder="Enter Car Model"
                            v-model="car_model"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-4 col-12">
                        <b-form-group
                          id="input-group-2"
                          label="Car Color:"
                          label-for="car_color"
                        >
                          <b-form-input
                            id="car_color"
                            placeholder="Enter Car Color"
                            v-model="car_color"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-4 col-12">
                        <b-form-group
                          id="input-group-2"
                          label="Car Number:"
                          label-for="car_number"
                        >
                          <b-form-input
                            id="car_numbar"
                            placeholder="Enter Car Number"
                            v-model="car_number"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>

                    <!--------------------- Uploading images button----------------------- -->
                    <div class="col-md-4 col-12">
                      <b-form-group
                        id="input-group-1"
                        label="Vehicle Documents:"
                        label-for="vehicle_image"
                      >
                        <div style="display: flex">
                          <!-- Display current vehicle images -->
                          <div
                            v-for="(image, index) in editedUser.vehicle_image"
                            :key="index"
                            style="margin-left: 3px; margin-bottom: 15px"
                          >
                            <img
                              :src="
                                'https://boltapi.fastnetstaffing.in/' + image
                              "
                              alt="Vehicle Image"
                              style="max-width: 100px; max-height: 100px"
                            />
                          </div>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          id="vehicle_image"
                          multiple
                          @change="vehicleImageChange"
                        />
                      </b-form-group>
                    </div>

                    <!-- </b-form> -->
                  </div>

                  <div
                    v-if="codeActive"
                    class="col-12 mt-24 hljs-container"
                    :class="{ active: codeActiveClass }"
                  >
                    <pre v-highlightjs>
                                       <code class="hljs html">
                                      {{ codeText }}
                                            </code>
                                                  </pre>
                  </div>
                </b-row>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Joining Date:"
                  label-for="joining_date"
                >
                  <b-form-input
                    id="joining_date"
                    type="date"
                    v-model="joining_date"
                  >
                  </b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Profile Picture:"
                  label-for="profile_picture"
                >
                  <div style="margin-left: 3px; margin-bottom: 15px">
                    <!-- Display current profile picture -->
                    <img
                      v-if="editedUser.profile_picture"
                      :src="
                        'https://boltapi.fastnetstaffing.in/' + profile_picture
                      "
                      alt="Picture"
                      style="max-width: 100px; max-height: 100px"
                    />
                    <!-- Input field to upload new profile picture -->
                    <input
                      type="file"
                      accept="image/*"
                      id="profile_picture"
                      @change="onProfilePictureChange"
                    />
                  </div>
                </b-form-group>
              </div>
            </div>

            <div
              style="
                background-color: rgb(97, 116, 152);
                height: 32px;
                border-radius: 4px;
              "
            >
              <h5
                style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                "
              >
                Salary Information
              </h5>
            </div>

            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Salary:"
                  label-for="salary"
                >
                  <b-form-select v-model="selectedOption">
                    <option value="">Select Salary Type</option>
                    <option>Fix</option>
                    <option>Commission</option>
                    <option>Hourly Rate</option>
                  </b-form-select>
                </b-form-group>
              </div>

              <div v-if="selectedOption === 'Fix'" class="col-md-4 col-12">
                <b-form-group
                  label="Fix Salary ($/hr)"
                  label-for="fix-salary-input"
                >
                  <b-form-input
                    id="salary_fix"
                    type="text"
                    v-model="salary_fix"
                    placeholder="Enter fix salary"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div
                v-if="selectedOption === 'Commission'"
                class="col-md-4 col-12"
              >
                <b-form-group
                  label="Commission Include VAT (%/Company)"
                  label-for="commission-input"
                >
                  <b-form-input
                    id="salary_commission"
                    type="text"
                    v-model="salary_commission"
                    placeholder="Enter commission include vat"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div
                v-if="selectedOption === 'Commission'"
                class="col-md-4 col-12"
              >
                <b-form-group
                  label="Commission Exclusive VAT (%/Company)"
                  label-for="commission-input"
                >
                  <b-form-input
                    id="salary_commission"
                    type="text"
                    v-model="salary_commission_exclusive"
                    placeholder="Enter commission exclusive vat"
                  ></b-form-input>
                </b-form-group>
              </div>

              <div
                v-if="selectedOption === 'Hourly Rate'"
                class="col-md-4 col-12"
              >
                <b-form-group
                  label="Hourly Rate (SEK/hr)"
                  label-for="hourly_enter_amount"
                >
                  <b-form-input
                    id="hourly_enter_amount"
                    type="text"
                    v-model="hourly_enter_amount"
                    placeholder="Enter Hourly Rate"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div
                v-if="selectedOption === 'Hourly Rate'"
                class="col-md-4 col-12"
              >
                <b-form-group
                  label="Total Number Of Hours ($/hr)"
                  label-for="total_number_hour"
                >
                  <b-form-input
                    id="total_number_hour"
                    type="text"
                    v-model="total_number_hour"
                    placeholder="Enter Total Number Hours"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <!-- Bank Information -->
            <div
              style="
                background-color: rgb(97, 116, 152);
                height: 32px;
                border-radius: 4px;
              "
            >
              <h5
                style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                "
              >
                Bank Information
              </h5>
            </div>
            <!-- <h3>Bank Infomation</h3> -->
            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Bank Account Holder Name:"
                  label-for="bank_account_holder_name"
                >
                  <b-form-input
                    id="bank_name"
                    type="text"
                    placeholder="Enter bank account holder name"
                    v-model="bank_name"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Bank Account Number:"
                  label-for="bank_account_number"
                >
                  <b-form-input
                    id="bank_account_number"
                    placeholder="Enter bank account number"
                    v-model="bank_account_number"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label=" Company Name(own):"
                  label-for="company_name_own"
                >
                  <b-form-input
                    id="company_name_own"
                    type="text"
                    placeholder="Enter company name"
                    v-model="company_name_own"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Upload Document:"
                  label-for="bank_upload_document"
                >
                  <div style="margin-left: 3px; margin-bottom: 15px">
                    <!-- Display current profile picture -->
                    <img
                      v-if="editedUser.bank_upload_document"
                      :src="
                        'https://boltapi.fastnetstaffing.in/' +
                        bank_upload_document
                      "
                      alt="Picture"
                      style="max-width: 100px; max-height: 100px"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      id="bank_upload_document"
                      @change="BnakImageChange"
                    />
                  </div>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label="Taxi Driving License:"
                  label-for="taxi_driving_liscence"
                >
                  <b-form-select v-model="taxi_driving_liscence">
                    <option value="">Select License</option>
                    <option>Driving License/Swedish ID</option>
                    <option>Taxi License</option>
                    <option>Other</option>
                    <!-- <option>Liscence B</option> -->
                    <!-- <option>Commission</option> -->
                  </b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-1"
                  label=" Description:"
                  label-for="bank_emergency_contact_name"
                >
                  <b-form-input
                    id="bank_emergency_contact_name"
                    type="text"
                    placeholder="Enter Description"
                    v-model="bank_emergency_contact_name"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <!-- Bank Information End -->
            <b-button
              type="submit"
              variant="primary"
              class="mb-8 mr-8"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Submit</span>
              <b-spinner
                v-else
                class="mb-8 mr-8"
                variant="primary"
                small
              ></b-spinner>
            </b-button>
          </b-form>
        </div>
        <div
          v-if="codeActive"
          class="col-12 mt-24 hljs-container"
          :class="{ active: codeActiveClass }"
        >
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
import code from "../../../components/data-entry/form/code";

export default {
  data() {
    return {
      show: true,
      codeText: code.introduction,
      codeActive: false,
      codeActiveClass: false,
      selectedOption: "",
      fixSalary: "",
      commission: "",
      selectedCarType: "",
      inputField1: "",
      inputField2: "",
      inputField3: "",
      showModal: false,
      isLoading: false,
      // Add Driver
      name: "",
      email: "",
      security_code: "",
      mobile: "",
      gender: "",
      emergency_contact_name: "",
      emergency_contact_number: "",
      address: "",
      date_of_birth: "",
      salary: "",
      last_name: "",
      joining_date: "",
      bank_name: "",
      bank_title: "",
      bank_account_number: "",
      salary_commission_exclusive: "",
      company_name_own: "",
      bank_upload_document: null,
      taxi_driving_liscence: "",
      bank_emergency_contact_name: "",
      salary_commission: "",
      salary_fix: "",
      hourly_enter_amount: "",
      profile_picture: null,
      successMessage: "",
      vehicle_id: "",
      vehicles: [],
      editedUser: {
        vehicle_image: [], // Initialize the array here
      },
      vehicle_name: "",
      postal_code: "",
      city: "",
      vehicle_company: "",
      description: "",
      car_make: "",
      car_model: "",
      car_color: "",
      car_number: "",
      vehicle_image: [],
      total_number_hour: "",
      company_id: "",
      company_name: "",
      companyes: [],

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
    axios
      .get("vehicle")
      .then((response) => {
        this.vehicles = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get("company")
      .then((response) => {
        this.companyes = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    const userId = this.$route.params.id;
    axios
      .get(`B2Bshowdriver/${userId}`)
      .then((response) => {
        this.editedUser = response.data.data;

        this.salary_commission_exclusive =
          this.editedUser.salary_commission_exclusive;
        this.last_name = this.editedUser.last_name;
        this.name = this.editedUser.name;
        this.email = this.editedUser.email;
        this.security_code = this.editedUser.security_code;
        this.joining_date = this.editedUser.joining_date;
        this.mobile = this.editedUser.mobile;
        this.gender = this.editedUser.gender;
        this.emergency_contact_name = this.editedUser.emergency_contact_name;
        this.emergency_contact_number =
          this.editedUser.emergency_contact_number;
        this.address = this.editedUser.address;
        this.date_of_birth = this.editedUser.date_of_birth;
        this.profile_picture = this.editedUser.profile_picture;
        this.salary_commission = this.editedUser.salary_commission;
        this.salary_fix = this.editedUser.salary_fix;
        this.hourly_enter_amount = this.editedUser.hourly_enter_amount;
        this.bank_name = this.editedUser.bank_name;
        this.bank_title = this.editedUser.bank_title;
        this.bank_account_number = this.editedUser.bank_account_number;
        this.company_name_own = this.editedUser.company_name_own;
        this.bank_upload_document = this.editedUser.bank_upload_document;
        this.bank_emergency_contact_name =
          this.editedUser.bank_emergency_contact_name;
        this.vehicle_id = this.editedUser.vehicle_id;
        this.taxi_driving_liscence = this.editedUser.taxi_driving_liscence;
        this.vehicle_name = this.editedUser.vehicle_name;
        this.description = this.editedUser.description;
        this.vehicle_company = this.editedUser.vehicle_company;
        this.car_make = this.editedUser.car_make;
        this.car_model = this.editedUser.car_model;
        this.car_color = this.editedUser.car_color;
        this.car_number = this.editedUser.car_number;
        this.postal_code = this.editedUser.postal_code;
        this.city = this.editedUser.city;
        this.vehicle_image = this.editedUser.vehicle_image;
        this.total_number_hour = this.editedUser.total_number_hour;
        this.company_id = this.editVehicle.company_id;
        this.company.company_name = this.editVehicle.company.company_name;
            // Depending on the selected option, set the appropriate salary value
        if (this.editedUser.salary_fix !== null) {
          this.selectedOption = "Fix";
        } else if (this.editedUser.salary_commission !== null) {
          this.selectedOption = "Commission";
        } else if (this.editedUser.hourly_enter_amount !== null) {
          this.selectedOption = "Hourly Enter Amount";
        }

        if (this.editedUser.vehicle_id !== null) {
          this.selectedCarType = "Company";
        } else if (this.editedUser.car_color !== null) {
          this.selectedCarType = "Own";
        }

        // ... and so on for other properties ...
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

      formData.append(
        "salary_commission_exclusive",
        this.salary_commission_exclusive
      );
      formData.append("name", this.name);
      formData.append("last_name", this.last_name);
      formData.append("email", this.email);
      formData.append("security_code", this.ssn);
      formData.append("joining_date", this.joining_date);
      formData.append("mobile", this.mobile);
      formData.append("gender", this.gender);
      formData.append("emergency_contact_name", this.emergency_contact_name);
      formData.append(
        "emergency_contact_number",
        this.emergency_contact_number
      );
      formData.append("address", this.address);
      formData.append("date_of_birth", this.date_of_birth);
      formData.append("salary", this.salary);
      formData.append("bank_name", this.bank_name);
      formData.append("bank_account_number", this.bank_account_number);
      formData.append("company_name_own", this.company_name_own);
      formData.append("taxi_driving_liscence", this.taxi_driving_liscence);
      formData.append(
        "bank_emergency_contact_name",
        this.bank_emergency_contact_name
      );
      formData.append("salary_commission", this.salary_commission);
      formData.append("salary_fix", this.salary_fix);
      formData.append("hourly_enter_amount", this.hourly_enter_amount);
      if (this.vehicle_id != null) {
        formData.append("vehicle_id", this.vehicle_id);
      }
      formData.append("profile_picture", this.profile_picture);
      formData.append("vehicle_name", this.vehicle_name);
      formData.append("vehicle_company", this.vehicle_company);
      formData.append("car_make", this.car_make);
      formData.append("car_model", this.car_model);
      formData.append("car_color", this.car_color);
      formData.append("car_number", this.car_number);
      formData.append("postal_code", this.postal_code);
      formData.append("city", this.city);
      formData.append("company_id", this.company_id);
      if (this.vehicle_image) {
        for (const image of this.vehicle_image) {
          formData.append("vehicle_image[]", image);
        }
      }
      formData.append("bank_upload_document", this.bank_upload_document);
      formData.append("total_number_hour", this.total_number_hour);
      axios
        .post(`driversUpdate/${this.editedUser.id}`, formData)
        .then((response) => {
          console.log(response.data);
          this.$bvToast.toast("Driver Update successfully!", {
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
        this.profile_picture = file;
      }
    },

    //   vehicleImagesChange(event) {
    //   const files = event.target.files;
    //   if (files && files.length > 0) {
    //     const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
    //     this.editedUser.vehicle_image = this.editedUser.vehicle_image.concat(imageUrls);
    //   }
    // },

    vehicleImageChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        // Convert FileList to an array
        this.vehicle_image = Array.from(files);
      }
    },

    BnakImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Set the selected file to the data property
        this.bank_upload_document = file;
      }
    },

    onCompanyDocumentChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.company_document = file;
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
