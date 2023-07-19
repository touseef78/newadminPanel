<template>
  <b-row class="bg-primary-4 hp-bg-color-dark-90 text-center">
    <b-col cols="12" class="hp-error-content py-32">
      <b-row align-v="center" align-h="center" class="row h-100">
        <b-col cols="12">
          <div class="position-relative mt-0 mt-sm-64 mb-32">
            <div class="hp-error-content-circle hp-bg-dark-100"></div>

            <img
              v-bind:src="require('@/assets/img/pages/error/502.svg')"
              class="position-relative d-block mx-auto"
              alt="502"
            />
          </div>

          <h1 class="hp-error-content-title mb-0 mb-sm-8 font-weight-light">
            502
          </h1>

          <h2 class="h1 mb-0 mb-sm-16">Bad Gateway</h2>

          <p class="mb-32 hp-p1-body">We are trying to fix the problem.</p>

          <b-button to="/" variant="primary">
            <span>Back to Home</span>
          </b-button>
        </b-col>
      </b-row>
    </b-col>

    <footer-item />
  </b-row>
</template>

<script>
import { BRow, BCol, BButton } from "bootstrap-vue";
import FooterItem from "../FooterItem.vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    FooterItem,
  },
};
</script>
