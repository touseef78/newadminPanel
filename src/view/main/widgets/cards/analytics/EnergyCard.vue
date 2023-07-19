<template>
  <b-card>
    <b-row align-h="between">
      <b-col>
        <h4 class="mb-0">Energy Consuming</h4>
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
        type="radialBar"
        height="335"
        legend="legend"
        :options="options"
        :series="series"
      ></apexchart>

      <b-row align-h="between" class="text-center pt-32">
        <b-col cols="6">
          <h4 class="mb-0">Volt</h4>
          <p class="mb-0 text-black-80 hp-text-color-dark-30">24V</p>
        </b-col>

        <b-col cols="6">
          <h4 class="mb-0">Amper</h4>
          <p class="mb-0 text-black-80 hp-text-color-dark-30">0.2A</p>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [91],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "radialBar",
          id: "energy-card",

          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },

        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            track: {
              background: "transparent",
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: "12px",
                fontWeight: "400",
                color: "#636E72",
              },
              value: {
                fontSize: "24px",
                fontWeight: "500",
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },

        stroke: {
          dashArray: 6,
        },
        labels: ["Completed"],

        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 1,
            gradientToColors: ["#0010F7", "#1BE7FF"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
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
