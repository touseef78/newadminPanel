<template>
  <b-col cols="12">
    <b-row>
      <b-col
        cols="12"
        md="6"
        xl="4"
        :key="index"
        v-for="(item, index) in this.data"
        class="mb-32"
      >
        <b-card class="border-0" body-class="hp-knowledge-basic-card text-center">
          <img :src="item.img" :alt="item.title" />

          <h4>{{ item.title }}</h4>

          <p class="hp-p1-body hp-mb-0">{{ item.desc }}</p>
        </b-card>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  props: ["data"],
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
