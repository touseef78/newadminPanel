<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12">
        <h4>Mix and match</h4>

        <p class="hp-p1-body">
          Don't want your columns to simply stack in some grid tiers? Use a
          combination of different props for each tier as needed. See the
          example below for a better idea of how it all works.
        </p>
      </b-col>

      <b-col cols="12" class="mt-16">
        <b-row class="mb-32">
          <b-col cols="12" md="8">
            <span class="d-block bg-primary text-white rounded p-24">
              cols="12" md="8"
            </span>
          </b-col>
          <b-col cols="6" md="4">
            <span class="d-block bg-primary text-white rounded p-24">
              cols="6" md="4"
            </span>
          </b-col>
        </b-row>

        <b-row class="mb-32">
          <b-col cols="6" md="4">
            <span class="d-block bg-primary text-white rounded p-24">
              cols="6" md="4"
            </span>
          </b-col>
          <b-col cols="6" md="4">
            <span class="d-block bg-primary text-white rounded p-24">
              cols="6" md="4"
            </span>
          </b-col>
          <b-col cols="6" md="4">
            <span class="d-block bg-primary text-white rounded p-24">
              cols="6" md="4"
            </span>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <span class="d-block bg-primary text-white rounded p-24">
              cols="6"
            </span>
          </b-col>
          <b-col cols="6">
            <span class="d-block bg-primary text-white rounded p-24">
              cols="6"
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
