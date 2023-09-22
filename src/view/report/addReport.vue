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
              Payment
            </h5>
          </div>
          <div class="row">
            <div class="col-md-4 col-12">
              <b-form-group
                id="input-group-2"
                label="Driver Name:"
                label-for="driver_name"
              >
                <b-form-input
                  id="driver_name"
                  :value="`${driver_first_name} ${driver_last_name}`"
                  placeholder="Driver name"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group
                id="input-group-2"
                label="Receiveable:"
                label-for="total_receivable"
              >
                <b-form-input
                  id="total_receivable"
                  v-model="total_receivable"
                  placeholder="Enter receiveable"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group
                id="input-group-2"
                label="Payable:"
                label-for="payable"
              >
                <b-form-input
                  id="payable"
                  v-model="total_payable"
                  placeholder="Enter payable"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group
                id="input-group-2"
                label="Total Fix salary:"
                label-for="salary_fix"
              >
                <b-form-input
                  id="salary_fix"
                  v-model="salary_fix"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-md-4 col-12">
              <b-form-group
                id="input-group-2"
                label="Expense Deduct From Salary:"
                label-for="expense_deduct_from_salary"
              >
                <b-form-input
                  id="expense_deduct_from_salary"
                  v-model="expense_deduct_from_salary"
                  placeholder="Enter expense deduct from salary"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4 col-12">
              <b-form-group
                id="input-group-2"
                label="Total Payable Exclusive Tex:"
                label-for="total_salary"
              >
                <b-form-input
                  id="total_salary"
                  :value="total_salaryComputed"
                  v-model="total_salaryComputed"
                  placeholder="Total Salary"
                  disabled
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <b-button
    type="submit"
    variant="primary"
    class="mb-8 mr-8"
    :disabled="isLoading"
    @click="payAndNavigate"
  >
    <span v-if="!isLoading">Pay</span>
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
      image: null,
      isLoading: false,
      
      amount: "",
      category: "",
      card: "",
      user_id: "",
      drivers: [],
      editedUser: {
        // ... other properties ...
        vehicle_image: [], // Initialize the array here
      },
      users: [], // Instead of 'items', use 'users' array to store fetched data
      driver_first_name: "",
      driver_last_name: "",
      receiveable: "",
      payable: "",
      uber_amount: "",
      expense_deduct_from_salary: "",
      total_salary: "",
      salary_fix: "",
      remaining_reciveable: "",
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
    axios
      .get("drivers")
      .then((response) => {
        this.drivers = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    const userId = this.$route.params.userId;
    axios
      .get(`paymentShow/${userId}`)
      .then((response) => {
        this.editedUser = response.data.data;
        // Set the data properties with values from editedUser
        this.total_payable = this.editedUser.total_payable;
        this.total_receivable = this.editedUser.total_receivable;
        this.uber_earning = this.editedUser.driver.uber_earning;
        this.bolt_earning = this.editedUser.driver.bolt_earning;
        this.salary_fix = this.editedUser.driver.salary_fix;
        this.driver_first_name = this.editedUser.driver.name;
        this.driver_last_name = this.editedUser.driver.last_name;

        // ... and so on for other properties ...
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  },

  computed: {
    total_salaryComputed() {
      const salaryFix = parseFloat(this.salary_fix) || 0;
      const totalPayable = parseFloat(this.total_payable) || 0;
      const expenseDeduct = parseFloat(this.expense_deduct_from_salary) || 0;

      return salaryFix + totalPayable - expenseDeduct;
    },
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

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    //    Add Vehicle
    addUser() {
      const userId = this.$route.params.userId;
      axios;
      this.isLoading = true;
      const formData = new FormData();
      formData.append("user_id", this.$route.params.userId); // Use the userId from route params
      formData.append("total_receivable", this.total_receivable);
      formData.append("total_payable", this.total_payable);
      formData.append("deduct_from_salary", this.expense_deduct_from_salary);
      formData.append("total_payable_exclusive_tex", this.total_salaryComputed);
      formData.append("remaining_reciveable", parseFloat(this.total_receivable) - parseFloat(this.expense_deduct_from_salary));
      axios
        .post("reportAdd", formData)
        .then((response) => {
          console.log(response.data);
          this.$bvToast.toast("Report added successfully!", {
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
        this.image = file;
      }
    },

    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },

    vehicleImageChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        // Convert FileList to an array
        this.image = Array.from(files);
      }
    },
    payAndNavigate() {
  // Show a success toast message

  // Delay the navigation by a few milliseconds to ensure the toast message is visible
  setTimeout(() => {
    // Assuming `this.user_id` is the ID you want to pass to the invoiceShow route
    this.$router.push({ name: "invoiceShow", params: { id: this.user_id } });
  }, 2000);
}


    
  },
};
</script>
