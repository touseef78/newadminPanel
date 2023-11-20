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
                      <i
                        class="iconly-Light-Buy text-secondary"
                        style="font-size: 24px"
                      ></i>
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
                      <i
                        class="iconly-Light-Ticket text-warning"
                        style="font-size: 24px"
                      ></i>
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
                      <i
                        class="iconly-Light-Discount text-danger"
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
                      <i
                        class="iconly-Light-People text-primary hp-text-color-dark-primary-2"
                        style="font-size: 24px"
                      ></i>
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
                      <i
                        class="iconly-Light-Buy text-secondary"
                        style="font-size: 24px"
                      ></i>
                    </b-avatar>
                  </b-col>

                  <b-col class="pl-0">
                    <h3 class="mb-4 mt-8">
                      {{ totalEarning
                      }}<span class="hp-badge-text ml-8 text-secondary"></span>
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
                      <i
                        class="iconly-Light-Ticket text-warning"
                        style="font-size: 24px"
                      ></i>
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
                      <i
                        class="iconly-Light-Discount text-danger"
                        style="font-size: 24px"
                      ></i>
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
