<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Visit Customers</h4>
      </b-col>
    </b-row>

    <div class="overflow-hidden">
      <apexchart
        type="donut"
        height="184px"
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
      series: [35, 25, 45],
      options: {
        chart: {
          id: "visit-customer-donut-card",
          fontFamily: "Manrope, sans-serif",
          type: "donut",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ["#1BE7FF", "#0010F7", "#00F7BF"],

        labels: ["Desktop", "Tablet", "Mobile"],

        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "75%",
              labels: {
                show: true,
                name: {
                  fontSize: "12px",
                  offsetY: 0,
                },
                value: {
                  fontSize: "12px",
                  offsetY: 0,
                  formatter(val) {
                    return `% ${val}`;
                  },
                },
                total: {
                  show: true,
                  fontSize: "16px",
                  label: "Total",

                  formatter: function (w) {
                    return "2400";
                  },
                },
              },
            },
          },
        },

        legend: {
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
                  horizontal: 4,
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
