<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Stacked to horizontal</h4>

        <p class="hp-p1-body">
          Using a single set of <code>sm="*"</code> or <code>sm</code> (boolean
          for equal width @sm) props, you can create a basic grid system that
          starts out stacked on extra small devices before becoming horizontal
          on desktop (medium) devices.
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <b-row class="mb-32">
          <b-col sm="8">
            <span class="d-block bg-primary text-white rounded p-24">
              col-sm-8
            </span>
          </b-col>
          <b-col sm="4">
            <span class="d-block bg-primary text-white rounded p-24">
              col-sm-4
            </span>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm>
            <span class="d-block bg-primary text-white rounded p-24">
              col-sm
            </span>
          </b-col>
          <b-col sm>
            <span class="d-block bg-primary text-white rounded p-24">
              col-sm
            </span>
          </b-col>
          <b-col sm>
            <span class="d-block bg-primary text-white rounded p-24">
              col-sm
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
