<template>
  <b-card class="border-0 hp-card-2 px-12 py-16 hp-upgradePlanCardOne">
    <div
      v-if="this.$store.state.themeConfig.theme == 'dark'"
      class="position-absolute w-100 h-100"
      v-bind:style="{
        top: 0,
        left: 0,
        backgroundImage:
          'url(' +
          require('@/assets/img/dasboard/analytics-download-bg-dark.png') +
          ')',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        zIndex: -1,
      }"
    ></div>
    <div
      v-else
      class="position-absolute w-100 h-100"
      v-bind:style="{
        top: 0,
        left: 0,
        backgroundImage:
          'url(' +
          require('@/assets/img/dasboard/analytics-download-bg.png') +
          ')',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        zIndex: -1,
      }"
    ></div>

    <b-row>
      <b-col cols="7">
        <h5 class="mb-0 text-black-0">
          Check the Best Prices of New Models &amp; Boost Your Business
        </h5>

        <b-button
          variant="none"
          class="mt-32 border-primary bg-black-0 hp-bg-color-dark-primary-1 text-primary hp-text-color-dark-0"
        >
          <i class="iconly-Light-Download remix-icon"></i>
          <span>Download</span>
        </b-button>
      </b-col>

      <b-col
        class="hp-flex-none w-auto position-absolute h-100 pr-0"
        style="top: 0; right: 0"
      >
        <img
          :src="require('@/assets/img/dasboard/analytics-download-vector.svg')"
          class="h-100 hp-dir-scale-x-n1"
          alt="Check the Best Prices of New Models &amp; Boost Your Business"
        />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
  },
};
</script>
