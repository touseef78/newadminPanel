<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Color of links within alerts</h4>

        <p class="hp-p1-body">
          Use the <code>.alert-link</code> utility CSS class to quickly provide
          matching colored links within any alert. Use on
          <code>&lt;a&gt;</code> or <code>&lt;b-link&gt;</code>.
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
        <b-alert show variant="primary"
          ><a href="#" class="alert-link">Primary Alert</a></b-alert
        >
        <b-alert show variant="secondary"
          ><a href="#" class="alert-link">Secondary Alert</a></b-alert
        >
        <b-alert show variant="success"
          ><a href="#" class="alert-link">Success Alert</a></b-alert
        >
        <b-alert show variant="danger"
          ><a href="#" class="alert-link">Danger Alert</a></b-alert
        >
        <b-alert show variant="warning"
          ><a href="#" class="alert-link">Warning Alert</a></b-alert
        >
        <b-alert show variant="info"
          ><a href="#" class="alert-link">Info Alert</a></b-alert
        >
        <b-alert show variant="light"
          ><a href="#" class="alert-link">Light Alert</a></b-alert
        >
        <b-alert show variant="dark"
          ><a href="#" class="alert-link">Dark Alert</a></b-alert
        >
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
      codeText: code.links,
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
