<template>
  <b-col cols="12" xl="4" class="hp-print-none">
    <b-card class="border-0 mb-32">
      <b-button variant="primary" block>
        <i class="ri-mail-send-line remix-icon" style="font-size: 16px"></i>
        <span>Send Invoice</span>
      </b-button>

      <b-button variant="outline-primary" block class="mt-16">
        <i class="ri-download-2-line remix-icon" style="font-size: 16px"></i>
        <span>Download</span>
      </b-button>

      <div onclick="window.print()">
        <b-button variant="outline-primary" block class="mt-16">
          <i class="ri-printer-line remix-icon" style="font-size: 16px"></i>
          <span>Print</span>
        </b-button>
      </div>
    </b-card>
  </b-col>
</template>

<script>
import { BCol, BButton, BCard } from "bootstrap-vue";

export default {
  components: {
    BCol,
    BButton,
    BCard,
  },
};
</script>
