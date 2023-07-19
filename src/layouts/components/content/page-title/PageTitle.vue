<template>
  <div class="hp-page-title">
    <h1 v-if="title" class="mb-8">{{ title }}</h1>
    <h1 v-else class="mb-8">{{ pageTitle }}</h1>

    <p v-if="desc" class="mb-0 hp-p1-body">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "",
    };
  },
  props: ["title", "desc"],
  watch: {
    $route() {
      this.getRoute();
    },
  },
  methods: {
    getRoute() {
      this.pageTitle = this.$route.meta.title;
    },
  },
  created() {
    this.getRoute();
  },
};
</script>
