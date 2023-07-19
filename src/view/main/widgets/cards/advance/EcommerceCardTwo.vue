<template>
  <b-card class="hp-card-3">
    <b-row>
      <b-col cols="12">
        <div class="text-center">
          <img
            :src="require('@/assets/img/product/watch-card.png')"
            alt="Xbox Wireless Game"
          />
        </div>

        <b-row align-h="center">
          <b-col cols="12" class="text-center">
            <h5
              class="mb-0 mt-12 mr-4 text-black-100 hp-text-color-dark-0 hp-p1-body font-weight-medium"
            >
              Xbox Wireless Game
            </h5>
            <h3 class="mb-0 my-8 text-primary">£399</h3>
            <div class="d-flex align-items-center justify-content-center">
              <i class="ri-arrow-right-up-line text-success"></i>
              <p class="mb-0 mr-8 hp-badge-text text-success">+4</p>
              <p class="mb-0 hp-badge-text">New Item</p>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
