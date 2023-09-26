<template>
    <b-col cols="12" xl="8">
        <b-card id="invoice" class="card border-0 hp-invoice-card">

            <b-row align-h="between">
                <b-col cols="12" lg="6">
                    <div class="hp-header-logo d-flex align-items-end">
                        <b-link to="/">

                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" color="blue"
                                class="bi bi-car-front-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                            </svg>
                        </b-link>

                        <a href="https://hypeople-studio.gitbook.io/yoda/change-log" target="_blank" class="d-flex">
                            <span class="h3 font-weight-bold hp-text-color-1 mb-6">Vehicle</span>

                        </a>
                    </div>
                </b-col>

                <b-col cols="12" lg="6">
                    <p class="hp-p1-body mb-16 text-right">
                        Invoice Number:00000{{id }}
                    </p>
                    <p class="hp-p1-body mb-16 text-right">
                        Date: {{ formatDate(created_at) }}
                        </p> 
                </b-col>
                 <b-col cols="12">
                  <p>Driver Name: {{ driver_first_name }} {{ driver_last_name }} </p> 
                  <p>Address: {{ address }}</p>
                  <p>Email: {{ email }}</p>
                  <p>Phone Number:{{ mobile }}</p>
                </b-col>

      <div class="divider"></div>
          </b-row>
            <b-row>
                <b-col cols="12">
                    <b-table-simple small caption-top responsive borderless>
                       
                        <b-thead>

                            <b-tr>
                                <b-th scope="col" class="pt-0 pl-0 pb-18 bg-transparent">
                                    Number
                                </b-th>
                                <b-th scope="col" class="pt-0 pb-18 bg-transparent hp-invoice-table-desc">
                                    Description
                                </b-th>
                                <!-- <b-th scope="col" class="pt-0 pb-18 bg-transparent hp-invoice-table-desc">
                                        First Name
                                    </b-th> -->
                                <!-- <b-th scope="col" class="pt-0 pb-18 bg-transparent hp-invoice-table-desc">
                                        Last Name
                                    </b-th> -->
                                <b-th scope="col" class="pt-0 pr-0 pb-18 bg-transparent hp-invoice-table-th text-right">
                                    Price
                                </b-th>
                            </b-tr>
                        </b-thead>

                        <b-tbody>
                            <b-tr>
                                <b-td class="py-6 pl-0">
                                    <p>1</p>
                                </b-td>
                                <b-td class="py-6">
                                    <p>Total Amount</p>
                                </b-td>
                                <!-- <b-td class="py-6">
                                        <p></p>
                                    </b-td>
                                     <b-td class="py-6">
                                        <p></p>
                                    </b-td> -->

                                <b-td class="py-6 pr-0 text-right">
                                    <h5>SEK {{ salary_fix }}</h5>
                                </b-td>
                            </b-tr>

                            <b-tr>
                                <b-td class="py-6 pl-0">
                                    <p>2</p>
                                </b-td>
                                <b-td class="py-6">
                                    <p>Expense Deduct From Salary</p>
                                </b-td>
                                <!-- <b-td class="py-6">
                                        <p></p>
                                    </b-td>
                                     <b-td class="py-6">
                                        <p></p>
                                    </b-td> -->

                                <b-td class="py-6 pr-0 text-right">
                                    <h5>SEK {{ deduct_from_salary }}</h5>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="py-6 pl-0">
                                    <p>3</p>
                                </b-td>
                                <b-td class="py-6">
                                    <p>Total Payable</p>
                                </b-td>
                                <!-- <b-td class="py-6">
                                        <p></p>
                                    </b-td>
                                     <b-td class="py-6">
                                        <p></p>
                                    </b-td> -->

                                <b-td class="py-6 pr-0 text-right">
                                    <h5>SEk {{ total_payable }}</h5>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>

            <div class="divider"></div>

            <b-row align-h="end" class="mr-0">
                <b-col cols="12" xl="6" class="pb-16 hp-print-checkout">
                    <b-row align-v="center" align-h="between">
                        <p class="hp-badge-text hp-flex-none w-auto">Total Payable Inclusive Tax</p>
                        <h5 class="mb-4 hp-flex-none w-auto">SEK {{ total_payable_exclusive_tex }}</h5>
                    </b-row>
                  
                    <!-- <b-row align-v="center" align-h="between">
                        <p class="hp-badge-text hp-flex-none w-auto">Discount %10</p>
                        <h5 class="mb-4 hp-flex-none w-auto">-$ 24.80</h5>
                    </b-row> -->

                    <b-row align-v="center" align-h="between">
                        <p class="hp-badge-text hp-flex-none w-auto">Tax %6</p>
                        <h5 class="hp-flex-none w-auto">SEK{{ tax.toFixed(2) }}</h5>
                    </b-row>

                    <b-row>
                        <div class="divider"></div>
                    </b-row>

                    <b-row align-v="center" align-h="between">
                        <h5 class="text-primary hp-flex-none w-auto">Total Payable Exclusive Tax</h5>
                        <h5 class="text-primary hp-flex-none w-auto">SEK {{ total_inclusive_tex }}</h5>
                    </b-row>
                </b-col>
            </b-row>



            <!--             
     <b-col cols="12" xl="3" class="pb-16 hp-print-checkout">
        <b-card id="invoice" class="card border-0 hp-invoice-card" ref="invoiceSection">
          <button class="print-button"  @click="printInvoice">Print</button>
        </b-card>
      </b-col> -->
            <b-col cols="12" xl="3" class="pb-16 hp-print-checkout">
                <b-card id="invoice" class="card border-0 hp-invoice-card" ref="invoiceSection">
                    <!-- ... Your existing invoice card content ... -->
                </b-card>
                <b-row align-v="center" align-h="start">
                    <!-- <b-button @click="downloadInvoice" type="submit" variant="primary">Download Invoice</b-button> -->
                </b-row>
            </b-col>


        </b-card>
    </b-col>
</template>

<script>
import axios from "axios";
import code from "../components/data-entry/form/code";
import {
    BRow,
    BCol,
    BTableSimple,
    BThead,
    BTbody,
    BTr,
    BTh,
    BTd,
    BCard,
    BButton
} from "bootstrap-vue";


export default {
    components: {
        BRow,
        BCol,
        BTableSimple,
        BThead,
        BTbody,
        BTr,
        BTh,
        BTd,
        BCard,
        BButton
    },

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
      total_salary: "",
      salary_fix: "",
      total_payable_exclusive_tex: "",
      deduct_from_salary: "",
      remaining_reciveable: "",
      mobile: "",
      address: "",
      total_inclusive_tex: "",
      tax: "",
      created_at: new Date(), // Replace with your actual date data
    };
  },
   
    created() {
    // Load the clients data when the component is created
    axios
      .get("invoice")
      .then((response) => {
        this.drivers = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    const userId = this.$route.params.userId;
    axios
      .get(`reportshow/${userId}`)
      .then((response) => {
        this.editedUser = response.data.data;
        // Set the data properties with values from editedUser
        this.id = this.editedUser.id;
        this.total_payable = this.editedUser.total_payable;
        this.total_receivable = this.editedUser.total_receivable;
        this.uber_earning = this.editedUser.driver.uber_earning;
        this.bolt_earning = this.editedUser.driver.bolt_earning;
        this.salary_fix = this.editedUser.driver.salary_fix;
        this.driver_first_name = this.editedUser.driver.name;
        this.driver_last_name = this.editedUser.driver.last_name;
        this.mobile = this.editedUser.driver.mobile;
        this.address = this.editedUser.driver.address;
        this.email = this.editedUser.driver.email;
        this.deduct_from_salary = this.editedUser.deduct_from_salary;
        this.total_payable_exclusive_tex = this.editedUser.total_payable_exclusive_tex;
        this.remaining_reciveable = this.editedUser.remaining_reciveable;
        this.created_at = this.editedUser.created_at;
        this.total_inclusive_tex = this.editedUser.total_inclusive_tex;
        this.tax = parseFloat(this.editedUser.tax); // Parse 'tax' as a number
        // ... and so on for other properties ...
        
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  },

    methods: {
       
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString();
        },
    }
};
</script>
