<template>
  <b-card>
    <div class="d-flex align-items-end mb-24">
      <h4 class="mr-8">Line Chart</h4>
      <p class="hp-badge-text">Website Visit</p>
    </div>

    <div class="overflow-hidden">
      <apexchart
        type="line"
        legend="legend"
        height="350"
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
          data: [
            28877, 29334, 33233, 36439, 32675, 32333, 33457, 38345, 36783,
            39457, 22459, 39840,
          ],
        },
        {
          name: "Organic",
          data: [
            12010, 11313, 14623, 18935, 17345, 13465, 17813, 19125, 16256,
            20356, 12233, 14570,
          ],
        },
      ],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "line",

          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ["#0063F7", "#1BE7FF"],
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

        markers: {
          strokeWidth: 0,
          size: 6,
          colors: ["#0063F7", "#1BE7FF"],
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

          tickPlacement: "between",
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
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
          max: 40000,
          tickAmount: 4,
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
