<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="We used Apex Charts and customized for Yoda" />
    </b-col>

    <b-col cols="12" class="mb-32">
      <line-chart />
    </b-col>

    <b-col cols="12" class="mb-32">
      <column-chart />
    </b-col>

    <b-col cols="12" class="mb-32">
      <area-chart />
    </b-col>

    <b-col cols="12" class="mb-32">
      <scatter-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <bar-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <heatmap-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <radar-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <candlestick-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <donut-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <radialbar-chart />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import LineChart from "./LineChart.vue";
import ColumnChart from "./ColumnChart.vue";
import AreaChart from "./AreaChart.vue";
import ScatterChart from "./ScatterChart.vue";
import BarChart from "./BarChart.vue";
import HeatmapChart from "./HeatmapChart.vue";
import RadarChart from "./RadarChart.vue";
import CandlestickChart from "./CandlestickChart.vue";
import DonutChart from "./DonutChart.vue";
import RadialbarChart from "./RadialbarChart.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    LineChart,
    ColumnChart,
    AreaChart,
    ScatterChart,
    BarChart,
    HeatmapChart,
    RadarChart,
    CandlestickChart,
    DonutChart,
    RadialbarChart,
  },
};
</script>
