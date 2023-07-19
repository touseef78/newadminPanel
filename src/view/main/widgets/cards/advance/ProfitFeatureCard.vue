<template>
  <b-card>
    <b-row>
      <b-col class="hp-flex-none w-auto">
        <b-avatar class="bg-danger-4 hp-bg-color-dark-danger" size="48px">
          <i
            class="iconly-Light-Discount text-danger"
            style="font-size: 24px"
          ></i>
        </b-avatar>
      </b-col>

      <b-col class="pl-0">
        <h3 class="mb-4 mt-8">
          $ 1,32<span class="hp-badge-text ml-8 text-danger">+3%</span>
        </h3>

        <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">
          Gross Profit
        </p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BAvatar } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
  },
};
</script>
