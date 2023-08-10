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
              <h5 style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                ">
                Personal Information
              </h5>
            </div>
            <div class="row">
              <div class="col-4">
                <b-form-group id="input-group-1" label="First Name:" label-for="first_name">
                  <b-form-input id="name" type="text" placeholder="Enter first name" autocomplete="off" v-model="name"
                    required>
                  </b-form-input>
                </b-form-group>
              </div>

              <div class="col-4">
                <b-form-group id="input-group-2" label="Email Address:" label-for="email">
                  <b-form-input id="email" placeholder="Enter email address" v-model="email" required>
                  </b-form-input>
                  <!-- <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span> -->
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
                  <b-form-input id="gender" placeholder="Enter gender" v-model="gender" required></b-form-input>
                </b-form-group>
              </div>
              <div class="col-4">
                <b-form-group id="input-group-1" label="Emergency Name:" label-for="emergency_name">
                  <b-form-input id="emergency_name" type="text" placeholder="Enter emer name" v-model="emergency_name"
                    required></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <b-form-group id="input-group-2" label="Emergency Number:" label-for="emergency_number">
                  <b-form-input id="emergency_number" placeholder="Enter remergency number" v-model="emergency_number"
                    required></b-form-input>
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
                  <b-form-input id="date_of_birth" type="date" placeholder="Enter date of birth" v-model="date_of_birth"
                    required></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <b-form-group id="input-group-2" label="Profile Picture:" label-for="profile_picture">
                  <div style="margin-left: 3px; margin-bottom: 15px">
                    <input type="file" accept="image/*" id="profile_picture" @change="onProfilePictureChange" />
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
                <b-form-group id="input-group-2" label="Select Car:" label-for="vehicle_id">
                  <b-form-select id="vehicle_id" placeholder="Enter select car" v-model="vehicle_id" required>
                    <option value="">Select Car</option>
                    <option value="">Audi</option>
                    <option value="">Honda Live</option>
                    <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                      {{ vehicle.name }}
                    </option>
                  </b-form-select>
                </b-form-group>
              </div>
              <!-- Dropdown  of Add Vehicle -->
              <div v-if="selectedCarType === 'Own'">
                <b-row>
                  <div class="col-12 mt-16">
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
                        Add Vehicle
                      </h5>
                    </div>

                    <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
                    <div class="row">
                      <div class="col-4">
                        <b-form-group id="input-group-1" label="Name:" label-for="name">
                          <b-form-input id="name" type="text" placeholder="Enter name" autocomplete="off"
                            v-model="vehicle_name"></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-4">
                        <b-form-group id="input-group-2" label="Company Name:" label-for="company_name">
                          <b-form-input id="vehicle_company" placeholder="Enter comapnay name"
                            v-model="vehicle_company"></b-form-input>
                        </b-form-group>
                      </div>

                      <div class="col-4">
                        <b-form-group id="input-group-2" label="Description:" label-for="description">
                          <b-form-input id="description" placeholder="Enter Description"
                            v-model="description"></b-form-input>
                        </b-form-group>
                      </div>

                      <div class="col-4">
                        <b-form-group id="input-group-2" label="Car Make:" label-for="car_make">
                          <b-form-input id="car_make" placeholder="Enter Car Make" v-model="car_make"></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-4">
                        <b-form-group id="input-group-2" label="Car Model:" label-for="car_model">
                          <b-form-input id="car_model" placeholder="Enter Car Model" v-model="car_model"></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-4">
                        <b-form-group id="input-group-2" label="Car Color:" label-for="car_color">
                          <b-form-input id="car_color" placeholder="Enter Car Color" v-model="car_color"></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-4">
                        <b-form-group id="input-group-2" label="Car Number:" label-for="car_number">
                          <b-form-input id="car_numbar" placeholder="Enter Car Number"
                            v-model="car_number"></b-form-input>
                        </b-form-group>
                      </div>
                    </div>

                    <!--------------------- Uploading images button----------------------- -->
                    <div style="margin-left: 3px; margin-bottom: 15px">
                      <input type="file" accept="image/*" id="vehicle_image" @change="vehicleImageChange" />
                    </div>
                    <!-- </b-form> -->
                  </div>

                  <div v-if="codeActive" class="col-12 mt-24 hljs-container" :class="{ active: codeActiveClass }">
                    <pre v-highlightjs>
                                     <code class="hljs html">
                                    {{ codeText }}
                                          </code>
                                                </pre>
                  </div>
                </b-row>
              </div>
            </div>

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
                Salary Information
              </h5>
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
                <b-form-group label="Hourly Enter Amount" label-for="hourly_enter_amount">
                  <b-form-input id="hourly_enter_amount" type="text" v-model="hourly_enter_amount"
                    placeholder="Enter Hourly Amount"></b-form-input>
                </b-form-group>
              </div>
              <div v-if="selectedOption === 'Hourly Enter Amount'" class="col-4">
                <b-form-group label="Total Number Of Hours" label-for="total_number_hour">
                  <b-form-input id="total_number_hour" type="text" v-model="total_number_hour"
                    placeholder="Enter Total Number Hours"></b-form-input>
                </b-form-group>
              </div>
            </div>
            <!-- Bank Information -->
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
                Bank Information
              </h5>
            </div>
            <!-- <h3>Bank Infomation</h3> -->
            <div class="row">
              <div class="col-4">
                <b-form-group id="input-group-1" label="Bank Account Holder Name:" label-for="bank_account_holder_name">
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
                <b-form-group id="input-group-1" label="Upload Document:" label-for="bank_upload_document">
                  <div style="margin-left: 3px; margin-bottom: 15px">
                    <input type="file" accept="image/*" id="bank_upload_document" @change="BnakImageChange" />
                  </div>
                </b-form-group>
              </div>
              <div class="col-4">
                <b-form-group id="input-group-1" label="Taxi Driving Liscence:" label-for="taxi_driving_liscence">
                  <b-form-select v-model="taxi_driving_liscence" required>
                    <option value="">Select Liscence</option>
                    <!-- <option>Liscence B</option> -->
                    <option>Driving Liscence/Swedish ID</option>
                    <option>Taxi Liscence</option>
                  </b-form-select>
                </b-form-group>
              </div>
              <div class="col-4">
                <b-form-group id="input-group-1" label=" Emergency Contact Name:" label-for="bank_emergency_contact_name">
                  <b-form-input id="bank_emergency_contact_name" type="text" placeholder="Enter emergency contact name"
                    v-model="bank_emergency_contact_name" required></b-form-input>
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
      ssn: "",
      mobile: "",
      gender: "",
      emergency_name: "",
      emergency_number: "",
      address: "",
      date_of_birth: "",
      salary: "",
      bank_name: "",
      bank_title: "",
      bank_account_number: "",
      company_name_own: "",
      bank_upload_document: null,
      taxi_driving_liscence: "",
      bank_emergency_contact_name: "",
      company_name: "",
      owner_name: "",
      owner_number: "",
      company_document: "",
      salary_commission: "",
      salary_fix: "",
      hourly_enter_amount: "",
      profile_picture: null,
      successMessage: "",
      vehicle_id: "",
      vehicles: [],
      ////

      vehicle_name: "",
      vehicle_company: "",
      description: "",
      car_make: "",
      car_model: "",
      car_color: "",
      car_number: "",
      vehicle_image: null,
      hourly_enter_amount: '',
      total_number_hour: '',





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
      formData.append("profile_picture", this.profile_picture);
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("ssn", this.ssn);
      formData.append("mobile", this.mobile);
      formData.append("gender", this.gender);
      formData.append("emergency_name", this.emergency_name);
      formData.append("emergency_number", this.emergency_number);
      formData.append("address", this.address);
      formData.append("date_of_birth", this.date_of_birth);
      formData.append("salary", this.salary);
      formData.append("bank_name", this.bank_name);
      formData.append("bank_account_number", this.bank_account_number);
      formData.append("company_name_own", this.company_name_own);
      formData.append("company_name", this.company_name);
      formData.append("taxi_driving_liscence", this.taxi_driving_liscence);
      formData.append(
        "bank_emergency_contact_name",
        this.bank_emergency_contact_name
      );
      formData.append("owner_name", this.owner_name);
      formData.append("owner_number", this.owner_number);
      formData.append("company_document", this.company_document);
      formData.append("salary_commission", this.salary_commission);
      formData.append("salary_fix", this.salary_fix);
      formData.append("hourly_enter_amount", this.hourly_enter_amount);
      formData.append("vehicle_id", this.vehicle_id);
      formData.append("vehicle_name", this.vehicle_name);
      formData.append("vehicle_company", this.vehicle_company);
      formData.append("description", this.description);
      formData.append("car_make", this.car_make);
      formData.append("car_model", this.car_model);
      formData.append("car_color", this.car_color);
      formData.append("car_number", this.car_number);
      formData.append("total_number_hour", this.total_number_hour);
      formData.append("vehicle_image", this.vehicle_image);
      formData.append("bank_upload_document", this.bank_upload_document);
      axios
        .post("drivers", formData)
        .then((response) => {
          console.log(response.data);
          this.$bvToast.toast("Driver added successfully!", {
            title: "Success",
            variant: "success",
            solid: true,
            appendToast: true,
            toaster: "b-toaster-top-right",
            autoHideDelay: 5000,
            variant: "dark", // Background color
            titleClass: "text-black", // Title text color
            bodyClass: "text-black", // Body text color
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

    vehicleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Set the selected file to the data property
        this.vehicle_image = file;
      }
    },

    BnakImageChange(event) {
      const file = event.target.files[0];
      if (file) {
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
