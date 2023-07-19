<template>
  <b-card class="hp-card-2" body-class="px-16">
    <b-row align-h="between" class="mb-8">
      <b-col>
        <h5 class="mb-0">Site Trafic</h5>
      </b-col>

      <b-col cols="6" class="hp-flex-none w-auto">
        <b-dropdown variant="text" no-caret toggle-class="p-0 mt-n8">
          <template #button-content class="p-0">
            <i
              class="ri-more-fill hp-text-color-dark-0 remix-icon"
              style="font-size: 24px"
            ></i>
          </template>
          <b-dropdown-item href="#">Last 28 Days</b-dropdown-item>
          <b-dropdown-item href="#">Last Month</b-dropdown-item>
          <b-dropdown-item href="#">Last Year</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col cols="6">
        <p class="hp-badge-text mb-0 text-black-80 hp-text-color-dark-30">
          Site traffic of this week
        </p>

        <h2 class="my-4">120.030</h2>

        <div class="d-flex align-items-center">
          <i
            class="ri-arrow-right-up-line text-success"
            style="font-size: 16px"
          ></i>
          <p class="mb-0 hp-badge-text text-success">10%</p>
        </div>
      </b-col>

      <b-col cols="6">
        <apexchart
          type="line"
          height="100"
          legend="legend"
          :options="options"
          :series="series"
        ></apexchart>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [
        {
          data: [31, 10, 109, 60, 140, 40, 150],
        },
      ],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "line",
          stacked: true,
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
          padding: {
            left: 0,
            right: 0,
          },
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
          lines: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },

          labels: {
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

        yaxis: [
          {
            show: false,
            offsetX: 0,
            offsetY: 0,
            padding: {
              left: 0,
              right: 0,
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
    BDropdown,
    BDropdownItem,
  },
};
</script>
