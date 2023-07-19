<template>
  <b-col cols="12">
    <b-row align-v="center" align-h="center">
      <b-col class="hp-flex-none w-auto px-4">
        <b-button
          variant="none"
          class="bg-transparent border-0 hp-text-color-black-0 hp-hover-text-color-primary-2 py-8 px-12 px-sm-16"
        >
          About Us
        </b-button>
      </b-col>

      <b-col class="hp-flex-none w-auto px-4">
        <b-button
          variant="none"
          class="bg-transparent border-0 hp-text-color-black-0 hp-hover-text-color-primary-2 py-8 px-12 px-sm-16"
        >
          Contact
        </b-button>
      </b-col>

      <b-col class="hp-flex-none w-auto px-4">
        <b-button
          variant="none"
          class="bg-transparent border-0 hp-text-color-black-0 hp-hover-text-color-primary-2 py-8 px-12 px-sm-16"
        >
          Help
        </b-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { BRow, BCol, BButton } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
  },
};
</script>
