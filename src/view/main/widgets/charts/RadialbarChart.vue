<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="6">
        <h4 class="mr-8">Radialbar Chart</h4>
        <p class="hp-badge-text">Marketplace</p>
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
        type="radialBar"
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
      series: [61, 82, 65],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "radialBar",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ["#00F7BF", "#0010F7", "#FFC700"],

        labels: ["Ebay", "Amazon", "Web"],

        dataLabels: {
          enabled: false,
        },
        stroke: {
          lineCap: "round",
        },

        plotOptions: {
          radialBar: {
            size: 185,
            hollow: {
              size: "25%",
            },

            track: {
              margin: 16,
            },
            dataLabels: {
              show: true,
              name: {
                fontSize: "16px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                fontSize: "16px",
                label: "Total",
                formatter: function (w) {
                  return 7400;
                },
              },
            },
          },
        },

        legend: {
          show: true,
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
