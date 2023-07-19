<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="6">
        <h4 class="mr-8">Bar Chart</h4>
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
        type="bar"
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
          name: "Expenses",
          data: [4477, 7834, 8233, 6039, 5575, 6933, 6357],
        },
      ],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "bar",

          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
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
        fill: {
          opacity: 1,
          type: "solid",
        },
        stroke: {
          show: true,
          width: 4,
          curve: "straight",
          colors: ["transparent"],
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          tickAmount: 5,

          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
          },
          categories: [
            "Sun, 23",
            "Sat, 22",
            "Fri, 21",
            "Thu, 20",
            "Wed, 19",
            "Tue, 18",
            "Mon, 17",
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
        colors: ["#0063F7"],

        yaxis: {
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
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
