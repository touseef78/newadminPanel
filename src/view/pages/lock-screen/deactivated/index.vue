<template>
  <b-row
    align-v="center"
    align-h="center"
    class="hp-lock-screen bg-primary-1 hp-bg-color-dark-100"
  >
    <div
      class="hp-screen-bg"
      :style="`
        background-image: url(${require('@/assets/img/pages/lock-screen/lock-pattern.svg')});
      `"
    ></div>

    <b-row
      class="hp-lock-screen-row text-center rounded overflow-hidden pt-64 pb-18 px-0"
    >
      <b-col cols="12" class="mb-48">
        <img
          :src="require('@/assets/img/logo/logo-vector-large.svg')"
          alt="Logo"
        />
      </b-col>

      <b-col cols="12" class="mb-120">
        <h3 class="hp-text-color-black-0 mb-24">Your account is deactivated</h3>

        <p class="hp-p1-body hp-text-color-black-0 mb-32">
          Your account is suspended and is not permitted to perform this action
        </p>

        <b-button
          to="/"
          variant="none"
          class="bg-white text-primary hp-bg-dark-100 hp-text-color-dark-primary-2 hp-border-color-black-0 hp-border-color-dark-90 hp-hover-bg-color-black-30 hp-hover-bg-color-dark-90"
        >
          <span class="d-flex align-items-center">
            <i class="ri-arrow-right-s-line mr-8" style="font-size: 16px"></i>
            Go to homepage
          </span>
        </b-button>
      </b-col>

      <link-items />
    </b-row>
  </b-row>
</template>

<script>
import { BRow, BCol, BButton } from "bootstrap-vue";
import LinkItems from "../LinkItems.vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    LinkItems,
  },
};
</script>
