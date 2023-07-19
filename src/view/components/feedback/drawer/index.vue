<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Otherwise known as off-canvas or a side drawer, BootstrapVue's custom
        <code>&lt;b-sidebar&gt;</code> component is a fixed-position toggleable
        slide out box, which can be used for navigation, menus, details, etc. It
        can be positioned on either the left (default) or right of the viewport,
        with optional backdrop support.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <placement-sidebar />
    </b-col>

    <b-col cols="12" class="mb-32">
      <hiding />
    </b-col>

    <b-col cols="12" class="mb-32">
      <backdrop />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import PlacementSidebar from "./PlacementSidebar.vue";
import Hiding from "./Hiding.vue";
import Backdrop from "./Backdrop.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    PlacementSidebar,
    Hiding,
    Backdrop,
  },
};
</script>
