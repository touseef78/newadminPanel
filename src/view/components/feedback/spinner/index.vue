<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="mb-0 hp-p1-body">
        The <code>&lt;b-spinner&gt;</code> component can be used to show the
        loading state in your projects. They're rendered only with basic HTML
        and CSS as a lightweight Vue functional component. Their appearance,
        alignment, and sizing can be easily customized with a few built-in props
        and/or Bootstrap v4 utility classes.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <border-item />
    </b-col>

    <b-col cols="12" class="mb-32">
      <colors-item />
    </b-col>

    <b-col cols="12" class="mb-32">
      <grow-item />
    </b-col>

    <b-col cols="12" class="mb-32">
      <flex-item />
    </b-col>

    <b-col cols="12" class="mb-32">
      <floats-item />
    </b-col>

    <b-col cols="12" class="mb-32">
      <text-align-item />
    </b-col>

    <b-col cols="12" class="mb-32">
      <size-item />
    </b-col>

    <b-col cols="12" class="mb-32">
      <buttons-item />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import BorderItem from "./Border.vue";
import ColorsItem from "./Colors.vue";
import GrowItem from "./Grow.vue";
import FlexItem from "./Flex.vue";
import FloatsItem from "./Floats.vue";
import TextAlignItem from "./TextAlign.vue";
import SizeItem from "./Size.vue";
import ButtonsItem from "./Buttons.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    BorderItem,
    ColorsItem,
    GrowItem,
    FlexItem,
    FloatsItem,
    TextAlignItem,
    SizeItem,
    ButtonsItem,
  },
};
</script>
