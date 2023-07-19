<template>
  <b-card class="hp-ecommerce-detail-card hp-card-6 overflow-hidden">
    <div
      v-if="this.$store.state.themeConfig.theme == 'dark'"
      class="position-absolute w-100 h-100"
      :style="{
        top: 0,
        right: 0,
        backgroundImage:
          'url(' + require('@/assets/img/dasboard/ecommerce-card-bg-dark.png') + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }"
    ></div>
    <div
      v-else
      class="position-absolute w-100 h-100"
      :style="{
        top: 0,
        right: 0,
        backgroundImage:
          'url(' + require('@/assets/img/dasboard/ecommerce-card-bg.png') + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }"
    ></div>

    <b-row>
      <b-col cols="7" class="position-relative">
        <h2 class="mb-0">New VR-07</h2>
        <span class="hp-p1-body d-block text-black-60 hp-text-color-dark-50">
          By Google
        </span>
        <b-button variant="primary" class="btn-ghost mt-16">
          Check Detail
        </b-button>
      </b-col>

      <img
        :src="require('@/assets/img/dasboard/ecommerce-card-img.png')"
        alt="New VR-07"
      />
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
