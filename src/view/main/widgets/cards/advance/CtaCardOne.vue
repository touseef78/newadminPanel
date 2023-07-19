<template>
  <b-card class="hp-card-6">
    <b-row class="row">
      <b-col cols="12" class="text-center">
        <img
          :src="
            this.$store.state.themeConfig.theme == 'dark'
              ? require('@/assets/img/illustrations/time-management-1-dark.svg')
              : require('@/assets/img/illustrations/time-management-1.svg')
          "
          alt="Buy Pro Account to explore Premium Features"
        />

        <h4 class="my-24 mr-4 font-weight-bold">
          Buy Pro Account to explore Premium Features
        </h4>

        <b-button variant="primary">
          <span>Purchase Now</span>
        </b-button>
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
