<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>How it works</h4>

        <p class="hp-p1-body">
          Bootstrap's grid system uses a series of containers, rows, and columns
          to layout and align content. It's built with flexbox and is fully
          responsive. Below is an example and an in-depth look at how the grid
          comes together.
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <b-row>
          <b-col>
            <span class="d-block bg-primary text-white rounded p-24">
              1 of 3
            </span>
          </b-col>
          <b-col>
            <span class="d-block bg-primary text-white rounded p-24">
              2 of 3
            </span>
          </b-col>
          <b-col>
            <span class="d-block bg-primary text-white rounded p-24">
              3 of 3
            </span>
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
