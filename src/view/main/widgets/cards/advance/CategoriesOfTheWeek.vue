<template>
  <b-card class="hp-card-2">
    <b-row>
      <b-col cols="12" class="mb-16">
        <h5 class="mb-16">Categories of the week</h5>
      </b-col>

      <b-col cols="12">
        <b-row align-h="between" class="hp-categoriesOfTheWeek">
          <b-col cols="6" class="mb-24">
            <div class="d-flex align-items-center">
              <div class="bg-black-20 hp-bg-color-dark-70 p-4 hp-img-container">
                <img
                  :src="require('@/assets/img/product/watch-1.png')"
                  alt="Sports"
                />
              </div>

              <div>
                <p
                  class="mb-4 text-black-100 hp-text-color-dark-0 hp-badge-text font-weight-medium"
                >
                  9K Sales
                </p>
                <p
                  class="mb-0 text-black-80 hp-text-color-dark-30 hp-input-description"
                >
                  Sports
                </p>
              </div>
            </div>
          </b-col>

          <b-col cols="6" class="mb-24">
            <div class="d-flex align-items-center">
              <div class="bg-black-20 hp-bg-color-dark-70 p-4 hp-img-container">
                <img
                  :src="require('@/assets/img/product/xbox-1.png')"
                  alt="Tech"
                />
              </div>

              <div>
                <p
                  class="mb-4 text-black-100 hp-text-color-dark-0 hp-badge-text font-weight-medium"
                >
                  15K Sales
                </p>
                <p
                  class="mb-0 text-black-80 hp-text-color-dark-30 hp-input-description"
                >
                  Tech
                </p>
              </div>
            </div>
          </b-col>

          <b-col cols="6">
            <div class="d-flex align-items-center">
              <div class="bg-black-20 hp-bg-color-dark-70 p-4 hp-img-container">
                <img
                  :src="
                    require('@/assets/img/product/wireless-bluetooth-1.png')
                  "
                  alt="Home"
                />
              </div>

              <div>
                <p
                  class="mb-4 text-black-100 hp-text-color-dark-0 hp-badge-text font-weight-medium"
                >
                  10K Sales
                </p>
                <p
                  class="mb-0 text-black-80 hp-text-color-dark-30 hp-input-description"
                >
                  Home
                </p>
              </div>
            </div>
          </b-col>

          <b-col cols="6">
            <div class="d-flex align-items-center">
              <div class="bg-black-20 hp-bg-color-dark-70 p-4 hp-img-container">
                <img
                  :src="require('@/assets/img/product/white-cam-1.png')"
                  alt="Style"
                />
              </div>

              <div>
                <p
                  class="mb-4 text-black-100 hp-text-color-dark-0 hp-badge-text font-weight-medium"
                >
                  12K Sales
                </p>
                <p
                  class="mb-0 text-black-80 hp-text-color-dark-30 hp-input-description"
                >
                  Style
                </p>
              </div>
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
