<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        desc="Create a widget of tabbable panes of local content. The tabs component is built upon navs and cards internally, and provides full keyboard navigation control of the tabs."
      />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <pills />
    </b-col>

    <b-col cols="12" class="mb-32">
      <fill />
    </b-col>

    <b-col cols="12" class="mb-32">
      <justified />
    </b-col>

    <b-col cols="12" class="mb-32">
      <alignment />
    </b-col>

    <b-col cols="12" class="mb-32">
      <vertical-tabs />
    </b-col>

    <b-col cols="12" class="mb-32">
      <external-controls />
    </b-col>

    <b-col cols="12" class="mb-32">
      <dynamic-tabs />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Pills from "./Pills.vue";
import Fill from "./Fill.vue";
import Justified from "./Justified.vue";
import Alignment from "./Alignment.vue";
import VerticalTabs from "./VerticalTabs.vue";
import ExternalControls from "./ExternalControls.vue";
import DynamicTabs from "./DynamicTabs.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Pills,
    Fill,
    Justified,
    Alignment,
    VerticalTabs,
    ExternalControls,
    DynamicTabs,
  },
};
</script>
