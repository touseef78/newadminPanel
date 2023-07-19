<template>
  <b-card>
    <div class="d-flex align-items-end mb-24">
      <h4 class="mr-8">Area Chart</h4>
      <p class="hp-badge-text">Website Visit</p>
    </div>

    <div class="overflow-hidden">
      <apexchart
        type="area"
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
          name: "Visit",
          data: [
            10877, 29334, 33233, 36439, 32675, 32333, 33457, 38345, 36783,
            30457, 28459, 29840,
          ],
        },
        {
          name: "Click",
          data: [
            8753, 21313, 24623, 28935, 27345, 23465, 27813, 29125, 26256, 24356,
            20233, 24570,
          ],
        },
        {
          name: "Sales",
          data: [
            6000, 11313, 14623, 18935, 17345, 13465, 17813, 19125, 16256, 20356,
            16233, 14570,
          ],
        },
      ],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "area",

          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
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
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },

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
          markers: {
            radius: 12,
          },
        },
        colors: ["#EBFAFA", "#55B1F3", "#0010F7"],

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
