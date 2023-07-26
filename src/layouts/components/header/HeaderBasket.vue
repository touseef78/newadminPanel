<template>
  <!-- <div class="mr-4 hp-basket-dropdown-button w-auto px-0 position-relative">
    <b-button variant="text" class="btn-icon-only">
      <i class="iconly-Curved-Buy hp-text-color-black-60"></i>
    </b-button> -->

    <!-- <div class="hp-basket-dropdown">
      <b-row align-v="center" align-h="between" class="px-8">
        <h5 class="mb-0 w-auto hp-text-color-dark-15 ml-8">My Cart</h5>

        <div class="w-auto px-0 mr-8">
          <span
            class="d-inline-block hp-caption font-weight-normal px-12 rounded w-auto hp-bg-color-primary-4 hp-text-color-primary-1"
          >
            1 Item
          </span>
        </div>
      </b-row>

      <div class="divider mt-24 mb-4"></div>

      <div class="hp-basket-dropdown-list">
        <div
          class="d-block hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded py-8 px-10 hp-overflow-x-auto"
          style="margin-left: -10px; margin-right: -10px"
        >
          <b-row align-v="center" align-h="between" class="flex-nowrap">
            <b-col class="mt-4 pr-0" style="flex: 0 0 32px">
              <b-link to="#">
                <b-avatar
                  class="hp-bg-black-0 hp-bg-dark-100"
                  :src="require('@/assets/img/product/watch-1.png')"
                  size="35px"
                />
              </b-link>
            </b-col>

            <b-col class="ml-10 px-0" style="flex: 0 0 110px">
              <b-link to="#">
                <h5
                  class="mb-0 mr-2 font-weight-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-15"
                >
                  Smart Watches 3
                </h5>

                <p
                  class="mb-0 hp-caption hp-text-color-black-60"
                  style="margin-top: 1px"
                >
                  By <span class="hp-text-color-black-80">Sony</span>
                </p>
              </b-link>
            </b-col>

            <b-col
              class="hp-d-flex hp-d-flex-column ml-8 px-0"
              style="flex: 0 0 80px"
            >
              <input-number :min="1" :max="10" :value="1" />

              <div
                class="hp-cursor-pointer mt-4 hp-caption text-black-60 text-decoration-underline"
              >
                Remove Item
              </div>
            </b-col>

            <b-col class="pl-0 text-right">
              <p
                class="hp-basket-dropdown-list-item-price hp-p1-body mb-0 hp-text-color-primary-1 hp-text-color-dark-primary-2 font-weight-medium"
              >
                $59.00
              </p>
            </b-col>
          </b-row>
        </div>
      </div>

      <div class="divider mt-4 mb-12"></div>

      <b-row class="mx-n8">
        <b-col cols="6" class="px-8">
          <b-button
            variant="text"
            block
            class="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-bg-primary-4 hp-hover-bg-dark-primary"
          >
            View Cart
          </b-button>
        </b-col>

        <b-col cols="6" class="px-8">
          <b-button variant="primary" block>Checkout</b-button>
        </b-col>
      </b-row>
    </div> -->
  <!-- </div> -->
</template>

<script>
import { BRow, BCol, BAvatar, BButton, BLink } from "bootstrap-vue";

import InputNumber from "@/view/components/data-entry/input-number/InputNumber.vue";

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BButton,
    BLink,
    InputNumber,
  },
};
</script>
