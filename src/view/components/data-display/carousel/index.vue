<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators." />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <crossfade />
    </b-col>

    <b-col cols="12" class="mb-32">
      <disable />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Crossfade from "./Crossfade.vue";
import Disable from './Disable.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Crossfade,
    Disable,
  },
};
</script>
