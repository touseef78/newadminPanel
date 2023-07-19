<template>
  <b-card class="hp-card-1" body-class="px-16">
    <b-row align-v="center">
      <b-col cols="5">
        <apexchart
          type="radialBar"
          height="100"
          legend="legend"
          :options="options"
          :series="series"
        ></apexchart>
      </b-col>

      <b-col cols="7">
        <h3 class="mb-0">17,346</h3>
        <p class="hp-p1-body mb-0">Active Users</p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [40],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
            top: -15,
            bottom: -15,
          },
        },
        stroke: {
          lineCap: "round",
        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            size: 85,
            hollow: {
              size: "60%",
            },
            track: {
              show: true,
              background: "#DFE6E9",
              strokeWidth: "97%",
              opacity: 1,
              margin: 5,
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
            },

            dataLabels: {
              show: true,
              value: {
                fontSize: "14px",
                offsetY: -10,
              },
              total: {
                show: true,
                fontSize: "14px",
                label: "",
                formatter: function (w) {
                  return "%" + 40;
                },
              },
            },
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#0063F7"],
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          max: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
        },
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
