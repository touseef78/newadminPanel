<template>
  <b-card class="hp-card-4 hp-chart-text-color">
    <h5>Visiters</h5>

    <div id="revenue-column-card" class="overflow-hidden">
      <apexchart
        type="area"
        height="350"
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
      series: [
        {
          name: "Ads",
          data: [8245, 14452, 8545, 14452, 6012, 22333],
        },
        {
          name: "Organic",
          data: [12245, 7952, 10623, 7935, 14345, 4002],
        },
      ],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "area",
          id: "visiters-line-card",

          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ["#0063F7", "#00F7BF"],
        labels: {
          style: {
            fontSize: "14px",
          },
        },
        fill: {
          opacity: 0.3,
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

        markers: {
          strokeWidth: 0,
          size: 0,
          colors: ["rgba(0, 255, 198, 0.17)", "rgba(45, 125, 239, 0.17)"],
          hover: {
            sizeOffset: 1,
          },
        },
        xaxis: {
          axisTicks: {
            show: false,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },

          // tickPlacement: "between",
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
          },
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        legend: {
          horizontalAlign: "right",
          offsetX: 40,
          position: "top",
        },
        yaxis: {
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
            formatter: (value) => {
              return value / 1000 + "K";
            },
          },

          min: 0,
          max: 30000,
          tickAmount: 3,
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
