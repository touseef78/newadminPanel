<template>
  <b-card class="hp-card-2">
    <b-row align-h="between" class="mb-32">
      <b-col>
        <div class="d-flex align-items-center">
          <h5 class="mb-0">Statistics</h5>
        </div>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <p class="hp-caption-text text-black-80 hp-text-color-dark-30">
          Updated 1 month ago
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6" sm="3">
        <b-row>
          <b-col class="hp-flex-none w-auto">
            <b-avatar
              variant="none"
              class="bg-primary-4 hp-bg-dark-primary"
              size="48px"
            >
              <i
                class="ri-hand-coin-line text-primary hp-text-color-dark-primary-2"
                style="font-size: 24px"
              ></i>
            </b-avatar>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <h5 class="mb-4">14.000 $</h5>
            <p class="hp-badge-text mb-0 text-black-80 hp-text-color-dark-30">
              Revenue
            </p>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="6" sm="3">
        <b-row>
          <b-col class="hp-flex-none w-auto">
            <b-avatar
              variant="none"
              class="bg-warning-4 hp-bg-dark-warning"
              size="48px"
            >
              <i
                class="ri-money-dollar-circle-line text-warning"
                style="font-size: 24px"
              ></i>
            </b-avatar>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <h5 class="mb-4">94.000 $</h5>
            <p class="hp-badge-text mb-0 text-black-80 hp-text-color-dark-30">
              Sales
            </p>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="6" sm="3">
        <b-row>
          <b-col class="hp-flex-none w-auto">
            <b-avatar
              variant="none"
              class="bg-secondary-4 hp-bg-dark-secondary"
              size="48px"
            >
              <i
                class="ri-user-add-line text-secondary"
                style="font-size: 24px"
              ></i>
            </b-avatar>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <h5 class="mb-4">+120</h5>
            <p class="hp-badge-text mb-0 text-black-80 hp-text-color-dark-30">
              Customer
            </p>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="6" sm="3">
        <b-row>
          <b-col class="hp-flex-none w-auto">
            <b-avatar
              variant="none"
              class="bg-danger-4 hp-bg-dark-danger"
              size="48px"
            >
              <i
                class="ri-user-star-line text-danger"
                style="font-size: 24px"
              ></i>
            </b-avatar>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <h5 class="mb-4">24,500</h5>
            <p class="hp-badge-text mb-0 text-black-80 hp-text-color-dark-30">
              Customer
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BAvatar } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
  },
};
</script>
