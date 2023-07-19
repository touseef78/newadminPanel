<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        This is base of Yoda UI Style with typography and colors.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <typography />
    </b-col>

    <b-col cols="12" class="mb-32">
      <color-guide />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Typography from "./Typography.vue";
import ColorGuide from './ColorGuide.vue';

export default {
  components: {
    BRow,
    BCol,
    BCard,
    Breadcrumb,
    PageTitle,
    Typography,
    ColorGuide,
  },
};
</script>
