<template>
  <div
    :type="item.type"
    class="hp-credit-card p-24 border-0 rounded overflow-hidden position-relative"
  >
    <div
      class="hp-credit-card-circle position-absolute top-0 end-0"
      v-bind:style="{
        top: 0,
        right: 0,
        backgroundImage:
          'url(' +
          require('@/assets/img/dasboard/credit-card-bg-circle.svg') +
          ')',
        backgroundSize: 'contain',
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
      }"
    ></div>

    <b-row
      align-h="between"
      class="d-flex flex-column"
      style="min-height: 224px"
    >
      <b-col cols="12">
        <b-row align-h="between">
          <b-col class="hp-flex-none w-auto" style="width: 45px">
            <img
              :src="
                require('@/assets/img/dasboard/' + item.title + '-logo.svg')
              "
              :alt="item.title"
            />
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <span class="hp-p1-body text-black-0">
              **** ****
              {{ item.cardNumber }}
            </span>
          </b-col>
        </b-row>

        <b-row align-h="between" align-v="center" class="mt-24">
          <b-col class="hp-flex-none w-auto">
            <span class="h4 font-weight-medium hp-text-color-black-0">
              {{ item.cardValue }}
            </span>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <img
              :src="require('@/assets/img/dasboard/mastercard-logo.png')"
              alt="Mastercard"
            />
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" class="mt-24">
        <b-row align-v="center" align-h="between" style="margin-bottom: -3px">
          <b-col class="hp-flex-none w-auto">
            <span class="d-block hp-caption font-weight-medium text-black-20">
              Limit
            </span>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <span class="d-block hp-caption font-weight-medium text-black-20">
              %{{ item.progress }}
            </span>
          </b-col>
        </b-row>

        <b-progress
          class="mt-8"
          height="8px"
          :value="item.progress"
        ></b-progress>

        <b-row align-h="between" class="mt-24">
          <b-col class="hp-flex-none w-auto">
            <span class="d-block hp-caption font-weight-medium text-black-10">
              Name on card
            </span>
            <span class="d-block h5 mb-0 font-weight-medium text-black-0">
              {{ item.name }}
            </span>
          </b-col>

          <b-col class="hp-flex-none w-auto text-right">
            <span class="d-block hp-caption font-weight-medium text-black-10">
              Expires
            </span>
            <span class="d-block h5 mb-0 font-weight-medium text-black-0">
              {{ item.expires }}
            </span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BProgress } from "bootstrap-vue";

export default {
  props: ["item"],
  components: {
    BRow,
    BCol,
    BCard,
    BProgress,
  },
};
</script>
