<template>
  <b-card class="hp-card-4">
    <b-row align-h="between">
      <b-col>
        <h4 class="mr-8">Revenue</h4>
      </b-col>

      <b-col cols="6" class="hp-flex-none w-auto">
        <p class="hp-badge-text">Last Week</p>
      </b-col>
    </b-row>

    <b-row
      align-v="center"
      align-h="between"
      :key="index"
      v-for="(item, index) in [0, 1, 2]"
    >
      <b-col cols="6">
        <apexchart
          type="line"
          legend="legend"
          :options="options"
          :series="series"
        ></apexchart>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <p class="mb-0 hp-text-color-dark-0">Total Sales</p>

        <div class="d-flex align-items-center">
          <h5 class="mb-0 mr-4">$12.253</h5>
          <i class="ri-arrow-right-down-line lh-normal text-danger"></i>
          <p class="mb-0 hp-input-description text-danger">10%</p>
        </div>
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
          data: [0, 20, 10, 40, 50, 30],
        },
      ],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "line",
          id: "visiters-line-card",

          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ["#0063F7"],
        labels: {
          style: {
            fontSize: "14px",
          },
        },
        stroke: {
          curve: "smooth",
          lineCap: "round",
        },

        tooltip: {
          enabled: false,
        },

        dataLabels: {
          enabled: false,
        },

        grid: {
          show: false,
        },

        markers: {
          strokeWidth: 0,
          size: 0,
          colors: ["#0063F7", "#1BE7FF"],
          hover: {
            sizeOffset: 1,
          },
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 426,
            options: {
              legend: {
                itemMargin: {
                  horizontal: 16,
                  vertical: 8,
                },
              },
            },
          },
        ],

        yaxis: {
          show: false,
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
