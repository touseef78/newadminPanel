<template>
  <b-card class="hp-card-2 text-center" body-class="p-16">
    <div
      class="bg-secondary-4 hp-bg-color-dark-90 rounded d-flex align-items-center justify-content-center px-18 mb-18"
    >
      <apexchart
        type="radialBar"
        height="80"
        legend="legend"
        :options="options"
        :series="series"
      ></apexchart>
    </div>

    <h3 class="mb-0">2,345</h3>
    <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-50">
      Ticket Closed
    </p>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [76],
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
            top: 0,
            bottom: 0,
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
              background: "#ffffff",
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
                color: "#636E72",
              },

              total: {
                show: true,
                fontSize: "14px",
                label: "",
                formatter: function (w) {
                  return "%" + 76;
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
        colors: ["#FF8B9A"],
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
