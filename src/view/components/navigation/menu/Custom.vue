<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Custom navbar toggle</h4>

        <p class="hp-p1-body">
          <code>&lt;b-navbar-toggle&gt;</code> renders the default Bootstrap v4
          hamburger (which is a background SVG image). You can supply your own
          content (such as an icon) via the optionally scoped default slot. The
          default slot scope contains the property <code>expanded</code>, which
          will be <code>true</code> when the collapse is expanded, or
          <code>false</code> when the collapse is collapsed. <br /><br />
          Note that the <code>expanded</code> scope property only works when
          supplying the <code>target</code> prop as a <code>string</code>, and
          not an <code>array</code>.
        </p>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <b-button
          @click="codeClick()"
          variant="text"
          class="btn-icon-only show-code-btn"
        >
          <i
            class="ri-code-s-slash-line hp-text-color-black-80 hp-text-color-dark-30 lh-1"
            style="font-size: 16px"
          ></i>
        </b-button>
      </b-col>
    </b-row>

    <b-row>
      <div class="col-12 mt-16">
        <b-navbar toggleable type="dark" variant="dark" class="rounded hp-bg-dark-85">
          <b-navbar-brand href="#">Yoda</b-navbar-brand>

          <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-white">
              <b-nav-item href="#">Link 1</b-nav-item>
              <b-nav-item href="#">Link 2</b-nav-item>
              <b-nav-item href="#" disabled class="text-black-80">Disabled</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <div
        v-if="codeActive"
        class="col-12 mt-24 hljs-container"
        :class="{ active: codeActiveClass }"
      >
        <pre v-highlightjs>
          <code class="hljs html">
            {{ codeText }}
          </code>
        </pre>
      </div>
    </b-row>
  </b-card>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BButton,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
  BNavItem,
  BCollapse,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.custom,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbarNav,
    BNavItem,
    BCollapse,
  },
  methods: {
    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
