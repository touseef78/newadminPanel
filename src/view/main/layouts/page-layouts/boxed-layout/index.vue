<template>
  <analytics-dashboard />
</template>

<script>
import AnalyticsDashboard from "@/view/main/dashboards/analytics";

export default {
  components: {
    AnalyticsDashboard,
  },
  methods: {
    boxed: function () {
      document.querySelector("body").classList.add("content-width-boxed");
    },
  },
  beforeMount() {
    this.boxed();
  },
  beforeRouteLeave(to, from, next) {
    document.querySelector("body").classList.remove("content-width-boxed");
    next();
  },
};
</script>
