<template>
  <b-card>
    <b-row>
      <div class="col-12 mt-16">
        <b-form @submit.prevent="addVehicle" v-if="show">
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
    {{ company.company_name }} <!-- Bind company_name here -->
  </option>
</b-form-select>

  </b-form-group>
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
              Car Information
            </h5>
          </div>
          <div class="row">
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-1" label="Name:" label-for="name">
                <b-form-input id="name" type="text" v-model="name" placeholder="Enter name"
                  autocomplete="off"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Description:" label-for="description">
                <b-form-input id="description" v-model="description" placeholder="Enter Description"></b-form-input>
              </b-form-group>
            </div>

            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Car Make:" label-for="car_make">
                <b-form-input id="car_make" v-model="car_make" placeholder="Enter Car Make"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Car Model:" label-for="car_model">
                <b-form-input id="car_model" v-model="car_model" placeholder="Enter Car Model"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Car Color:" label-for="car_color">
                <b-form-input id="car_color" v-model="car_color" placeholder="Enter Car Color"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Car Number:" label-for="car_number">
                <b-form-input id="car_numbar" v-model="car_number" placeholder="Enter Car Number"></b-form-input>
              </b-form-group>
            </div>

            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Model Year:" label-for="model_year">
                <b-form-input id="model_year" v-model="model_year" placeholder="Enter Model Year"></b-form-input>
              </b-form-group>
            </div>

            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Registration Number:" label-for="registration_number">
                <b-form-input id="registration_number" v-model="registration_number"
                  placeholder="Enter Registration Number"></b-form-input>
              </b-form-group>
            </div>
            <!-- new code  -->
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Vehicle Type:" label-for="vehicle_type">
                <b-form-select v-model="vehicle_type">
                  <option value="">Select Vehicle Type</option>
                  <option>Taxi</option>
                  <option>Non-Taxi</option>
                  <option>Delivery Service</option>
                  <option>Office Use</option>
                  <option>Extra</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <h4>Upload Document</h4>
          <b-form-group id="input-group-1" label-for="bank_upload_document">
            <div style="display: flex">
              <!-- Display current vehicle images -->
              <div v-for="(image, index) in editVehicle.image" :key="index" style="margin-left: 3px; margin-bottom: 15px">
                <img :src="'https://boltapi.fastnetstaffing.in/' + image" alt="Vehicle Image"
                  style="max-width: 100px; max-height: 100px" />
              </div>
            </div>
            <input type="file" accept="image/*" id="vehicle_image" multiple @change="vehicleImageChange" />
          </b-form-group>
          </div>
            </div>
          <!-- <h2>Car Expense Information</h2> -->
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
              Vehicle Report
            </h5>
          </div>
          <div class="row">
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Last Inspection:" label-for="last_inspection">
                <b-form-input id="last_inspection" v-model="last_inspection" type="date"
                  placeholder="Enter Last Inspection"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Next Inspection:" label-for="next_inspection">
                <b-form-input id="next_inspection" type="date" v-model="next_inspection"
                  placeholder="Enter Next Inspection"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Insurance:" label-for="insurance">
                <b-form-input id="insurance" v-model="insurance" placeholder="Enter Insurance"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Texameter Inspection Date:" label-for="texameter_inspection_date">
                <b-form-input id="texameter_inspection_date" type="date" v-model="texameter_inspection_date"
                  placeholder="Enter Texameter Inspection Date"></b-form-input>
              </b-form-group>
            </div>

            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Select Equipment:" label-for="select_equipment">
                <b-form-select v-model="select_equipment">
                  <option value="">Select Select Equipment</option>
                  <option>Tool Kit</option>
                  <option>Air Pump</option>
                  <option>Tyre Repair Kit</option>
                  <option>Pallet Jack</option>
                  <option>Jump Cable</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Category of Vehicle:" label-for="category_of_vehicle">
                <b-form-select v-model="category_of_vehicle">
                  <option value="">Select Category Vehicle:</option>
                  <option>Taxi</option>
                  <option>Transport</option>
                  <option>Personal</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Vendor Name:" label-for="vendor_name">
                <b-form-select v-model="vendor_name">
                  <option value="">Select Vendor Name</option>
                  <option>Uber</option>
                  <option>Bolt</option>
                  <option>Taxijakt</option>
                  <option>Daytrip</option>
                  <option>TaxiKurir</option>
                  <option>Others</option>
                </b-form-select>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group id="input-group-2" label="Insurance Company Name:" label-for="insurance_company_name">
                <b-form-input v-model="insurance_company_name" placeholder="Enter Insurance Company Name">
                  <!-- <option value="">Select Car Type</option> -->
                  <!-- <option>Uber</option> -->
                  <!-- <option>Bolt</option> -->
                </b-form-input>
              </b-form-group>
            </div>
          </div>        
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
import code from "../../../components/data-entry/form/code";
import { BToast } from "bootstrap-vue";
export default {
  data() {
    return {
      selectedType: "",
      show: true,
      codeText: code.introduction,
      codeActive: false,
      codeActiveClass: false,
      isLoading: false,
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
      company_id: "",
      company_name: "",
      companyes: [],
      editVehicle: {
        image: [], // Initialize the array here
      },
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
    BToast,
    BSpinner,
  },

  created() {
    // axios
    //   .get("vehicle")
    //   .then((response) => {
    //     this.vehicles = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
      axios
      .get("company")
      .then((response) => {
        this.companyes = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // Load the clients data when the component is created
    const userId = this.$route.params.id;
    axios
      .get(`vehicle/${userId}`)
      .then((response) => {
        this.editVehicle = response.data.data;
        this.name = this.editVehicle.name;
        this.vehicle_company = this.editVehicle.vehicle_company;
        this.description = this.editVehicle.description;
        this.car_make = this.editVehicle.car_make;
        this.car_model = this.editVehicle.car_model;
        this.car_color = this.editVehicle.car_color;
        this.car_number = this.editVehicle.car_number;
        this.model_year = this.editVehicle.model_year;
        this.registration_number = this.editVehicle.registration_number;
        this.equipment = this.editVehicle.equipment;
        this.image = this.editVehicle.image;
        this.vehicle_type = this.editVehicle.vehicle_type;
        this.last_inspection = this.editVehicle.last_inspection;
        this.insurance = this.editVehicle.insurance;
        this.texameter_inspection_date =
          this.editVehicle.texameter_inspection_date;
        this.next_inspection = this.editVehicle.next_inspection;
        this.select_equipment = this.editVehicle.select_equipment;
        this.vendor_name = this.editVehicle.vendor_name;
        this.insurance_company_name = this.editVehicle.insurance_company_name;
        this.car_maintenance_feature = this.editVehicle.car_maintenance_feature;
        this.running = this.editVehicle.running;
        this.oil_change = this.editVehicle.oil_change;
        this.mileage = this.editVehicle.mileage;
        this.accidental_claim = this.editVehicle.accidental_claim;
        this.other_expense = this.editVehicle.other_expense;
        this.company_id = this.editVehicle.company_id;
        this.company.company_name = this.editVehicle.company.company_name;
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
    addVehicle() {
      this.isLoading = true;
      // Create a FormData object to handle the image file
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("vehicle_company", this.vehicle_company);
      formData.append("description", this.description);
      formData.append("car_make", this.car_make);
      formData.append("car_model", this.car_model);
      formData.append("car_color", this.car_color);
      formData.append("car_number", this.car_number);
      formData.append("model_year", this.model_year);
      formData.append("registration_number", this.registration_number);
      formData.append("equipment", this.equipment);
      for (const image of this.image) {
        formData.append("image[]", image);
      }
      formData.append("vehicle_type", this.vehicle_type);
      formData.append("last_inspection", this.last_inspection);
      formData.append("insurance", this.insurance);
      formData.append(
        "texameter_inspection_date",
        this.texameter_inspection_date
      );
      formData.append("next_inspection", this.next_inspection);
      formData.append(
        "texameter_inspection_date",
        this.texameter_inspection_date
      );
      formData.append("select_equipment", this.select_equipment);
      formData.append("category_of_vehicle", this.category_of_vehicle);
      formData.append("vendor_name", this.vendor_name);
      formData.append("insurance_company_name", this.insurance_company_name);
      formData.append("car_maintenance_feature", this.car_maintenance_feature);
      formData.append("running", this.running);
      formData.append("oil_change", this.oil_change);
      formData.append("mileage", this.mileage);
      formData.append("accidental_claim", this.accidental_claim);
      formData.append("other_expense", this.other_expense);
      formData.append("company_id", this.company_id);

      axios
        .post(`vehicleUpdate/${this.editVehicle.id}`, formData)
        .then((response) => {
          console.log(response.data);
          this.$bvToast.toast("Vehicle Update successfully!", {
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

    vehicleImageChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        // Convert FileList to an array
        this.image = Array.from(files);
      }
    },

    codeClick() {
      this.codeActive = !this.codeActive;
    },
  },
};
</script>
