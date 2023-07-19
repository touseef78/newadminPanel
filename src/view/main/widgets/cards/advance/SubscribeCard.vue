<template>
  <b-card class="hp-card-6">
    <b-row class="row">
      <b-col cols="12" class="text-center">
        <img
          :src="
            this.$store.state.themeConfig.theme == 'dark'
              ? require('@/assets/img/illustrations/newsletter-1-dark.svg')
              : require('@/assets/img/illustrations/newsletter-1.svg')
          "
          alt="Upgrade Account"
        />

        <b-form class="mt-36">
          <div class="mb-16">
            <div class="w-100 text-left form-label mb-8">
              <span class="text-danger mr-8">*</span>Email:
            </div>

            <b-form-input
              type="email"
              placeholder="Please enter your email"
            ></b-form-input>
          </div>

          <b-button variant="primary" block>Subscribe</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BForm, BFormInput, BButton } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BForm,
    BFormInput,
    BButton,
  },
};
</script>
