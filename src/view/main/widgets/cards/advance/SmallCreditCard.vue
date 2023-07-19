<template>
  <div
    class="d-flex justify-content-between flex-column rounded overflow-hidden hp-card-1 p-18"
    :style="{
      backgroundImage: 'url(' + bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'left center'
    }"
  >
    <b-row align-h="between">
      <b-col class="hp-flex-none w-auto">
        <b-row align-v="center">
          <b-col class="hp-flex-none w-auto">
            <img :src="logo" :alt="title" height="25" />
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <span class="ml-12 hp-p1-body text-black-0">{{ title }}</span>
          </b-col>
        </b-row>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <span class="hp-p1-body text-black-0">**** **** {{ number }}</span>
      </b-col>
    </b-row>

    <b-row align-v="center" align-h="between">
      <b-col class="hp-flex-none w-auto">
        <span class="h4 text-black-0">{{ value }}</span>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <img
          :src="require('@/assets/img/dasboard/mastercard-logo.png')"
          alt="Mastercard"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BProgress } from "bootstrap-vue";

export default {
  props: ["logo", "bg", "number", "value", "title"],
  components: {
    BRow,
    BCol,
    BCard,
    BProgress,
  },
};
</script>
