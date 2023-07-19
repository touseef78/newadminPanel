<template>
  <b-card class="hp-card-5 hp-eCommerceCardOne">
    <b-row>
      <b-col cols="12">
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
      </b-col>

      <b-col cols="12">
        <div class="text-center">
          <b-link class="d-block">
            <img
              :src="require('@/assets/img/product/white-cam-card.png')"
              alt="4K Action Cam"
              style="max-height: 191px"
            />
          </b-link>
        </div>

        <b-row align-h="between">
          <b-col class="w-auto">
            <ul class="d-flex">
              <li>
                <i
                  class="ri-star-fill text-warning"
                  style="font-size: 20px"
                ></i>
              </li>
              <li>
                <i
                  class="ri-star-fill text-warning"
                  style="font-size: 20px"
                ></i>
              </li>
              <li>
                <i
                  class="ri-star-fill text-warning"
                  style="font-size: 20px"
                ></i>
              </li>
              <li>
                <i
                  class="ri-star-fill text-warning"
                  style="font-size: 20px"
                ></i>
              </li>
              <li>
                <i
                  class="ri-star-fill text-black-40 hp-text-color-dark-70"
                  style="font-size: 20px"
                ></i>
              </li>
            </ul>
          </b-col>

          <b-col class="w-auto">
            <div class="d-flex align-items-center justify-content-end">
              <p
                class="w-auto px-0 mb-0 mr-4 text-black-60 text-decoration-line-through hp-input-description"
              >
                $59.00
              </p>
              <p class="w-auto px-0 mb-0 text-primary font-weight-medium">
                $39.00
              </p>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" class="mb-24">
            <p
              class="mb-0 mr-4 hp-text-color-dark-0 hp-p1-body font-weight-medium"
            >
              Digital Camera White Adition
            </p>
            <p class="mb-0 hp-text-color-dark-0 hp-caption font-weight-normal">
              Touch LCD Screen Zero Ink Camera
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" sm="6">
            <b-button variant="outline-primary" block>
              <span>Check Detail</span>
            </b-button>
          </b-col>

          <b-col cols="12" sm="6">
            <b-button variant="primary" block class="px-12">
              <i class="ri-shopping-bag-line remix-icon"></i>
              <span>Add to Cart</span>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BLink, BBadge, BButton } from "bootstrap-vue";

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
    BLink,
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
