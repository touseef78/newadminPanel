<template>
  <b-card>
    <b-row align-h="between">
      <b-col>
        <h4 class="mb-0">Site Trafic</h4>
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
          name: "SEO Visits",
          data: [20, 50, 60, 80, 90, 55],
        },
        {
          name: "Organic",
          data: [35, 35, 35, 15, 35, 15],
        },
        {
          name: "Sponsored",
          data: [100, 15, 60, 40, 50, 80],
        },
      ],
      options: {
        chart: {
          id: "site-trafic-radar-card",
          fontFamily: "Manrope, sans-serif",
          type: "radar",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        fill: {
          opacity: [0.2, 0.2, 0.2],
        },
        stroke: {
          show: true,
          width: 3,
        },
        markers: {
          size: 0,
        },

        colors: ["#0063F7", "#FF0022", "#00F7BF"],

        labels: ["Marketing", "Payments", "Bills"],

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
            horizontal: 32,
            vertical: 16,
          },
          horizontalAlign: "center",
          position: "bottom",
          fontSize: "24px",
          fontWeight: 500,
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
