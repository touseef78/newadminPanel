<template>
  <b-col class="hp-flex-none w-auto mt-32">
    <b-row>
      <b-col class="hp-flex-none w-auto pr-0">
        <b-button variant="primary" class="btn-ghost">Action</b-button>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <b-button variant="primary" class="btn-primary btn-icon-only">
          <i class="ri-settings-4-line" style="font-size: 16px"></i>
        </b-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { BRow, BCol, BButton } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
  },
};
</script>
