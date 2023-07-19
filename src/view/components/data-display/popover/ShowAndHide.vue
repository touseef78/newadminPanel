<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Programmatically show and hide popover</h4>

        <p class="hp-p1-body">
          You can manually control the visibility of a popover via the syncable
          Boolean <code>show</code> prop. Setting it to <code>true</code> will
          show the popover, while setting it to <code>false</code> will hide the
          popover.
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
        <b-button id="popover-button-sync" variant="primary" class="mb-8 mr-8">
          I have a popover
        </b-button>

        <div class="mt-4">
          <b-button
            variant="outline-primary"
            class="mb-8 mr-8"
            @click="show = !show"
          >
            Toggle Popover
          </b-button>
        </div>

        <b-popover
          :show.sync="show"
          target="popover-button-sync"
          title="Popover"
          placement="top"
        >
          Hello <strong>World!</strong>
        </b-popover>
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
import { BRow, BCol, BCard, BButton, BPopover } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      show: false,
      codeText: code.showAndHide,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BPopover,
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
