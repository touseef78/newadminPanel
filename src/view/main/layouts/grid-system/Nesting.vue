<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Nesting grids</h4>

        <p class="hp-p1-body">
          To nest your content with the default grid, add a new
          <code>&lt;b-row&gt;</code> and set of
          <code>&lt;b-col&gt;</code> components within an existing
          <code>&lt;b-col&gt;</code> component. Nested rows should include a set
          of columns that add up to 12 or fewer (it is not required that you use
          all 12 available columns).
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <b-row>
          <b-col sm="9">
            <span class="d-block bg-primary text-white rounded p-24">
              Level 1: sm="9"
            </span>
            <b-row class="mt-32">
              <b-col cols="8" sm="6">
                <span class="d-block bg-primary text-white rounded p-24">
                  Level 2: cols="8" sm="6"
                </span>
              </b-col>
              <b-col cols="4" sm="6">
                <span class="d-block bg-primary text-white rounded p-24">
                  Level 2: cols="4" sm="6"
                </span>
              </b-col>
            </b-row>
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
