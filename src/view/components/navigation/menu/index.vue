<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        The component <code>&lt;b-navbar&gt;</code> is a wrapper that positions
        branding, navigation, and other elements into a concise header. It's
        easily extensible and thanks to the
        <code>&lt;b-collapse&gt;</code> component, it can easily integrate
        responsive behaviors.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <text-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <custom />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import TextContent from "./TextContent.vue";
import Custom from "./Custom.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    TextContent,
    Custom,
  },
};
</script>
