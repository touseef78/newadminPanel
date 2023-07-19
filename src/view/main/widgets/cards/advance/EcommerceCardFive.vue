<template>
  <b-card class="hp-card-3 hp-eCommerceCardOne">
    <b-row>
      <b-col cols="12" class="text-center">
        <div class="d-flex align-items-start justify-content-between">
          <b-badge variant="danger" class="border-0">%25 Discount</b-badge>

          <div
            v-if="wishCheck"
            @click="wishToggle"
            class="d-flex w-auto lh-1 hp-wish-button hp-cursor-pointer text-danger bg-danger-4 hp-bg-color-dark-danger rounded-circle remix-icon p-8"
          >
            <i class="ri-heart-fill"></i>
          </div>

          <div
            v-else
            @click="wishToggle"
            class="d-flex w-auto lh-1 hp-wish-button hp-cursor-pointer text-black-40 hp-text-color-dark-70 bg-black-10 hp-bg-color-dark-90 rounded-circle remix-icon p-8"
          >
            <i class="ri-heart-fill"></i>
          </div>
        </div>

        <img
          class="my-8"
          :src="require('@/assets/img/product/xbox-1.png')"
          alt="Xbox Wireless Game Console"
          style="max-height: 120px"
        />
        <h3 class="mb-8 text-primary font-weight-500">$39.00</h3>
        <h5 class="mb-4 hp-eCommerceCardOne-text-overlay">
          Xbox Wireless Game Console
        </h5>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BBadge } from "bootstrap-vue";

export default {
  data() {
    return {
      wishCheck: true,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BBadge,
  },
  methods: {
    wishToggle() {
      this.wishCheck = !this.wishCheck;
    },
  },
};
</script>
