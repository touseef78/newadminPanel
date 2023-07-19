<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4 class="mb-0">External controls</h4>
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
        <b-card no-body class="overflow-hidden">
          <b-tabs v-model="tabIndex" small card class="mt-n16">
            <b-tab title="General">
              <p class="hp-p1-body">I'm the first fading tab</p>
            </b-tab>
            <b-tab title="Edit profile">
              <p class="hp-p1-body">I'm the second tab</p>

              <b-card class="mt-8">
                <p class="hp-p1-body">I'm the card in tab</p>
              </b-card>
            </b-tab>
            <b-tab title="Premium Plan" disabled>
              <p class="hp-p1-body">Sibzamini!</p>
            </b-tab>
            <b-tab title="Info">
              <p class="hp-p1-body">I'm the last tab</p>
            </b-tab>
          </b-tabs>
        </b-card>

        <div class="text-center">
          <b-button-group class="mt-16">
            <b-button variant="primary" @click="tabIndex--">Previous</b-button>
            <b-button variant="primary" @click="tabIndex++">Next</b-button>
          </b-button-group>

          <div class="text-muted hp-text-color-dark-0 mt-8">Current Tab: {{ tabIndex }}</div>
        </div>
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
import { BRow, BCol, BCard, BButton, BButtonGroup, BTabs, BTab } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      tabIndex: 1,
      codeText: code.externalControls,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BButtonGroup,
    BTabs,
    BTab,
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
