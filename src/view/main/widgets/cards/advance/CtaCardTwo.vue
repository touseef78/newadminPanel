<template>
  <b-card class="hp-card-6">
    <b-row class="row">
      <b-col cols="12" class="text-center">
        <img
          :src="
            this.$store.state.themeConfig.theme == 'dark'
              ? require('@/assets/img/illustrations/growth-dark.svg')
              : require('@/assets/img/illustrations/growth.svg')
          "
          alt="Upgrade Account"
        />

        <h3 class="mt-24 mb-16 mr-4">Upgrade Account</h3>
        <p class="hp-p1-body mb-0">
          5 integrations, 30 team members, <br />
          advanced
          <span
            class="mx-4 text-primary hp-text-color-dark-primary-2 font-weight-medium"
          >
            features
          </span>
          for teams.
        </p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
