<template>
  <b-card>
    <b-row>
      <div class="col-12 mt-16">
        <b-form @submit.prevent="addUser" v-if="show">
          <!-- <h2>Car Information</h2> -->
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
              Car Information
            </h5>
          </div>
          <div class="row">
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Company Name:"
                label-for="vehicle_company"
              >
                <b-form-input
                  id="vehicle_company"
                  v-model="vehicle_company"
                  placeholder="Enter company name"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group id="input-group-1" label="Name:" label-for="name">
                <b-form-input
                  id="name"
                  type="text"
                  v-model="name"
                  placeholder="Enter name"
                  autocomplete="off"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Description:"
                label-for="description"
              >
                <b-form-input
                  id="description"
                  v-model="description"
                  placeholder="Enter Description"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Car Make:"
                label-for="car_make"
              >
                <b-form-input
                  id="car_make"
                  v-model="car_make"
                  placeholder="Enter Car Make"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Car Model:"
                label-for="car_model"
              >
                <b-form-input
                  id="car_model"
                  v-model="car_model"
                  placeholder="Enter Car Model"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Car Color:"
                label-for="car_color"
              >
                <b-form-input
                  id="car_color"
                  v-model="car_color"
                  placeholder="Enter Car Color"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Car Number:"
                label-for="car_number"
              >
                <b-form-input
                  id="car_number"
                  v-model="car_number"
                  placeholder="Enter Car Number"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Model Year:"
                label-for="model_year"
              >
                <b-form-input
                  id="model_year"
                  v-model="model_year"
                  placeholder="Enter Model Year"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Registration Number:"
                label-for="registration_number"
              >
                <b-form-input
                  id="registration_number"
                  v-model="registration_number"
                  placeholder="Enter Registration Number"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <!-- new code  -->
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Vehicle Type:"
                label-for="vehicle_type"
              >
                <b-form-select v-model="vehicle_type" disabled>
                  <option value="">Select Vehicle Type</option>
                  <option>Taxi</option>
                  <option>Delivery Service</option>
                  <option>Office Use</option>
                  <option>Extra</option>
                </b-form-select>
              </b-form-group>
            </div>
          </div>
          <!-- <h2>Car Expense Information</h2> -->
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
              Vehicle Report
            </h5>
          </div>
          <div class="row">
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Last Inspection:"
                label-for="last_inspection"
              >
                <b-form-input
                  id="last_inspection"
                  v-model="last_inspection"
                  type="date"
                  placeholder="Enter Last Inspection"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Next Inspection:"
                label-for="next_inspection"
              >
                <b-form-input
                  id="next_inspection"
                  type="date"
                  v-model="next_inspection"
                  placeholder="Enter Next Inspection"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Insurance:"
                label-for="insurance"
              >
                <b-form-input
                  id="insurance"
                  v-model="insurance"
                  placeholder="Enter Insurance"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Texameter Inspection Date:"
                label-for="texameter_inspection_date"
              >
                <b-form-input
                  id="texameter_inspection_date"
                  type="date"
                  v-model="texameter_inspection_date"
                  placeholder="Enter Texameter Inspection Date"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Select Equipment:"
                label-for="select_equipment"
              >
                <b-form-select v-model="select_equipment" disabled>
                  <option value="">Select Select Equipment</option>
                  <option>Tool Kit</option>
                  <option>Air Pump</option>
                  <option>Tyre Repair Kit</option>
                  <option>Pallet Jack</option>
                  <option>Jump Cable</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Category of Vehicle:"
                label-for="category_of_vehicle"
              >
                <b-form-select v-model="category_of_vehicle" disabled>
                  <option value="">Select Category Vehicle:</option>
                  <option>Taxi</option>
                  <option>Transport</option>
                  <option>Personal</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Vendor Name:"
                label-for="vendor_name"
              >
                <b-form-select v-model="vendor_name" disabled>
                  <option value="">Select Vendor Name</option>
                  <option>Uber</option>
                  <option>Bolt</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Insurance Company Name:"
                label-for="insurance_company_name"
              >
                <b-form-input
                  v-model="insurance_company_name"
                  placeholder="Enter Insurance Company Name"
                  disabled
                >
                  <!-- <option value="">Select Car Type</option> -->
                  <!-- <option>Uber</option> -->
                  <!-- <option>Bolt</option> -->
                </b-form-input>
              </b-form-group>
            </div>
            <!-- <div class="col-4">
                            <b-form-group id="input-group-2" label="Vehicle Expenses:" label-for="vehicle_expense">
                                <b-form-select v-model="selectedType" required>
                                    <option value="">Select Vehicle Expenses</option>
                                    <option>Running</option>
                                    <option>Oil Change</option>
                                    <option>Milage</option>
                                    <option>Accidential Claim</option>
                                    <option>Other Espense</option>
                                </b-form-select>
                            </b-form-group>
                        </div> -->
            <!-- TWo Dropdown field   -->

            <!-- <div class="col-4">
                            <b-form-group id="input-group-2" label="Car Maintenance Feature:"
                                label-for="car_maintenance_feature">
                                <div class="d-flex">
                                    <b-form-select v-model="selectedType" required class="mr-2">
                                        <option value="">Select Feature</option>
                                        <option>Running</option>
                                        <option>Oil Change</option>
                                        <option>Mileage</option>
                                        <option>Accidental Claim</option>
                                        <option>Other Expense</option>
                                    </b-form-select>
                                    <b-form-input v-model="selectedTypes" placeholder="Mention Price" required>
                                    </b-form-input>
                                </div>
                            </b-form-group>
                        </div> -->
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
              Car Maintenance Feature
            </h5>
          </div>
          <div class="row">
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Running:"
                label-for="running"
              >
                <b-form-input
                  id="running"
                  v-model="running"
                  placeholder="Enter Running"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Oil Change:"
                label-for="oil_change"
              >
                <b-form-input
                  id="oil_change"
                  v-model="oil_change"
                  placeholder="Enter Oil Change"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Mileage:"
                label-for="mileage"
              >
                <b-form-input
                  id="mileage"
                  v-model="mileage"
                  placeholder="Enter Mileage"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Accidental Claim:"
                label-for="accidental_claim"
              >
                <b-form-input
                  id="accidental_claim"
                  v-model="accidental_claim"
                  placeholder="Enter Accidental Claim"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-4">
              <b-form-group
                id="input-group-2"
                label="Other Expense:"
                label-for="other_expense"
              >
                <b-form-input
                  id="other_expense"
                  v-model="other_expense"
                  placeholder="Enter Other Expense"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <!-- Equipment -->
          <h4>Equipment</h4>
          <!-- <div style="margin-left: 3px; margin-bottom: 15px">
                        <input type="file" accept="image/*" id="image" @change="vehicleImageChange" />
                    </div> -->
          <div style="margin-left: 3px; margin-bottom: 15px">
            <!-- Input field to upload image -->
            <img
              :src="'https://boltapi.fastnetstaffing.in/' + image"
              alt="vehicle Picture"
              width="100"
              height="100"
            />
          </div>
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
      selectedType: "",
      show: true,
      codeText: code.introduction,
      codeActive: false,
      codeActiveClass: false,
      // Add Vehicle
      name: "",
      vehicle_company: "",
      description: "",
      car_make: "",
      car_model: "",
      car_color: "",
      car_number: "",
      model_year: "",
      registration_number: "",
      equipment: "",
      image: null,
      // new code
      vehicle_type: "",
      last_inspection: "",
      insurance: "",
      texameter_inspection_date: "",
      next_inspection: "",

      select_equipment: "",
      category_of_vehicle: "",
      vendor_name: "",
      insurance_company_name: "",
      car_maintenance_feature: "",
      // Car Maintenance
      running: "",
      oil_change: "",
      mileage: "",
      accidental_claim: "",
      other_expense: "",
      editedUser: {},
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
    // Load the clients data when the component is created
    axios
      .get("vehicle")
      .then((response) => {
        this.vehicles = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    const userId = this.$route.params.id;
    axios
      .get(`vehicle/${userId}`)
      .then((response) => {
        this.editedUser = response.data.data;
        this.name = this.editedUser.name;
        this.vehicle_company = this.editedUser.vehicle_company;
        this.description = this.editedUser.description;
        this.car_make = this.editedUser.car_make;
        this.car_model = this.editedUser.car_model;
        this.car_color = this.editedUser.car_color;
        this.car_number = this.editedUser.car_number;
        this.model_year = this.editedUser.model_year;
        this.registration_number = this.editedUser.registration_number;
        this.equipment = this.editedUser.equipment;
        this.image = this.editedUser.image;
        this.vehicle_type = this.editedUser.vehicle_type;
        this.last_inspection = this.editedUser.last_inspection;
        this.insurance = this.editedUser.insurance;
        this.texameter_inspection_date =
          this.editedUser.texameter_inspection_date;
        this.next_inspection = this.editedUser.next_inspection;
        this.select_equipment = this.editedUser.select_equipment;
        this.vendor_name = this.editedUser.vendor_name;
        this.insurance_company_name = this.editedUser.insurance_company_name;
        this.car_maintenance_feature = this.editedUser.car_maintenance_feature;
        this.running = this.editedUser.running;
        this.oil_change = this.editedUser.oil_change;
        this.mileage = this.editedUser.mileage;
        this.accidental_claim = this.editedUser.accidental_claim;
        this.other_expense = this.editedUser.other_expense;

        // Depending on the selected option, set the appropriate salary value

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
    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Set the selected file to the data property
        this.profile_picture = file;
      }
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
