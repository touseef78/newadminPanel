<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="6">
        <h5 class="mb-0">Expenses</h5>
      </b-col>

      <b-col cols="6" class="hp-flex-none w-auto">
        <i
          class="ri-more-fill hp-text-color-dark-0 remix-icon"
          style="font-size: 24px"
        ></i>
      </b-col>
    </b-row>

    <div class="overflow-hidden mt-32">
      <apexchart
        type="donut"
        legend="legend"
        height="350"
        :options="options"
        :series="series"
      ></apexchart>
    </div>

    <b-col cols="12" class="px-0 mt-24">
      <h5 class="mb-24">By Category</h5>

      <b-link
        class="d-block hp-transition py-12 px-6 rounded hp-hover-bg-color-primary-4 hp-hover-bg-color-dark-primary"
      >
        <b-row align-v="center" align-h="between">
          <b-col style="flex: 0.9 1 0%">
            <b-row align-v="center">
              <b-col class="hp-flex-none w-auto pr-0">
                <i class="iconly-Curved-Wallet mr-24 text-primary-2"></i>
              </b-col>

              <b-col class="flex-grow-1 pl-0">
                <h5 class="mb-0">Company Expenses</h5>
                <p class="hp-p1-body text-black-60 mb-0">Employee expenses</p>
              </b-col>
            </b-row>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <i class="ri-arrow-right-s-line" style="font-size: 24px"></i>
          </b-col>
        </b-row>
      </b-link>

      <b-link
        class="d-block hp-transition py-12 px-6 rounded hp-hover-bg-color-primary-4 hp-hover-bg-color-dark-primary"
      >
        <b-row align-v="center" align-h="between">
          <b-col style="flex: 0.9 1 0%">
            <b-row align-v="center">
              <b-col class="hp-flex-none w-auto pr-0">
                <i class="iconly-Curved-Discount mr-24 text-primary-2"></i>
              </b-col>

              <b-col class="flex-grow-1 pl-0">
                <h5 class="mb-0">Company Expenses</h5>
                <p class="hp-p1-body text-black-60 mb-0">
                  Promotion &amp; Commercial
                </p>
              </b-col>
            </b-row>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <i class="ri-arrow-right-s-line" style="font-size: 24px"></i>
          </b-col>
        </b-row>
      </b-link>

      <b-link
        class="d-block hp-transition py-12 px-6 rounded hp-hover-bg-color-primary-4 hp-hover-bg-color-dark-primary"
      >
        <b-row align-v="center" align-h="between">
          <b-col style="flex: 0.9 1 0%">
            <b-row align-v="center">
              <b-col class="hp-flex-none w-auto pr-0">
                <i class="iconly-Curved-Bag mr-24 text-primary-2"></i>
              </b-col>

              <b-col class="flex-grow-1 pl-0">
                <h5 class="mb-0">Shopping Expenses</h5>
                <p class="hp-p1-body text-black-60 mb-0">
                  Checkout last years expenses
                </p>
              </b-col>
            </b-row>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <i class="ri-arrow-right-s-line" style="font-size: 24px"></i>
          </b-col>
        </b-row>
      </b-link>

      <b-link
        class="d-block hp-transition py-12 px-6 rounded hp-hover-bg-color-primary-4 hp-hover-bg-color-dark-primary"
      >
        <b-row align-v="center" align-h="between">
          <b-col style="flex: 0.9 1 0%">
            <b-row align-v="center">
              <b-col class="hp-flex-none w-auto pr-0">
                <i class="iconly-Curved-Calendar mr-24 text-primary-2"></i>
              </b-col>

              <b-col class="flex-grow-1 pl-0">
                <h5 class="mb-0">Booking Expenses</h5>
                <p class="hp-p1-body text-black-60 mb-0">
                  Checkout hotel expenses
                </p>
              </b-col>
            </b-row>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <i class="ri-arrow-right-s-line" style="font-size: 24px"></i>
          </b-col>
        </b-row>
      </b-link>
    </b-col>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BLink } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [1244, 2155, 1541],
      options: {
        chart: {
          id: "expenses-donut-card",
          fontFamily: "Manrope, sans-serif",
          type: "donut",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ["#0010F7", "#55B1F3", "#1BE7FF"],

        labels: ["Marketing", "Payments", "Bills"],

        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "90%",
              labels: {
                show: true,
                name: {
                  fontSize: "2rem",
                },
                value: {
                  fontSize: "24px",
                  fontWeight: "medium",
                  color: "#2D3436",
                  formatter(val) {
                    return `$${val}`;
                  },
                },
                total: {
                  show: true,
                  fontSize: "24px",
                  fontWeight: "medium",
                  label: "Total",
                  color: "#636E72",

                  formatter: function (w) {
                    return `$${w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0)}`;
                  },
                },
              },
            },
          },
        },
        responsive: [
          {
            breakpoint: 426,
            options: {
              legend: {
                itemMargin: {
                  horizontal: 16,
                  vertical: 8,
                },
              },
            },
          },
        ],

        legend: {
          itemMargin: {
            horizontal: 12,
            vertical: 24,
          },
          horizontalAlign: "center",
          position: "bottom",
          fontSize: "12px",
          labels: {
            colors: "#2D3436",
          },

          markers: {
            radius: 12,
          },
        },
      },
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BLink,
  },
};
</script>
