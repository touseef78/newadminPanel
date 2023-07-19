<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <p class="hp-p1-body">
          Programmatic control can also be affected by submitting
          <code>'open'</code> and <code>'close'</code> events to the popover by
          reference.
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
        <b-button id="popover-button-event" variant="primary" class="mb-8 mr-8">
          I have a popover
        </b-button>

        <div class="mt-4">
          <b-button variant="outline-primary" class="mb-8 mr-8" @click="onOpen">
            Open
          </b-button>

          <b-button variant="outline-primary" class="mb-8 mr-8" @click="onClose">
            Close
          </b-button>
        </div>

        <b-popover ref="popover" target="popover-button-event" title="Popover">
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
      codeText: code.openAndClose,
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
    onOpen() {
      this.$refs.popover.$emit("open");
    },
    onClose() {
      this.$refs.popover.$emit("close");
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
