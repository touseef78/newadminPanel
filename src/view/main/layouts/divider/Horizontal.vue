<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Horizontal</h4>

        <p class="hp-p1-body">
          Divider is horizontal by default. You can add text within Divider.
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <p class="hp-text-color-dark-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>

        <div class="divider"></div>

        <p class="hp-text-color-dark-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>

        <div class="divider"></div>

        <p class="hp-text-color-dark-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
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
