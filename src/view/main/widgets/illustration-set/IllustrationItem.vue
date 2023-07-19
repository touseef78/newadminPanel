<template>
  <b-row>
    <b-col
      cols="12"
      md="6"
      xl="3"
      :key="index"
      v-for="(item, index) in propsIllustrations"
      class="mb-32"
    >
      <b-card class="text-center">
        <img
          v-if="$store.state.themeConfig.theme == 'dark'"
          class="mx-auto"
          :src="item.imgDark"
          :alt="item.title"
          height="180"
        />
        <img
          v-else
          class="mx-auto"
          :src="item.img"
          :alt="item.title"
          height="180"
        />
        <span class="d-block h5 mb-0 mt-6">{{ item.title }}</span>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  props: ["propsIllustrations"],
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
