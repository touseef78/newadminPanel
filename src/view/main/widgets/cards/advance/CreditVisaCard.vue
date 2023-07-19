<template>
  <b-card class="hp-card-3">
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <h5 class="mb-0 text-black-80 hp-text-color-dark-30">Balance</h5>

        <div class="d-flex align-items-center">
          <i
            class="ri-money-euro-circle-line hp-text-color-dark-0"
            style="font-size: 24px"
          ></i>
          <h2 class="mb-0 ml-4">23.900</h2>
        </div>
      </div>

      <i class="ri-visa-line text-primary lh-1" style="font-size: 64px"></i>
    </div>

    <b-row class="mt-48">
      <b-col cols="9">
        <p class="mb-8 hp-text-color-dark-0">Limit</p>

        <b-progress height="4px" value="50"></b-progress>
      </b-col>
    </b-row>

    <b-row class="mt-32">
      <b-col class="hp-flex-none w-auto mr-64">
        <p class="mb-0 hp-caption text-black-80 hp-text-color-dark-30">
          Name on Card
        </p>
        <h5 class="mb-0">Edward Lightning</h5>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <p class="mb-0 hp-caption text-black-80 hp-text-color-dark-30">
          Expires
        </p>
        <h5 class="mb-0">12/23</h5>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BProgress } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BProgress,
  },
};
</script>
