<template>
  <b-card
    body-class="d-flex align-items-center"
    class="hp-card-1 hp-upgradePlanCardOne"
  >
    <b-row align-v="center" align-h="between" class="flex-grow-1">
      <b-col>
        <h5 class="mb-8">Get exclusive discounts for any payment method</h5>
        <p class="hp-p1-body mb-0">by upgrading your plan to premium</p>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <b-button
          variant="primary"
          class="btn-icon-only rounded-circle mt-16 mt-sm-0"
        >
          <i class="ri-arrow-right-s-line remix-icon"></i>
        </b-button>
      </b-col>
    </b-row>

    <div class="hp-dot-1 bg-black-20 hp-bg-color-dark-90"></div>
    <div class="hp-dot-2 bg-black-20 hp-bg-color-dark-90"></div>
    <div class="hp-dot-3 bg-success-4 hp-bg-color-dark-success"></div>
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
