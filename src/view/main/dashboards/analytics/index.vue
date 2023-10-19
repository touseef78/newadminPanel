<template>
    <b-row class="mb-32">
      <!-- <b-col cols="12" class="mb-32">
              <h3>Welcome back, Edward 👋</h3>
              <p class="hp-p1-body mb-0">Your current status and analytics are here</p>
          </b-col> -->
  
      <b-col cols="12">
        <b-row>
          <b-col class="flex-grow-1 overflow-hidden">
            <b-row>
              <b-col cols="12" class="mb-32"> </b-col>
              <b-col cols="12" md="6" xl="3" class="mb-32">
                <b-card>
                  <b-row>
                    <b-col class="hp-flex-none w-auto">
                      <b-avatar
                        class="bg-primary-4 hp-bg-color-dark-primary"
                        size="48px"
                      >
                        <i
                          class="iconly-Light-People text-primary hp-text-color-dark-primary-2"
                          style="font-size: 24px"
                        ></i>
                      </b-avatar>
                    </b-col>
  
                    <b-col class="pl-0">
                      <h3 class="mb-4 mt-8">
                          {{ driverCount }}<span class="hp-badge-text ml-8 text-primary"></span>
                      </h3>
                      <p
                        class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30"
                      >
                        Total Driver
                      </p>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
  
              <b-col cols="12" md="6" xl="3" class="mb-32">
                <b-card>
                  <b-row>
                    <b-col class="hp-flex-none w-auto">
                      <b-avatar
                        class="bg-secondary-4 hp-bg-color-dark-secondary"
                        size="48px"
                      >
                        <i
                          class="iconly-Light-Buy text-secondary"
                          style="font-size: 24px"
                        ></i>
                      </b-avatar>
                    </b-col>
  
                    <b-col class="pl-0">
                      <h3 class="mb-4 mt-8">
                        {{ vehicleCount }}<span class="hp-badge-text ml-8 text-secondary"></span>
                      </h3>
  
                      <p
                        class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30"
                      >
                        Total Vehicle
                      </p>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
  
              <b-col cols="12" md="6" xl="3" class="mb-32">
                <b-card>
                  <b-row>
                    <b-col class="hp-flex-none w-auto">
                      <b-avatar
                        class="bg-secondary-4 hp-bg-color-dark-secondary"
                        size="48px"
                      >
                        <i
                          class="iconly-Light-Ticket text-warning"
                          style="font-size: 24px"
                        ></i>
                      </b-avatar>
                    </b-col>
  
                    <b-col class="pl-0">
                      <h3 class="mb-4 mt-8">
                        {{ b2bCount }}<span class="hp-badge-text ml-8 text-secondary"></span>
                      </h3>
  
                      <p
                        class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30"
                      >
                        B2B
                      </p>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
  
              <b-col cols="12" md="6" xl="3" class="mb-32">
                <b-card>
                  <b-row>
                    <b-col class="hp-flex-none w-auto">
          <b-avatar class="bg-danger-4 hp-bg-color-dark-danger" size="48px">
            <i
                class="iconly-Light-Discount text-danger"
                style="font-size: 24px"
              ></i>
          </b-avatar>
        </b-col>
  
                    <b-col class="pl-0">
                      <h3 class="mb-4 mt-8">
                        {{ b2bDriverCount }}<span class="hp-badge-text ml-8 text-secondary"></span>
                      </h3>
  
                      <p
                        class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30"
                      >
                        B2B Driver
                      </p>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
  
              <!-- new code  -->
              <b-col cols="12" md="6" xl="3" class="mb-32">
                <b-card>
                  <b-row>
                    <b-col class="hp-flex-none w-auto">
                  <b-avatar class="bg-primary-4 hp-bg-color-dark-primary" size="48px">
                      <i class="iconly-Light-People text-primary hp-text-color-dark-primary-2" style="font-size: 24px"></i>
                  </b-avatar>
              </b-col>
  
  
                    <b-col class="pl-0">
                      <h3 class="mb-4 mt-8">
                        {{ b2bVehicleCount }}<span class="hp-badge-text ml-8 text-secondary"></span>
                      </h3>
  
                      <p
                        class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30"
                      >
                        B2B Vehicle
                      </p>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
  
              <b-col cols="12" md="6" xl="3" class="mb-32">
                <b-card>
                  <b-row>
                    <b-col class="hp-flex-none w-auto">
                  <b-avatar class="bg-primary-4 hp-bg-color-dark-primary" size="48px">
                       <i
                  class="iconly-Light-Buy text-secondary"
                  style="font-size: 24px"
                ></i>
                  </b-avatar>
              </b-col>
  
                    <b-col class="pl-0">
                      <h3 class="mb-4 mt-8">
                        {{ totalEarning }}<span class="hp-badge-text ml-8 text-secondary"></span>
                      </h3>
  
                      <p
                        class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30"
                      >
                        Total Earning
                      </p>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
  
              <b-col cols="12" md="6" xl="3" class="mb-32">
                <b-card>
                  <b-row>
                    <b-col class="hp-flex-none w-auto">
                  <b-avatar class="bg-primary-4 hp-bg-color-dark-primary" size="48px">
                       <i
                  class="iconly-Light-Ticket text-warning"
                  style="font-size: 24px"
                ></i>
                  </b-avatar>
              </b-col>
  
                    <b-col class="pl-0">
                      <h3 class="mb-4 mt-8">
                        242<span class="hp-badge-text ml-8 text-secondary"></span>
                      </h3>
  
                      <p
                        class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30"
                      >
                        Total Profit
                      </p>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
  
              <b-col cols="12" md="6" xl="3" class="mb-32">
                <b-card>
                  <b-row>
                   <b-col class="hp-flex-none w-auto">
                  <b-avatar class="bg-primary-4 hp-bg-color-dark-primary" size="48px">
                  
                      <i
                    class="iconly-Light-Discount text-danger"
                    style="font-size: 24px"
                  ></i>
                  </b-avatar>
              </b-col>
  
                    <b-col class="pl-0">
                      <h3 class="mb-4 mt-8">
                        {{ totalExpense }}<span class="hp-badge-text ml-8 text-secondary"></span>
                      </h3>
  
                      <p
                        class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30"
                      >
                        Total Expense
                      </p>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <!-- new code  -->
          <b-col cols="12" xl="8">
            <b-row>
              <b-col cols="12" class="mb-32">
                <new-revenue-colum />
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" xl="4">
            <b-row>
              <b-col cols="12" class="mb-32">
                <new-earning-card />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </template>
  
  <script>
  import { BRow, BCol, BCard, BAvatar } from "bootstrap-vue";
  
  //  new code
  import axios from "axios";
  import NewEarningCard from "../../widgets/cards/advance/NewEarningCard.vue";
  import NewRevenueColum from "../../widgets/cards/advance/NewRevenueColum.vue";
  export default {
      components: {
      BRow,
      BCol,
      BCard,
      BAvatar,
      // NewRevenuCard,
      NewRevenueColum,
      NewEarningCard,
    },
    data() {
      return {
          image: null,
        isLoading: false,
        amount: "",
        driverCount: 0,
        vehicleCount: 0,
        b2bCount: 0,
        b2bDriverCount: 0,
        b2bVehicleCount: 0,
        totalEarning: 0,
        totalProfit: 0,
        totalExpense: 0,
      };
    },
    mounted() {
      // Fetch data from your API when the component is mounted
      axios.get("/dashboard").then((response) => {
        const data = response.data.data;
  
        // Extract data from the API response and set it to your component's data properties
        this.driverCount = data.driver;
        this.vehicleCount = data.vehicle;
        this.b2bCount = data.company;
        this.b2bDriverCount = data.driverb2b;
        this.b2bVehicleCount = data.vehicleb2b;
        this.totalEarning = data.total_earning;
        this.totalProfit = data.total_profit;
        this.totalExpense = data.expense;
      });
    },
  
    
  };
  </script>
  