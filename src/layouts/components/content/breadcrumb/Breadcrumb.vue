<template>
  <b-breadcrumb>
    <b-breadcrumb-item to="/">Home</b-breadcrumb-item>

    <b-breadcrumb-item
      :to="item.path"
      :key="index"
      v-for="(item, index) in items.breadcrumb"
    >
      {{ item.text }}
    </b-breadcrumb-item>

    <b-breadcrumb-item active>
      {{ activeTitle }}
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue";

export default {
  data() {
    return {
      items: [],
      activeTitle: "",
    };
  },
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
  },
  watch: {
    $route() {
      this.getRoute();
    },
  },
  methods: {
    getRoute() {
      this.items = this.$route.meta;
      this.activeTitle = this.$route.meta.title;
    },
  },
  created() {
    this.getRoute();
  },
};
</script>
