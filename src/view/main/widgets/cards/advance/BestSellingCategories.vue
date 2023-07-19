<template>
  <b-card class="hp-card-4">
    <b-row>
      <b-col cols="12">
        <h5 class="mb-24">Best Selling Categories</h5>
      </b-col>

      <b-col cols="12">
        <b-row align-h="between" class="hp-bestSellingCategories">
          <b-col cols="12" class="mb-16">
            <b-row align-v="center" align-h="between">
              <b-col class="hp-flex-none w-auto">
                <b-row align-v="center">
                  <b-col class="hp-flex-none w-auto pr-0">
                    <div
                      class="bg-black-20 hp-bg-color-dark-70 p-4 rounded text-center"
                      style="width: 48px; height: 48px"
                    >
                      <img
                        :src="require('@/assets/img/product/watch-1.png')"
                        alt="Technology"
                      />
                    </div>
                  </b-col>

                  <b-col class="hp-flex-none w-auto">
                    <p
                      class="mb-4 text-black-100 hp-text-color-dark-0 hp-badge-text font-weight-medium"
                    >
                      5KSales
                    </p>
                    <p
                      class="mb-0 text-black-80 hp-text-color-dark-30 hp-input-description"
                    >
                      Technology
                    </p>
                  </b-col>
                </b-row>
              </b-col>

              <b-col class="hp-flex-none w-auto">
                <p class="mb-4 hp-p1-body">$45K</p>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="12" class="mb-16">
            <b-row
              align-v="center"
              align-h="between"
              class="hp-bestSellingCategories"
            >
              <b-col class="hp-flex-none w-auto">
                <b-row align-v="center">
                  <b-col class="hp-flex-none w-auto pr-0">
                    <div
                      class="bg-black-20 hp-bg-color-dark-70 p-4 rounded text-center"
                      style="width: 48px; height: 48px"
                    >
                      <img
                        :src="
                          require('@/assets/img/product/wireless-bluetooth-1.png')
                        "
                        alt="Music"
                      />
                    </div>
                  </b-col>

                  <b-col class="hp-flex-none w-auto">
                    <p
                      class="mb-4 text-black-100 hp-text-color-dark-0 hp-badge-text font-weight-medium"
                    >
                      1.2KSales
                    </p>
                    <p
                      class="mb-0 text-black-80 hp-text-color-dark-30 hp-input-description"
                    >
                      Music
                    </p>
                  </b-col>
                </b-row>
              </b-col>

              <b-col class="hp-flex-none w-auto">
                <p class="mb-4 hp-p1-body">$25K</p>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="12" class="mb-16">
            <b-row
              align-v="center"
              align-h="between"
              class="hp-bestSellingCategories"
            >
              <b-col class="hp-flex-none w-auto">
                <b-row align-v="center">
                  <b-col class="hp-flex-none w-auto pr-0">
                    <div
                      class="bg-black-20 hp-bg-color-dark-70 p-4 rounded text-center"
                      style="width: 48px; height: 48px"
                    >
                      <img
                        :src="require('@/assets/img/product/xbox-1.png')"
                        alt="Gaming"
                      />
                    </div>
                  </b-col>

                  <b-col class="hp-flex-none w-auto">
                    <p
                      class="mb-4 text-black-100 hp-text-color-dark-0 hp-badge-text font-weight-medium"
                    >
                      560Sales
                    </p>
                    <p
                      class="mb-0 text-black-80 hp-text-color-dark-30 hp-input-description"
                    >
                      Gaming
                    </p>
                  </b-col>
                </b-row>
              </b-col>

              <b-col class="hp-flex-none w-auto">
                <p class="mb-4 hp-p1-body">$55K</p>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="12">
            <b-row
              align-v="center"
              align-h="between"
              class="hp-bestSellingCategories"
            >
              <b-col class="hp-flex-none w-auto">
                <b-row align-v="center">
                  <b-col class="hp-flex-none w-auto pr-0">
                    <div
                      class="bg-black-20 hp-bg-color-dark-70 p-4 rounded text-center"
                      style="width: 48px; height: 48px"
                    >
                      <img
                        :src="require('@/assets/img/product/white-cam-1.png')"
                        alt="Photography"
                      />
                    </div>
                  </b-col>

                  <b-col class="hp-flex-none w-auto">
                    <p
                      class="mb-4 text-black-100 hp-text-color-dark-0 hp-badge-text font-weight-medium"
                    >
                      1KSales
                    </p>
                    <p
                      class="mb-0 text-black-80 hp-text-color-dark-30 hp-input-description"
                    >
                      Photography
                    </p>
                  </b-col>
                </b-row>
              </b-col>

              <b-col class="hp-flex-none w-auto">
                <p class="mb-4 hp-p1-body">$250K</p>
              </b-col>
            </b-row>
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
