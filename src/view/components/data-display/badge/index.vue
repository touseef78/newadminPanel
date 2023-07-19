<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="Small and adaptive tag for adding context to just about any content." />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <buttons />
    </b-col>

    <b-col cols="12" class="mb-32">
      <contextual-variations />
    </b-col>

    <b-col cols="12" class="mb-32">
      <pill />
    </b-col>

    <b-col cols="12" class="mb-32">
      <actionable />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Buttons from './Buttons.vue';
import ContextualVariations from './ContextualVariations.vue';
import Pill from './Pill.vue';
import Actionable from './Actionable.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Buttons,
    ContextualVariations,
    Pill,
    Actionable,
  },
};
</script>
