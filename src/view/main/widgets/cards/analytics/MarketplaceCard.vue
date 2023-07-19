<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Marketplace</h4>
      </b-col>
    </b-row>

    <div class="overflow-hidden">
      <apexchart
        type="radialBar"
        height="184"
        legend="legend"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [61, 82, 65],
      options: {
        chart: {
          height: "184px",
          id: "market-place-chart",
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

        labels: ["Ebay", "Web", "Amazon"],

        dataLabels: {
          enabled: false,
        },
        stroke: {
          lineCap: "round",
        },

        plotOptions: {
          radialBar: {
            dataLabels: {
              show: true,
              name: {
                fontSize: "10px",
              },
              value: {
                fontSize: "10px",
                offsetY: 0,
              },
              total: {
                show: true,
                fontSize: "10px",
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
            horizontal: 0,
            vertical: 6,
          },

          horizontalAlign: "center",
          position: "left",
          fontSize: "14px",

          markers: {
            radius: 12,
          },
        },

        responsive: [
          {
            breakpoint: 325,
            options: {
              legend: {
                itemMargin: {
                  horizontal: 8,
                  vertical: 0,
                },
                horizontalAlign: "center",
                position: "bottom",
                fontSize: "14px",
              },
            },
          },
        ],
      },
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
