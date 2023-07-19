<template>
  <b-card class="hp-card-3 hp-eCommerceCardOne">
    <b-row>
      <b-col cols="12" class="text-center">
        <h5 class="mb-4 hp-eCommerceCardOne-text-overlay">
          Xbox Wireless Game Console
        </h5>
        <p class="hp-caption mb-0 text-black-60 hp-text-color-dark-50">
          By
          <span class="text-black-80 hp-text-color-dark-30"> Microsoft</span>
        </p>

        <img
          :src="require('@/assets/img/product/xbox-1.png')"
          alt="Xbox Wireless Game Console"
          style="max-height: 120px"
        />

        <div class="d-flex align-items-center justify-content-center flex-wrap">
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
            <li>
              <i
                class="ri-star-fill text-black-40 hp-text-color-dark-70"
                style="font-size: 20px"
              ></i>
            </li>
          </ul>

          <span class="h3 mb-0 text-primary font-weight-medium">$39.00</span>
        </div>
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
