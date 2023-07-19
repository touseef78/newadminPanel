<template>
  <b-card class="hp-card-1" body-class="px-16">
    <b-row align-v="center">
      <b-col cols="5">
        <apexchart
          type="bar"
          height="57"
          legend="legend"
          :options="options"
          :series="series"
        ></apexchart>
      </b-col>

      <b-col cols="7">
        <h3 class="mb-0">1,346</h3>
        <p class="hp-p1-body mb-0">New Subscribe</p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [
        {
          name: "Earning",
          data: [50, 70, 100, 60],
        },
      ],
      options: {
        chart: {
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
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            startingShape: "rounded",
            colors: {
              backgroundBarColors: [],
              backgroundBarRadius: 5,
            },
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#00F7BF"],
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
