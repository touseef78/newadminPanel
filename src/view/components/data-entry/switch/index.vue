<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Switch styling is supported on <code>&lt;b-form-checkbox&gt;</code> and
        <code>&lt;b-form-checkbox-group&gt;</code> components.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <individual />
    </b-col>

    <b-col cols="12" class="mb-32">
      <grouped />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Individual from "./Individual.vue";
import Grouped from './Grouped.vue';
import Sizing from './Sizing.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Individual,
    Grouped,
    Sizing,
  },
};
</script>
