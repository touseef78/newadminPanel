<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>

    <customizer />
  </div>
</template>

<script>
const LayoutVertical = () => import("@/layouts/VerticalLayout.vue");
const LayoutHorizontal = () => import("@/layouts/HorizontalLayout.vue");
const LayoutFull = () => import("@/layouts/FullLayout.vue");
import Customizer from "@/layouts/components/customizer";

export default {
  components: {
    LayoutVertical,
    LayoutHorizontal,
    LayoutFull,
    Customizer,
  },
  computed: {
    layout() {
      if (this.$route.meta.layout === "horizontal") return "layout-horizontal";
      if (this.$route.meta.layout === "full") return "layout-full";
      return `layout-${this.contentLayoutType}`;
    },
    contentLayoutType() {
      return this.$store.state.themeConfig.layout;
    },
  },
  mounted() {
    // Vertical Layout
    if (window.location.search == "?vertical=menu") {
      this.$store.state.themeConfig.layout = "vertical";

      document.body.classList.remove("collapsed-active");
      this.$store.state.themeConfig.sidebarCollapsed = false;
      this.$store.state.themeConfig.sidebarCollapseButton = true;
      document.body.classList.remove("header-full");
      document.body.classList.remove("app-layout-bg");
    }

    if (window.location.search == "?vertical=mini") {
      this.$store.state.themeConfig.layout = "vertical";

      document.body.classList.add("collapsed-active");
      this.$store.state.themeConfig.sidebarCollapsed = true;
      this.$store.state.themeConfig.sidebarCollapseButton = true;
      document.body.classList.remove("header-full");
      document.body.classList.remove("app-layout-bg");
    }

    if (window.location.search == "?vertical=collapse") {
      this.$store.state.themeConfig.layout = "vertical";

      this.$store.state.themeConfig.sidebarCollapseButton = false;
      document.body.classList.remove("header-full");
      document.body.classList.remove("app-layout-bg");
    }

    // Horizontal Layout
    if (this.$route.meta.layout === "horizontal") {
      document.body.classList.add("horizontal-active");
    } else {
      document.body.classList.remove("horizontal-active");
    }

    if (window.location.search == "?horizontal=menu") {
      this.$store.state.themeConfig.layout = "horizontal";
      document.body.classList.remove("header-full");
      document.body.classList.remove("app-layout-bg");
      document.body.classList.remove("collapsed-active");
    }

    if (window.location.search == "?horizontal=full") {
      this.$store.state.themeConfig.layout = "horizontal";
      document.body.classList.add("header-full");
      document.body.classList.remove("app-layout-bg");
      document.body.classList.remove("collapsed-active");
    }

    if (window.location.search == "?horizontal=bg") {
      this.$store.state.themeConfig.layout = "horizontal";
      document.body.classList.add("header-full");
      document.body.classList.add("app-layout-bg");
      document.body.classList.remove("collapsed-active");
    }

    // Theme
    if (window.location.search == "?theme=light") {
        this.themeLight(false);
    }

    if (window.location.search == "?theme=dark") {
        this.themeDark(false);
    }

    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "dark") {
        this.themeDark();
      }
      if (localStorage.getItem("theme") == "light") {
        this.themeLight();
      }
    } else {
      if (this.$store.state.themeConfig.theme == "light") {
        this.themeLight(false);
      }
      if (this.$store.state.themeConfig.theme == "dark") {
        this.themeDark(false);
      }
    }

    // Direction
    if (this.$store.state.themeConfig.direction == "ltr") {
      this.$store.state.themeConfig.direction = "ltr";
      document.documentElement.setAttribute("dir", "ltr");
    }

    if (this.$store.state.themeConfig.direction == "rtl") {
      this.$store.state.themeConfig.direction = "rtl";
      document.documentElement.setAttribute("dir", "rtl");
    }

    // Width
    if (this.$store.state.themeConfig.contentWidth == "full") {
      document.querySelector("body").classList.remove("content-width-boxed");
    }

    if (this.$store.state.themeConfig.contentWidth == "boxed") {
      document.querySelector("body").classList.add("content-width-boxed");
    }

    // Layout
    if (this.$store.state.themeConfig.sidebarCollapsed) {
      document.body.classList.add("collapsed-active");
      document.body.classList.remove("header-full");
      document.body.classList.remove("app-layout-bg");
    }

    if (this.$store.state.themeConfig.navigationFull) {
      document.body.classList.add("header-full");
      document.body.classList.remove("app-layout-bg");
      document.body.classList.remove("collapsed-active");
    }

    if (this.$store.state.themeConfig.navigationBg) {
      document.body.classList.add("header-full");
      document.body.classList.add("app-layout-bg");
      document.body.classList.remove("collapsed-active");
    }

    // Direction
    if (window.location.search == "?direction=ltr") {
      this.$store.state.themeConfig.direction = "ltr";
      document.documentElement.setAttribute("dir", "ltr");
    }

    if (window.location.search == "?direction=rtl") {
      this.$store.state.themeConfig.direction = "rtl";
      document.documentElement.setAttribute("dir", "rtl");
    }

    // Width
    if (window.location.search == "?width=full") {
      document.querySelector("body").classList.remove("content-width-boxed");
    }

    if (window.location.search == "?width=boxed") {
      document.querySelector("body").classList.add("content-width-boxed");
    }
  },
  methods: {
    // Theme
    themeLight(check) {
      this.theme = "light";
      this.$store.state.themeConfig.theme = "light";
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      if (check) {
        localStorage.setItem("theme", "light");
      }
    },
    themeDark(check) {
      this.theme = "dark";
      this.$store.state.themeConfig.theme = "dark";
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");

      if (check) {
        localStorage.setItem("theme", "dark");
      }
    },
  },
};
</script>
