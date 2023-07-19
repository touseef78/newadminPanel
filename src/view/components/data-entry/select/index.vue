<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Bootstrap custom <code>&lt;select&gt;</code> using custom styles.
        Optionally specify options based on an array, array of objects, or an
        object.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <manually />
    </b-col>

    <b-col cols="12" class="mb-32">
      <first />
    </b-col>

    <b-col cols="12" class="mb-32">
      <changing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <single-mode />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <multiple />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Manually from './Manually.vue';
import First from './First.vue';
import Changing from './Changing.vue';
import SingleMode from './SingleMode.vue';
import Sizing from './Sizing.vue';
import Multiple from './Multiple.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Manually,
    First,
    Changing,
    SingleMode,
    Sizing,
    Multiple,
  },
};
</script>