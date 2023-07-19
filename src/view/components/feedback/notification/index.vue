<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="mb-0 hp-p1-body">
        Push notifications to your visitors with a
        <code>&lt;b-toast&gt;</code> and <code>&lt;b-toaster&gt;</code>,
        lightweight components which are easily customizable for generating
        alert messages.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <on-demand />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <target />
    </b-col>

    <b-col cols="12" class="mb-32">
      <links />
    </b-col>

    <b-col cols="12" class="mb-32">
      <advanced />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import OnDemand from "./OnDemand.vue";
import Variants from "./Variants.vue";
import Target from "./Target.vue";
import Links from "./Links.vue";
import Advanced from "./Advanced.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    OnDemand,
    Variants,
    Target,
    Links,
    Advanced,
  },
};
</script>
