<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs." />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <slots />
    </b-col>

    <b-col cols="12" class="mb-32">
      <custom-addons />
    </b-col>

    <b-col cols="12" class="mb-32">
      <multiple-inputs />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Slots from './Slots.vue';
import CustomAddons from './CustomAddons.vue';
import MultipleInputs from "./MultipleInputs.vue";
import Sizing from "./Sizing.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Slots,
    CustomAddons,
    MultipleInputs,
    Sizing,
  },
};
</script>
