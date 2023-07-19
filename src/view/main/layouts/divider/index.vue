<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="A divider line separates different content." />
    </b-col>

    <b-col cols="12" class="mb-32">
      <horizontal />
    </b-col>

    <b-col cols="12" class="mb-32">
      <without-heading-style/>
    </b-col>

    <b-col cols="12" class="mb-32">
      <with-title />
    </b-col>

    <b-col cols="12" class="mb-32">
      <vertical />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Horizontal from "./Horizontal.vue";
import WithoutHeadingStyle from './WithoutHeadingStyle.vue';
import WithTitle from './WithTitle.vue';
import Vertical from './Vertical.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Horizontal,
    WithoutHeadingStyle,
    WithTitle,
    Vertical,
  },
};
</script>
