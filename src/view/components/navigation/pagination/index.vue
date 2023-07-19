<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Quick first, previous, next, last, and page buttons for pagination
        control of another component (such as <code>&lt;b-table&gt;</code> or
        lists).
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <button-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <goto />
    </b-col>

    <b-col cols="12" class="mb-32">
      <size />
    </b-col>

    <b-col cols="12" class="mb-32">
      <pill />
    </b-col>

    <b-col cols="12" class="mb-32">
      <alignment />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import ButtonContent from "./ButtonContent.vue";
import Goto from "./Goto.vue";
import Size from "./Size.vue";
import Pill from "./Pill.vue";
import Alignment from "./Alignment.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    ButtonContent,
    Goto,
    Size,
    Pill,
    Alignment,
  },
};
</script>
