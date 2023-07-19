<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Vertical</h4>

        <p class="hp-p1-body">
          Use <code>.divider-vertical</code> make it vertical.
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <span class="hp-text-color-dark-0">Text</span>
        <div class="divider divider-vertical"></div>
        <a href="#">Link</a>
        <div class="divider divider-vertical"></div>
        <a href="#">Link</a>
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
