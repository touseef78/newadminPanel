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
                Company Information
              </h5>
            </div>
            <div class="row">
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label="Company Name:" label-for="company_name">
                  <b-form-input id="company_name" type="text" placeholder="Enter comapany name" v-model="company_name"
                    required></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label=" Organization Name:" label-for="owner_name">
                  <b-form-input id="owner_name" type="text" placeholder="Enter organization name" v-model="owner_name"
                    required></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4 col-12">
                <b-form-group id="input-group-1" label=" Organization Number:" label-for="owner_number">
                  <b-form-input id="owner_number" type="text" placeholder="Enter organization number" v-model="owner_number"
                    required></b-form-input>
                </b-form-group>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-4 col-12">
              <b-form-group
                id="input-group-2"
                label="Category:"
                label-for="category"
              >
                <b-form-select id="category" v-model="category" required>
                  <option value="">Select category</option>
                  <option>Fleet</option>
                  <option>Other</option>
                </b-form-select>
              </b-form-group>
            </div>
                <div class="col-md-4 col-12">
                <b-form-group
                  id="input-group-2"
                  label="Image:"
                  label-for="image"
                >
                  <div style="margin-left: 3px; margin-bottom: 15px">
                    <!-- Display current profile picture -->
                    <img
                      v-if="editedUser.company_document"
                      :src="
                        'https://boltapi.fastnetstaffing.in/' + company_document
                      "
                      alt="Picture"
                      style="max-width: 100px; max-height: 100px"
                    />
                    <!-- Input field to upload new profile picture -->
                    <br>
                    <br>
                    <input
                      type="file"
                      accept="image/*"
                      id="company_document"
                      @change="onCompanyDocumentChange"
                    />
                  </div>
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
        isLoading: false,
        // new code
        // Car Maintenance
        owner_name: "",
        owner_number: "",
        company_document: null,
        company_name: "",
        category: "",

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

            const userId = this.$route.params.id;
    axios
      .get(`company/${userId}`)
      .then((response) => {
        this.editedUser = response.data.data;
        this.owner_name = this.editedUser.owner_name;
        this.owner_number = this.editedUser.owner_number;
        this.company_document = this.editedUser.company_document;
        this.company_name = this.editedUser.company_name;
        this.category = this.editedUser.category;
        // ... and so on for other properties ...
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
      addUser() {
        this.isLoading = true;
        // Create a FormData object to handle the image file
        const formData = new FormData();
        formData.append("owner_name", this.owner_name);
        formData.append("owner_number", this.owner_number);
        formData.append("company_document", this.company_document);
        formData.append("company_name", this.company_name);
        formData.append("category", this.category);

        axios
        .post(`companyUpdate/${this.editedUser.id}`, formData)
          .then((response) => {
            console.log(response.data);
            this.$bvToast.toast("company added successfully!", {
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
  
      codeClick() {
        this.codeActive = !this.codeActive;
  
        setTimeout(() => {
          this.codeActiveClass = !this.codeActiveClass;
        }, 100);
      },
  
      onCompanyDocumentChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.company_document = file;
        }
      },
    },
  };
  </script>
    