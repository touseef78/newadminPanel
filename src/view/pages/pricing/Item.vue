<template>
  <b-row align-v="start" align-h="center" class="mx-0">
    <b-col
      cols="12"
      class="w-auto hp-pricing-item p-24 mx-8 mx-xl-16 mb-24 mb-md-16 border rounded border-black-40 hp-border-color-dark-80"
      :key="index"
      v-for="(item, index) in data"
      :class="item.special ? 'hp-pricing-item-special' : ''"
    >
      <div>
        <b-row align-h="between" class="mb-8 mb-sm-32">
          <b-col v-if="item.best" cols="12">
            <b-row align-h="between">
              <div class="col-8 col-xl-7">
                <h5 class="mb-0 hp-pricing-item-title">
                  {{ item.title }}
                </h5>
                <p
                  class="hp-pricing-item-subtitle hp-caption text-black-60 mb-0"
                >
                  {{ item.subTitle }}
                </p>
              </div>

              <div class="col-4 col-xl-5">
                <div
                  class="badge hp-pricing-item-best-button border-primary hp-caption p-4 bg-primary-4 text-primary"
                >
                  <span>Best Price</span>
                </div>
              </div>
            </b-row>
          </b-col>
          <b-col v-else class="pe-0">
            <h5 class="mb-0 hp-pricing-item-title">
              {{ item.title }}
            </h5>
            <p class="hp-pricing-item-subtitle hp-caption text-black-60 mb-0">
              {{ item.subTitle }}
            </p>
          </b-col>
        </b-row>

        <span class="hp-pricing-item-price h1">
          <span v-if="switchChecked" class="hp-pricing-billed-active">
            {{ item.priceYearly }}
          </span>
          <span v-else class="hp-pricing-billed-active">
            {{ item.priceMonthly }}
          </span>
        </span>

        <p
          class="hp-pricing-item-billed hp-caption mt-0 mt-sm-4 mb-0 text-black-60"
        >
          <span v-if="switchChecked" class="hp-pricing-billed-active">
            {{ item.billedYearly }}
          </span>
          <span v-else class="hp-pricing-billed-active">
            {{ item.billedMonthly }}
          </span>
        </p>

        <ul class="mt-24">
          <li
            :key="index"
            v-for="(item, index) in item.list"
            class="hp-pricing-item-list d-flex align-items-center mt-8"
          >
            <i
              class="ri-checkbox-circle-line text-primary"
              style="font-size: 16px"
            ></i>

            <span
              class="d-block ml-8 hp-caption font-weight-normal hp-text-color-dark-0"
            >
              {{ item }}
            </span>
          </li>
        </ul>
      </div>

      <b-button v-if="item.special" variant="primary" class="w-100 mt-32">
        <span>{{ item.button }}</span>
      </b-button>
      <b-button v-else variant="primary" class="w-100 mt-32">
        <span>{{ item.button }}</span>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BButton } from "bootstrap-vue";

export default {
  props: ["switchChecked", "data"],
  components: {
    BRow,
    BCol,
    BButton,
  },
};
</script>
