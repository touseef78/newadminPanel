<template>
  <b-row>
    <b-col
      cols="6"
      md="4"
      lg="3"
      xl="2"
      :key="index"
      v-for="(flag, index) in propsFlags"
      class="mb-32"
    >
      <b-card class="text-center">
        <b-row>
          <b-col cols="12">
            <i :class="'flag:' + flag.flag"></i>
          </b-col>

          <b-col cols="12">
            <span class="d-block h5 mb-0 mt-6">{{ flag.title }}</span>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  props: ["propsFlags"],
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
