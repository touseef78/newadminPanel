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
      <b-row>
        <invoice />

        <invoice-actions />
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import ActionButton from "@/layouts/components/content/action-button/ActionButton.vue";
import Invoice from "./invoice.vue";
import InvoiceActions from "./invoiceActions.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    ActionButton,
    InvoiceActions,
    Invoice,
  },
};
</script>
