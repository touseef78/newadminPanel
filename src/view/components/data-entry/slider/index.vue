<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Inputs with type <code>range</code> render using Bootstrap v4's
        <code>.custom-range</code> class. The track (the background) and thumb
        (the value) are both styled to appear the same across browsers.
        <br /><br />
        Range inputs have implicit values for <code>min</code> and
        <code>max</code> of <code>0</code> and <code>100</code> respectively.
        You may specify new values for those using the <code>min</code> and
        <code>max</code>
        props.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <step />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Step from "./Step.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Step,
  },
};
</script>
