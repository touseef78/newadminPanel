<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="List Groups are a flexible and powerful component for displaying a series of content. List Group items can be modified to support just about any content within. They can also be used as navigation via various props." />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <active />
    </b-col>

    <b-col cols="12" class="mb-32">
      <disabled />
    </b-col>

    <b-col cols="12" class="mb-32">
      <actionable />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variant />
    </b-col>

    <b-col cols="12" class="mb-32">
      <badges />
    </b-col>

    <b-col cols="12" class="mb-32">
      <cards />
    </b-col>

    <b-col cols="12" class="mb-32">
      <horizontal />
    </b-col>

    <b-col cols="12" class="mb-32">
      <custom />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Active from "./Active.vue";
import Disabled from "./Disabled.vue";
import Actionable from './Actionable.vue';
import Variant from './Variant.vue';
import Badges from './Badges.vue';
import Cards from './Cards.vue';
import Horizontal from './Horizontal.vue';
import Custom from './Custom.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Active,
    Disabled,
    Actionable,
    Variant,
    Badges,
    Cards,
    Horizontal,
    Custom,
  },
};
</script>