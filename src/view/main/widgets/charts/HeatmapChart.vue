<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="6">
        <h4 class="mr-8">Heatmap Chart</h4>
        <p class="hp-badge-text">Sales</p>
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

    <div class="overflow-hidden">
      <apexchart
        type="heatmap"
        legend="legend"
        height="350"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [
        {
          name: "SUN",
          data: this.generateData(24, {
            min: 0,
            max: 40,
          }),
        },
        {
          name: "MON",
          data: this.generateData(24, {
            min: 0,
            max: 40,
          }),
        },
        {
          name: "TUE",
          data: this.generateData(24, {
            min: 0,
            max: 40,
          }),
        },
        {
          name: "WED",
          data: this.generateData(24, {
            min: 0,
            max: 40,
          }),
        },
        {
          name: "THU",
          data: this.generateData(24, {
            min: 0,
            max: 40,
          }),
        },
        {
          name: "FRI",
          data: this.generateData(24, {
            min: 0,
            max: 40,
          }),
        },
        {
          name: "SAT",
          data: this.generateData(24, {
            min: 0,
            max: 40,
          }),
        },
      ],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "heatmap",

          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },
        plotOptions: {
          heatmap: {
            enableShades: false,

            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 10,
                  name: "0-10",
                  color: "#EBFAFA",
                },
                {
                  from: 11,
                  to: 20,
                  name: "10-20",
                  color: "#55B1F3",
                },
                {
                  from: 21,
                  to: 30,
                  name: "20-30",
                  color: "#0063F7",
                },
                {
                  from: 31,
                  to: 40,
                  name: "30-40",
                  color: "#0010F7",
                },
              ],
            },
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
        },
        fill: {
          opacity: 1,
          type: "solid",
        },

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
        legend: {
          horizontalAlign: "center",
          position: "bottom",
          fontSize: "14px",
          markers: {
            radius: 12,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["636E72"],
              fontSize: "14px",
            },
          },
        },
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
  methods: {
    generateData(count, yrange) {
      let i = 0;
      const series = [];
      while (i < count) {
        const x = `w${(i + 1).toString()}`;
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push({
          x,
          y,
        });
        i++;
      }
      return series;
    },
  },
};
</script>
