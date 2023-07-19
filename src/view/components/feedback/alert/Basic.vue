<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>

        <p class="hp-p1-body">
          Alerts are available for any length of text, as well as an optional
          dismiss button (and optional auto-dismissing).
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
        <b-alert show>Default Alert</b-alert>

        <b-alert variant="success" show>Success Alert</b-alert>

        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
          Dismissible Alert!

          <template #dismiss>
            <span></span>
          </template>
        </b-alert>

        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="warning"
          @dismissed="dismissCountDown = 0"
          @dismiss-count-down="countDownChanged"
        >
          <p class="mb-0">
            This alert will dismiss after {{ dismissCountDown }} seconds...
          </p>

          <template #dismiss>
            <span></span>
          </template>
        </b-alert>

        <b-button @click="showAlert" variant="primary" class="mr-8 mb-8">
          Show alert with count-down timer
        </b-button>
        <b-button
          @click="showDismissibleAlert = true"
          variant="primary"
          class="mr-8 mb-8"
        >
          Show dismissible alert ({{
            showDismissibleAlert ? "visible" : "hidden"
          }})
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
import { BRow, BCol, BCard, BButton, BAlert } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      codeText: code.basic,
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
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },

    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
