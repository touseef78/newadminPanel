<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS. They support a number of use cases from user notification to completely custom content and feature a handful of helpful sub-components, sizes, variants, accessibility, and more." />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <tooltips-popovers />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <scrolling />
    </b-col>

    <b-col cols="12" class="mb-32">
      <vertically />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <backdrop />
    </b-col>

    <b-col cols="12" class="mb-32">
      <multiple />
    </b-col>

    <b-col cols="12" class="mb-32">
      <prevent-closing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <confirm />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import TooltipsPopovers from "./TooltipsPopovers.vue";
import Sizing from "./Sizing.vue";
import Scrolling from "./Scrolling.vue";
import Vertically from "./Vertically.vue";
import Variants from "./Variants.vue";
import Backdrop from "./Backdrop.vue";
import Multiple from "./Multiple.vue";
import PreventClosing from "./PreventClosing.vue";
import Confirm from "./Confirm.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    TooltipsPopovers,
    Sizing,
    Scrolling,
    Vertically,
    Variants,
    Backdrop,
    Multiple,
    PreventClosing,
    Confirm,
  },
};
</script>
