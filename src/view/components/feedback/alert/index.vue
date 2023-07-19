<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        desc="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
      />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variant />
    </b-col>

    <b-col cols="12" class="mb-32">
      <additional-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <links />
    </b-col>

    <b-col cols="12" class="mb-32">
      <dismissible />
    </b-col>

    <b-col cols="12" class="mb-32">
      <auto-dismissing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <fading />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Variant from "./Variant.vue";
import AdditionalContent from "./AdditionalContent.vue";
import Links from "./Links.vue";
import Dismissible from "./Dismissible.vue";
import AutoDismissing from "./AutoDismissing.vue";
import Fading from "./Fading.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Variant,
    AdditionalContent,
    Links,
    Dismissible,
    AutoDismissing,
    Fading,
  },
};
</script>
