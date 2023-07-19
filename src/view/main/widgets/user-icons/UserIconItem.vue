<template>
  <b-row>
    <b-col
      cols="6"
      md="4"
      lg="3"
      xl="2"
      :key="index"
      v-for="(user, index) in propsUsers"
      class="mb-32"
    >
      <b-card class="text-center">
        <b-row>
          <b-col cols="12">
            <b-avatar :src="user.img" size="64px" class="bg-transparent"></b-avatar>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard, BAvatar } from "bootstrap-vue";

export default {
  props: ["propsUsers"],
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
  },
};
</script>
