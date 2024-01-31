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
                      {{ driverCount
                      }}<span class="hp-badge-text ml-8 text-primary"></span>
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
                      <!-- <i
                        class="iconly-Light-Buy text-secondary"
                        style="font-size: 24px"
                      ></i> -->
                      <i>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 16 16" class="bi bi-car-front-fill" style="color: black;"><path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"></path></svg>
                      </i>
                    </b-avatar>
                  </b-col>

                  <b-col class="pl-0">
                    <h3 class="mb-4 mt-8">
                      {{ vehicleCount
                      }}<span class="hp-badge-text ml-8 text-secondary"></span>
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
                      <!-- <i
                        class="iconly-Light-Ticket text-warning"
                        style="font-size: 24px"
                      ></i> -->
                      <i><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z"/></svg></i>
                    </b-avatar>
                  </b-col>

                  <b-col class="pl-0">
                    <h3 class="mb-4 mt-8">
                      {{ b2bCount
                      }}<span class="hp-badge-text ml-8 text-secondary"></span>
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
                    <b-avatar
                      class="bg-danger-4 hp-bg-color-dark-danger"
                      size="48px"
                    >
                      <!-- <i
                        class="iconly-Light-Discount text-danger"
                        style="font-size: 24px"
                      ></i> -->
                        <i
                          class="iconly-Light-People text-primary hp-text-color-dark-primary-2"
                          style="font-size: 24px"
                        ></i>
                    </b-avatar>
                  </b-col>

                  <b-col class="pl-0">
                    <h3 class="mb-4 mt-8">
                      {{ b2bDriverCount
                      }}<span class="hp-badge-text ml-8 text-secondary"></span>
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
                    <b-avatar
                      class="bg-primary-4 hp-bg-color-dark-primary"
                      size="48px"
                    >
                      <!-- <i
                        class="iconly-Light-People text-primary hp-text-color-dark-primary-2"
                        style="font-size: 24px"
                      ></i> -->
                         <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 16 16" class="bi bi-car-front-fill" style="color: black;"><path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"></path></svg>
                        </i>
                    </b-avatar>
                  </b-col>

                  <b-col class="pl-0">
                    <h3 class="mb-4 mt-8">
                      {{ b2bVehicleCount
                      }}<span class="hp-badge-text ml-8 text-secondary"></span>
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
                    <b-avatar
                      class="bg-primary-4 hp-bg-color-dark-primary"
                      size="48px"
                    >
                      <!-- <i
                        class="iconly-Light-Buy text-secondary"
                        style="font-size: 24px"
                      ></i> -->
                      <i style="color: red;">SEK</i>
                    </b-avatar>
                  </b-col>

                  <b-col class="pl-0">
                    <h3 class="mb-4 mt-8">
                      {{ totalEarning.toFixed(2) }}<span class="hp-badge-text ml-8 text-secondary"></span>
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
                    <b-avatar
                      class="bg-primary-4 hp-bg-color-dark-primary"
                      size="48px"
                    >
                      <!-- <i
                        class="iconly-Light-Ticket text-warning"
                        style="font-size: 24px"
                      ></i> -->
                      <i style="color: black;">
                       <!-- <img src="" alt=""> -->
                       SEK
                      </i>
                    </b-avatar>
                  </b-col>

                  <b-col class="pl-0">
                    <h3 class="mb-4 mt-8">
                      30000<span class="hp-badge-text ml-8 text-secondary"></span>
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
                    <b-avatar
                      class="bg-primary-4 hp-bg-color-dark-primary"
                      size="48px"
                    >
                      <!-- <i
                        class="iconly-Light-Discount text-danger"
                        style="font-size: 24px"
                      ></i> -->
                      <i style="color: blue;">SEK</i>
                    </b-avatar>
                  </b-col>

                  <b-col class="pl-0">
                    <h3 class="mb-4 mt-8">
                      {{ totalExpense
                      }}<span class="hp-badge-text ml-8 text-secondary"></span>
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
              <b-card class="hp-card-4 hp-chart-text-color">
                <div class="divider">
                  <h5>Top Five Pending Expense List</h5>
                </div>
                <h4>Revenue</h4>

                <div id="revenue-column-card" class="overflow-hidden">
                  <apexchart
                  v-if="series[0,1].data.length > 0"
                    type="bar"
                    height="303"
                    legend="legend"
                    :options="options"
                    :series="series"
                  ></apexchart>
                </div>
              </b-card>
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
export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
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
      series: [
        {
          name: "Earning",
          data: [], // Initialize as an empty array
        },
        {
          name: "Expense",
          data: [],
        },
      ],
      options: {
        chart: {
          id: "revenue-column-card",
          fontFamily: "Manrope, sans-serif",
          type: "bar",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        labels: {
          style: {
            fontSize: "14px",
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          borderColor: "#DFE6E9",
          row: {
            opacity: 0.5,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 2,
            columnWidth: "45%",
            endingShape: "rounded",
          },
          colors: {
            backgroundBarColors: ["#0063F7"],
          },
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        xaxis: {
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
          tickPlacement: "between",
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        legend: {
          horizontalAlign: "right",
          offsetX: 40,
          position: "top",
          markers: {
            radius: 12,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
            formatter: (value) => {
              return value / 1000 + "K";
            },
          },
          min: 0,
          max: 100000,
          tickAmount: 4,
        },
      },
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
      this.totalEarning = parseFloat(data.total_earning); // Parse 'total_earning' as a number
      this.totalProfit = data.total_profit;
      this.totalExpense = data.expense;
    });
  },

  created() {
    // Fetch Monthly Earnings data
    axios
      .get("/getMonthlyearning") // Adjust the API endpoint
      .then((response) => {
        this.series[0].data = response.data.map((item) => Number(item.earning));
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch Monthly Expense data
    axios
      .get("/getMonthlyexpense") // Adjust the API endpoint
      .then((response) => {
        this.series[1].data = response.data.map((item) => Number(item.expense));
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
