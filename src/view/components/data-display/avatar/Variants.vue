<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Variants</h4>

        <p class="hp-p1-body">
          Use the <code>variant</code> prop to specify one of Bootstrap theme
          variant colors. The default variant is <code>secondary</code>.
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
        <b-avatar class="mb-8 mr-8 hp-bg-dark-secondary" variant="secondary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8 hp-bg-dark-primary" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8 hp-bg-dark-90" variant="dark">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" variant="light">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8 hp-bg-dark-success hp-text-color-dark-0" variant="success">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8 hp-bg-dark-danger" variant="danger">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8 hp-bg-dark-warning hp-text-color-dark-0" variant="warning">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8 hp-bg-dark-info hp-text-color-dark-0" variant="info">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
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
import { BRow, BCol, BCard, BButton, BAvatar } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.variants,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BAvatar,
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
