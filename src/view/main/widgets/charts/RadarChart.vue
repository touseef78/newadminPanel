<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="6">
        <h4 class="mr-8">Radar Chart</h4>
        <p class="hp-badge-text">Revenue</p>
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
        type="radar"
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
          fontFamily: "Manrope, sans-serif",
          height: 350,
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

        colors: ["#0010F7", "#1BE7FF"],

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
              connectorColors: "#fff",
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
          fontSize: "16px",

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
