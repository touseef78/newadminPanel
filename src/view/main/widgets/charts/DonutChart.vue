<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="6">
        <h4 class="mr-8">Donut Chart</h4>
        <p class="hp-badge-text">Expenses</p>
      </b-col>

      <b-col cols="6" class="hp-flex-none w-auto">
        <b-dropdown variant="text" no-caret toggle-class="p-0 mt-n8">
          <template #button-content class="p-0">
            <i
              class="ri-more-fill hp-text-color-dark-0 remix-icon"
              style="font-size: 24px"
            ></i>
          </template>
          <b-dropdown-item href="#">Last 28 Days</b-dropdown-item>
          <b-dropdown-item href="#">Last Month</b-dropdown-item>
          <b-dropdown-item href="#">Last Year</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <div class="overflow-hidden">
      <apexchart
        type="donut"
        legend="legend"
        height="350"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [1244, 2155, 1541],
      options: {
        chart: {
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
              size: "85%",
              labels: {
                show: true,
                name: {
                  fontSize: "2rem",
                },
                value: {
                  fontSize: "16px",
                  formatter(val) {
                    return `$ ${val}`;
                  },
                },
                total: {
                  show: true,
                  fontSize: "16px",
                  label: "Total",
                  // formatter(w) {
                  //   return `$ `;
                  // },
                  formatter: function (w) {
                    return `$ ${w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0)}`;
                  },
                },
              },
            },
          },
        },

        legend: {
          itemMargin: {
            horizontal: 24,
            vertical: 0,
          },
          horizontalAlign: "center",
          position: "bottom",
          fontSize: "14px",

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
    BDropdown,
    BDropdownItem,
  },
};
</script>
