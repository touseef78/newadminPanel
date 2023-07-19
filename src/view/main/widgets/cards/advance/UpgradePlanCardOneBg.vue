<template>
  <b-card class="hp-card-1 hp-upgradePlanCardOne hp-upgradePlanCardOne-bg">
    <div
      v-if="this.$store.state.themeConfig.theme == 'dark'"
      class="position-absolute w-100 h-100"
      v-bind:style="{
        top: 0,
        left: 0,
        backgroundImage:
          'url(' +
          require('@/assets/img/dasboard/analytics-payment-bg-dark.png') +
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
          require('@/assets/img/dasboard/analytics-payment-bg.svg') +
          ')',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        zIndex: -1,
      }"
    ></div>

    <b-row align-v="center" class="mt-8">
      <b-col cols="12" class="mb-4">
        <b-row align-v="center" align-h="between">
          <b-col class="flex-grow-1">
            <h4 class="mb-8">Get exclusive discounts for any payment method</h4>
            <p class="hp-p1-body mb-0">by upgrading your plan to premium</p>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <b-button
              variant="none"
              class="mt-16 mt-sm-0 bg-white text-primary hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0"
            >
              <span>Upgradge Now</span>
            </b-button>
          </b-col>
        </b-row>
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
