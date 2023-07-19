<template>
  <b-card class="hp-eCommerceCardOne hp-card-3">
    <b-row>
      <b-col cols="12" md="5" class="mb-24 mb-md-0">
        <b-row align-v="start" align-h="between">
          <b-badge variant="primary" class="border-0">Featured</b-badge>

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
        </b-row>

        <b-row>
          <b-col cols="12" class="text-center">
            <img
              :src="require('@/assets/img/product/xbox-1.png')"
              alt="Xbox Wireless Game Console"
            />
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" md="7" class="pl-32">
        <ul class="d-flex">
          <li class="mr-6">
            <i class="ri-star-fill text-warning" style="font-size: 20px"></i>
          </li>
          <li class="mr-6">
            <i class="ri-star-fill text-warning" style="font-size: 20px"></i>
          </li>
          <li class="mr-6">
            <i class="ri-star-fill text-warning" style="font-size: 20px"></i>
          </li>
          <li class="mr-6">
            <i class="ri-star-fill text-warning" style="font-size: 20px"></i>
          </li>
          <li class="mr-6">
            <i
              class="ri-star-fill text-black-40 hp-text-color-dark-70"
              style="font-size: 20px"
            ></i>
          </li>
        </ul>

        <div class="my-8">
          <h4 class="mb-4">Xbox Wireless Game Console</h4>
          <p class="hp-caption mb-0 text-black-60">
            By
            <span class="text-black-80 hp-text-color-dark-30">Microsoft</span>
          </p>
        </div>

        <p
          class="mb-0 hp-p1-body font-weight-normal text-black-80 hp-text-color-dark-30"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          urna eu nunc faucibus scelerisque quis sed est.
        </p>

        <div class="d-flex align-items-center mt-8 mb-12 mb-sm-0">
          <p class="h5 w-auto px-0 mb-0 mr-4 text-primary font-weight-medium">
            $39.00
          </p>
          <p
            class="w-auto px-0 mb-0 text-black-60 text-decoration-line-through hp-input-description"
          >
            $59.00
          </p>
        </div>

        <b-row class="mt-12">
          <b-col cols="12" xl="6" class="pr-xl-4 mb-8 mb-xl-0">
            <b-button variant="outline-primary" block> Check Detail </b-button>
          </b-col>

          <b-col cols="12" xl="6" class="pl-xl-4">
            <b-button variant="primary" block>
              <i class="ri-shopping-bag-line remix-icon mr-8"></i>
              Add to Cart
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BBadge, BButton } from "bootstrap-vue";

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
    BButton,
  },
  methods: {
    wishToggle() {
      this.wishCheck = !this.wishCheck;
    },
  },
};
</script>
