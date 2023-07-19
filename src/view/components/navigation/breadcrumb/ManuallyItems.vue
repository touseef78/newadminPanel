<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Manually placed items</h4>

        <p class="hp-p1-body">
          You may also manually place individual
          <code>&lt;b-breadcrumb-item&gt;</code> child components in the default
          slot of the <code>&lt;b-breadcrumb&gt;</code> component, as an
          alternative to using the <code>items</code> prop, for greater control
          over the content of each item:
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
        <b-breadcrumb>
          <b-breadcrumb-item href="#home">Home</b-breadcrumb-item>
          <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
          <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
          <b-breadcrumb-item active>Baz</b-breadcrumb-item>
        </b-breadcrumb>
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
  BBreadcrumb,
  BBreadcrumbItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.manually,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BBreadcrumb,
    BBreadcrumbItem,
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
