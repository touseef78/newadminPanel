<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <b-row align-h="between" class="mt-n32">
        <b-col class="hp-flex-none w-auto mt-32">
          <breadcrumb />
        </b-col>

        <action-button />
      </b-row>
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />
    </b-col>

    <b-col cols="12" class="mb-32"> </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import ActionButton from "@/layouts/components/content/action-button/ActionButton.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    ActionButton,
  },
};
</script>
