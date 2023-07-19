<template>
  <b-card class="hp-eCommerceCardOne hp-card-3">
    <b-row>
      <b-col cols="12" md="4" class="mb-24 mb-md-0">
        <b-row align-v="start" align-h="between" class="mx-0">
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
              :src="require('@/assets/img/product/white-cam-card.png')"
              alt="Digital Camera White Adition"
            />
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" md="8">
        <b-row>
          <b-col cols="12" sm="6">
            <ul class="d-flex">
              <li class="mr-6">
                <i
                  class="ri-star-fill text-warning"
                  style="font-size: 20px"
                ></i>
              </li>
              <li class="mr-6">
                <i
                  class="ri-star-fill text-warning"
                  style="font-size: 20px"
                ></i>
              </li>
              <li class="mr-6">
                <i
                  class="ri-star-fill text-warning"
                  style="font-size: 20px"
                ></i>
              </li>
              <li class="mr-6">
                <i
                  class="ri-star-fill text-warning"
                  style="font-size: 20px"
                ></i>
              </li>
              <li class="mr-6">
                <i
                  class="ri-star-fill text-black-40 hp-text-color-dark-70"
                  style="font-size: 20px"
                ></i>
              </li>
            </ul>

            <div class="my-8">
              <h4 class="mb-4">Digital Camera White Adition</h4>
              <p class="hp-caption mb-0 text-black-60">
                By
                <span class="text-black-80 hp-text-color-dark-30">
                  Polaroid
                </span>
              </p>
            </div>

            <p
              class="mb-0 hp-p1-body font-weight-normal text-black-80 hp-text-color-dark-30"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
              amet urna eu nunc faucibus scelerisque quis sed est.
            </p>
          </b-col>

          <b-col cols="12" sm="6">
            <div class="text-sm-right mt-24 mt-sm-0">
              <span class="h3 mb-8 text-primary font-weight-medium">
                $39.00
              </span>

              <div class="d-flex align-items-center justify-content-end mb-4">
                <i class="ri-checkbox-circle-fill text-success mr-4"></i>
                <p class="mb-0 hp-text-color-dark-0">
                  Flexible credit available
                </p>
              </div>

              <div class="d-flex align-items-center justify-content-end mb-4">
                <i class="ri-checkbox-circle-fill text-success mr-4"></i>
                <p class="mb-0 hp-text-color-dark-0">Free Shipping Worldwide</p>
              </div>

              <b-button variant="outline-primary" block class="mt-24 mb-8">
                <span>Check Detail</span>
              </b-button>

              <b-button variant="primary" block>
                <i class="ri-shopping-bag-line remix-icon mr-8"></i>
                <span>Add to Cart</span>
              </b-button>
            </div>
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
