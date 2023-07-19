<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Use the powerful mobile-first flexbox grid (via the
        <code>&lt;b-container&gt;</code>, <code>&lt;b-row&gt;</code>,
        <code>&lt;b-form-row&gt;</code> and
        <code>&lt;b-col&gt;</code> components) to build layouts of all shapes
        and sizes thanks to a twelve column system, five default responsive
        tiers, CSS Sass variables and mixins, and dozens of predefined classes.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variable-width />
    </b-col>

    <b-col cols="12" class="mb-32">
      <stacked />
    </b-col>

    <b-col cols="12" class="mb-32">
      <mix-and-match />
    </b-col>

    <b-col cols="12" class="mb-32">
      <offsetting />
    </b-col>

    <b-col cols="12" class="mb-32">
      <nesting />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import VariableWidth from "./VariableWidth.vue";
import Stacked from "./Stacked.vue";
import MixAndMatch from "./MixAndMatch.vue";
import Nesting from "./Nesting.vue";
import Offsetting from "./Offsetting.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    VariableWidth,
    Stacked,
    MixAndMatch,
    Nesting,
    Offsetting,
  },
};
</script>
