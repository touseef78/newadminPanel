<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Contextual variants</h4>

        <p class="hp-p1-body">
          For proper styling of <code>&lt;b-alert&gt;</code>, use one of the
          four required contextual variants by setting the
          <code>variant</code> prop to one of the following: <code>info</code>,
          <code>success</code>, <code>warning</code> or <code>danger</code>. The
          default is <code>info</code>.
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
        <b-alert show variant="primary">Primary Alert</b-alert>
        <b-alert show variant="secondary">Secondary Alert</b-alert>
        <b-alert show variant="success">Success Alert</b-alert>
        <b-alert show variant="danger">Danger Alert</b-alert>
        <b-alert show variant="warning">Warning Alert</b-alert>
        <b-alert show variant="info">Info Alert</b-alert>
        <b-alert show variant="light">Light Alert</b-alert>
        <b-alert show variant="dark">Dark Alert</b-alert>
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
import { BRow, BCol, BCard, BButton, BAlert } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.variant,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BAlert,
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
