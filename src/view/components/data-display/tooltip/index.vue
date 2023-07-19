<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Easily add tooltips to elements or components via the
        <code>&lt;b-tooltip&gt;</code> component or
        <a
          href="https://bootstrap-vue.org/docs/directives/tooltip"
          target="_blank"
        >
          v-b-tooltip
        </a>
        directive (preferred method).
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <positioning />
    </b-col>

    <b-col cols="12" class="mb-32">
      <triggers />
    </b-col>

    <b-col cols="12" class="mb-32">
      <title-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variants />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Positioning from "./Positioning.vue";
import Triggers from "./Triggers.vue";
import TitleContent from "./TitleContent.vue";
import Variants from "./Variants.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Positioning,
    Triggers,
    TitleContent,
    Variants,
  },
};
</script>
