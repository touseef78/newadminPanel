<template>
</template>

<script>
import {
  BCol,
  BBadge,
  BButton,
  BLink,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";

export default {
  data() {
    return {
      path: "",
    };
  },
  components: {
    BCol,
    BBadge,
    BButton,
    BLink,
    BDropdown,
    BDropdownItem,
  },
  watch: {
    $route() {
      this.getRoute();
    },
  },
  methods: {
    getRoute() {
      this.path = this.$route.path;
    },
  },
  created() {
    this.getRoute();
  },
};
</script>
