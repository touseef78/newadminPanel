<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        ndicate the current page's location within a navigational hierarchy.
        Separators are automatically added in CSS through
        <code>::before</code> and <code>content</code>.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <manually-items />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import ManuallyItems from "./ManuallyItems.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    ManuallyItems,
  },
};
</script>
