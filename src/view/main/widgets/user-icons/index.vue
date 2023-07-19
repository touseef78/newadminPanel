<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="Special user icon set for you." />
    </b-col>

    <b-col cols="12">
      <user-icon-item :propsUsers="users" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import UserIconItem from "./UserIconItem.vue";

export default {
  data() {
    return {
      users: [
        {
          img: require("@/assets/img/users/user-1.svg"),
        },
        {
          img: require("@/assets/img/users/user-2.svg"),
        },
        {
          img: require("@/assets/img/users/user-3.svg"),
        },
        {
          img: require("@/assets/img/users/user-4.svg"),
        },
        {
          img: require("@/assets/img/users/user-5.svg"),
        },
        {
          img: require("@/assets/img/users/user-6.svg"),
        },
        {
          img: require("@/assets/img/users/user-7.svg"),
        },
        {
          img: require("@/assets/img/users/user-8.svg"),
        },
        {
          img: require("@/assets/img/users/user-9.svg"),
        },
        {
          img: require("@/assets/img/users/user-10.svg"),
        },
        {
          img: require("@/assets/img/users/user-11.svg"),
        },
        {
          img: require("@/assets/img/users/user-12.svg"),
        },
        {
          img: require("@/assets/img/users/user-13.svg"),
        },
        {
          img: require("@/assets/img/users/user-14.svg"),
        },
        {
          img: require("@/assets/img/users/user-15.svg"),
        },
        {
          img: require("@/assets/img/users/user-16.svg"),
        },
        {
          img: require("@/assets/img/users/user-17.svg"),
        },
        {
          img: require("@/assets/img/users/user-18.svg"),
        },
        {
          img: require("@/assets/img/users/user-19.svg"),
        },
        {
          img: require("@/assets/img/users/user-20.svg"),
        },
        {
          img: require("@/assets/img/users/user-21.svg"),
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    UserIconItem,
  },
};
</script>
