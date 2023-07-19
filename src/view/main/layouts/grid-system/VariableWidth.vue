<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Variable width content</h4>

        <p class="hp-p1-body">
          Use <code>{breakpoint}="auto"</code> props to size columns based on
          the natural width of their content.
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <b-row class="justify-content-md-center mb-32">
          <b-col col lg="2">
            <span class="d-block bg-primary text-white rounded p-24">
              1 of 3
            </span>
          </b-col>
          <b-col cols="12" md="auto">
            <span class="d-block bg-primary text-white rounded p-24">
              Variable width content
            </span>
          </b-col>
          <b-col col lg="2">
            <span class="d-block bg-primary text-white rounded p-24">
              3 of 3
            </span>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <span class="d-block bg-primary text-white rounded p-24">
              1 of 3
            </span>
          </b-col>
          <b-col cols="12" md="auto">
            <span class="d-block bg-primary text-white rounded p-24">
              Variable width content
            </span>
          </b-col>
          <b-col col lg="2">
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
