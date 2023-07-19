<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Offsetting columns</h4>

        <p class="hp-p1-body">
          You can offset grid columns in two ways: our responsive
          <code>offset-*</code> props or the margin utility classes. Grid
          <code>offset-*</code> props are sized to match columns while margins
          utility classes are more useful for quick layouts where the width of
          the offset is variable.
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <b-row class="mb-32">
          <b-col md="4">
            <span class="d-block bg-primary text-white rounded p-24">
              md="4"
            </span>
          </b-col>
          <b-col md="4" offset-md="4">
            <span class="d-block bg-primary text-white rounded p-24">
              md="4" offset-md="4"
            </span>
          </b-col>
        </b-row>

        <b-row class="mb-32">
          <b-col md="3" offset-md="3">
            <span class="d-block bg-primary text-white rounded p-24">
              md="3" offset-md="3"
            </span>
          </b-col>
          <b-col md="3" offset-md="3">
            <span class="d-block bg-primary text-white rounded p-24">
              md="3" offset-md="3"
            </span>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6" offset-md="3">
            <span class="d-block bg-primary text-white rounded p-24">
              md="6" offset-md="3"
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
