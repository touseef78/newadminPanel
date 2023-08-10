<template>
  <main>
    <div class="hp-bg-color-dark-90 min-vh-100 d-flex">
      <div class="hp-layout hp-layout-horizontal">
        <header-horizontal />

        <div class="hp-layout-content">
          <router-view />
        </div>

        <app-footer />
      </div>
    </div>

    <buy-now />

    <scroll-to-top />
  </main>
</template>

<script>
import HeaderHorizontal from "./components/header/HeaderHorizontal.vue";
import AppFooter from "./components/footer/AppFooter.vue";
import Breadcrumb from "./components/content/breadcrumb/Breadcrumb.vue";
import ScrollToTop from "@/layouts/components/scroll-to-top";
import BuyNow from "@/layouts/components/buy-now";

export default {
  components: {
    HeaderHorizontal,
    AppFooter,
    Breadcrumb,
    ScrollToTop,
    BuyNow,
  },
};
</script>
