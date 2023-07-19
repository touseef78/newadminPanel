<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Turn a group of <code>&lt;b-collapse&gt;</code> components into an
        <code>accordion</code> by supplying an accordion group identifier via
        the accordion prop. Note that only one collapse in an accordion group
        can be open at a time.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
  },
};
</script>
