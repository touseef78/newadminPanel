<template>
  <b-card>
    <b-row align-v="center">
      <b-col cols="12" sm="2">
        <h5>Earnings</h5>
        <p class="hp-p1-body text-black-60 hp-text-color-dark-50 mb-0">
          This month
        </p>
        <h4 class="mb-0">$6.340.42</h4>
      </b-col>

      <b-col cols="12" sm="10" class="overflow-hidden">
        <apexchart
          type="bar"
          height="100"
          :options="options"
          :series="series"
        ></apexchart>
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
          name: "Marketing",
          data: [48],
        },
        {
          name: "Payment",
          data: [21],
        },
        {
          name: "Bills",
          data: [31],
        },
      ],
      options: {
        chart: {
          type: "bar",
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "100%",
          },
        },
        colors: ["#00F7BF", "#1BE7FF", "#0010F7"],
        fill: {
          type: "solid",
        },
        xaxis: {
          type: "datetime",
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
        },
        legend: {
          position: "left",
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
