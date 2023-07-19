<template>
  <b-row>
    <b-col
      cols="6"
      md="4"
      lg="3"
      xl="2"
      :key="index"
      v-for="(item, index) in propsCrypto"
      class="mb-32"
    >
      <b-card class="text-center">
        <b-row>
          <b-col cols="12">
            <b-avatar
              :src="require('@/assets/img/crypto/' + item.img + '.png')"
              size="64px"
              class="bg-transparent"
            ></b-avatar>

            <span class="d-block h5 mb-0 mt-6">{{ item.title }}</span>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard, BAvatar } from "bootstrap-vue";

export default {
  props: ["propsCrypto"],
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
  },
};
</script>
