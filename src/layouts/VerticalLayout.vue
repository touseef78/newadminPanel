<template>
  <main>
    <div class="hp-bg-color-dark-90 min-vh-100 d-flex">
      <sidebar />

      <div class="hp-main-layout">
        <app-header />

        <div class="hp-main-layout-content">
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
import Sidebar from "./components/menu/Sidebar.vue";
import AppHeader from "./components/header/index.vue";
import AppFooter from "./components/footer/AppFooter.vue";
import Breadcrumb from "./components/content/breadcrumb/Breadcrumb.vue";
import ScrollToTop from "@/layouts/components/scroll-to-top";
import BuyNow from "@/layouts/components/buy-now";

export default {
  components: {
    Sidebar,
    AppHeader,
    AppFooter,
    Breadcrumb,
    ScrollToTop,
    BuyNow,
  },
};
</script>
