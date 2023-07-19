<template>
  <b-card>
    <b-row align-h="between">
      <b-col>
        <div class="d-flex align-items-center">
          <h5 class="mr-8 mb-0">Revenue</h5>
          <p class="hp-badge-text mb-0">Last 6 Months</p>
        </div>
      </b-col>

      <b-col cols="6" class="hp-flex-none w-auto">
        <b-dropdown variant="text" right no-caret toggle-class="p-0 mt-n8">
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
        type="radar"
        legend="legend"
        height="310"
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
      series: [
        {
          name: "Sales",
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: "Expense",
          data: [20, 30, 40, 80, 20, 80],
        },
      ],
      options: {
        chart: {
          id: "revenue-radar-card",
          fontFamily: "Manrope, sans-serif",
          type: "radar",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          dropShadow: {
            enabled: true,
            blur: 4,
            left: 1,
            top: 1,
            opacity: 0.1,
          },
        },
        fill: {
          opacity: [1, 1],
        },
        stroke: {
          show: false,
          width: 0,
        },
        markers: {
          size: 0,
        },

        colors: ["rgba(85, 177, 243, 0.8)", "rgba(0, 247, 191, 0.8)"],

        labels: ["Marketing", "Payments", "Bills"],

        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },

        plotOptions: {
          radar: {
            polygons: {
              fill: {
                colors: ["transparent", "transparent"],
              },
              connectorColors: "#fff",
            },
          },
        },
        legend: {
          itemMargin: {
            horizontal: 12,
            vertical: 16,
          },
          horizontalAlign: "center",
          position: "bottom",
          fontSize: "12px",
          fontWeight: "medium",

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
