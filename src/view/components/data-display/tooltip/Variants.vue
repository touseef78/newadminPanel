<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Variants and custom class</h4>

        <p class="hp-p1-body">
          BootstrapVue's tooltips support contextual color variants via our
          custom CSS, either by using directive modifiers or config options:
          <br /><br />
          Bootstrap default theme variants are: <code>danger</code>,
          <code>warning</code>, <code>success</code>, <code>primary</code>,
          <code>secondary</code>, <code>info</code>, <code>light</code>, and
          <code>dark</code>. You can change or add additional variants via
          Bootstrap SCSS variables <br /><br />
          A custom class can be applied to the tooltip outer wrapper
          <code>&lt;div&gt;</code> by using the <code>customClass</code> option
          property:
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
        <b-button variant="primary" v-b-tooltip.hover.v-primary title="Primary variant" class="mb-8 mr-8">
          Primary
        </b-button>

        <b-button variant="secondary" v-b-tooltip.hover.v-secondary title="Secondary variant" class="mb-8 mr-8">
          Secondary
        </b-button>

        <b-button variant="danger" v-b-tooltip.hover.v-danger title="Danger variant" class="mb-8 mr-8">
          Danger
        </b-button>

        <b-button variant="warning" v-b-tooltip.hover="{ customClass: 'b-tooltip-warning' }" title="Warning variant" class="mb-8 mr-8">
          Warning
        </b-button>
        
        <b-button variant="info" v-b-tooltip.hover="{ variant: 'info' }" title="Info variant" class="mb-8 mr-8">
          Info
        </b-button>
        
        <b-button variant="success" v-b-tooltip.hover="{ variant: 'success' }" title="Success variant" class="mb-8 mr-8">
          Success
        </b-button>
        
        <b-button variant="dark" v-b-tooltip.hover="{ variant: 'dark' }" title="Dark variant" class="mb-8 mr-8">
          Dark
        </b-button>
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
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

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
