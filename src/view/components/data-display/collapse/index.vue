<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Easily toggle visibility of almost any content on your pages in a
        vertically collapsing container. Includes support for making accordions.
        Visibility can be easily toggled with our
        <a href="https://bootstrap-vue.org/docs/directives/toggle" target="_blank"><strong>v-b-toggle directive</strong></a
        >, or via <code>v-model</code>.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <visibility />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Visibility from './Visibility.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Visibility,
  },
};
</script>
