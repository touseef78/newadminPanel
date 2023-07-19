<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        desc="Use our custom progress component for displaying simple or complex progress bars, featuring support for horizontally stacked bars, animated backgrounds, and text labels."
      />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <labels />
    </b-col>

    <b-col cols="12" class="mb-32">
      <custom-label />
    </b-col>

    <b-col cols="12" class="mb-32">
      <width />
    </b-col>

    <b-col cols="12" class="mb-32">
      <height />
    </b-col>

    <b-col cols="12" class="mb-32">
      <solid-background-color />
    </b-col>

    <b-col cols="12" class="mb-32">
      <striped-backgrounds />
    </b-col>

    <b-col cols="12" class="mb-32">
      <animated-backgrounds />
    </b-col>

    <b-col cols="12" class="mb-32">
      <multiple-bars />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Labels from "./Labels.vue";
import CustomLabel from "./CustomLabel.vue";
import Width from "./Width.vue";
import Height from "./Height.vue";
import SolidBackgroundColor from "./SolidBackgroundColor.vue";
import StripedBackgrounds from "./StripedBackgrounds.vue";
import AnimatedBackgrounds from "./AnimatedBackgrounds.vue";
import MultipleBars from "./MultipleBars.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Labels,
    CustomLabel,
    Width,
    Height,
    SolidBackgroundColor,
    StripedBackgrounds,
    AnimatedBackgrounds,
    MultipleBars,
  },
};
</script>
