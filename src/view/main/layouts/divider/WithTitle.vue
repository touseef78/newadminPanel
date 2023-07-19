<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Divider with title</h4>

        <p class="hp-p1-body">
          Divider with inner title, set <code>.divider-left</code> and
          <code>.divider-right</code> to align it.
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <p class="hp-text-color-dark-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>

        <div class="divider h5 font-weight-medium">
          <span class="divider-text">Text</span>
        </div>

        <p class="hp-text-color-dark-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>

        <div class="divider divider-left h5 font-weight-medium">
          <span class="divider-text">Left Text</span>
        </div>

        <p class="hp-text-color-dark-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>

        <div class="divider divider-right h5 font-weight-medium">
          <span class="divider-text">Right Text</span>
        </div>

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
