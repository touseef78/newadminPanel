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
        <b-card body-class="hp-knowledge-basic-card">
          <h4>{{ item.title }}</h4>

          <p :key="index" v-for="(item, index) in item.list" class="mb-4">
            <a href="#">{{ item }}</a>
          </p>
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
