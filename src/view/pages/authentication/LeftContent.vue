<template>
  <b-col cols="12" lg="6" class="bg-primary-4 hp-bg-color-dark-90">
    <b-row class="hp-image-row h-100 px-8 px-sm-16 px-md-0 pb-32 pb-sm-0 pt-32 pt-md-0">
      <b-col cols="12" class="hp-logo-item m-16 m-sm-32 m-md-64 w-auto px-0">
        <!-- <img :src="this.$store.state.themeConfig.theme == 'dark'
          ? require('@/assets/img/logo/logo-vector.svg')
          : require('@/assets/img/logo/logo-vector-blue.svg')
          " alt="Logo" /> -->
      </b-col>

      <b-col cols="12">
        <b-row align-v="center" align-h="center" class="h-100">
          <b-col cols="12" md="10" class="hp-bg-item text-center mb-32 mb-md-0">
            <!-- <img class="m-auto" :src="this.$store.state.themeConfig.theme == 'dark'
              ? require('@/assets/img/pages/authentication/authentication-bg-dark.svg')
              : require('@/assets/img/pages/authentication/authentication-bg.svg')
              " alt="Background Image" /> -->

            <img class="m-auto" :src="this.$store.state.themeConfig.theme == 'dark'
              ? require('@/assets/img/pages/authentication/logo.jpg')
              : require('@/assets/img/pages/authentication/logo.jpg')
              " alt="Background Image" />
          </b-col>

          <b-col cols="12" md="11" lg="9" class="hp-text-item text-center">
            <h2 class="text-primary-1 hp-text-color-dark-0 mx-16 mx-lg-0 mb-16">
              Uber/Bolt Management System 🤞
            </h2>

            <!-- <p class="mb-0 text-black-80 hp-text-color-dark-30">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p> -->
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
  },
};
</script>
