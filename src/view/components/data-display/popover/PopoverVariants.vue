<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Variants and custom class</h4>

        <p class="hp-p1-body">
          BootstrapVue's popovers support contextual color variants via our
          custom CSS, via the <code>variant</code> prop:
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
        <b-row class="mx-n4">
          <b-col class="hp-flex-none w-auto p-4">
            <b-button variant="primary" id="popover-button-variant-primary">
              Button
            </b-button>

            <b-popover
              target="popover-button-variant-primary"
              variant="primary"
              triggers="focus"
            >
              <template #title>Primary</template>
              Primary variant popover
            </b-popover>
          </b-col>
        
          <b-col class="hp-flex-none w-auto p-4">
            <b-button variant="secondary" id="popover-button-variant-secondary">
              Button
            </b-button>

            <b-popover
              target="popover-button-variant-secondary"
              variant="secondary"
              triggers="focus"
            >
              <template #title>Secondary</template>
              Secondary variant popover
            </b-popover>
          </b-col>
        
          <b-col class="hp-flex-none w-auto p-4">
            <b-button variant="danger" id="popover-button-variant-danger">
              Button
            </b-button>

            <b-popover
              target="popover-button-variant-danger"
              variant="danger"
              triggers="focus"
            >
              <template #title>Danger</template>
              Danger variant popover
            </b-popover>
          </b-col>
        
          <b-col class="hp-flex-none w-auto p-4">
            <b-button variant="warning" id="popover-button-variant-warning">
              Button
            </b-button>

            <b-popover
              target="popover-button-variant-warning"
              variant="warning"
              triggers="focus"
            >
              <template #title>Warning</template>
              Warning variant popover
            </b-popover>
          </b-col>
        
          <b-col class="hp-flex-none w-auto p-4">
            <b-button variant="success" id="popover-button-variant-success">
              Button
            </b-button>

            <b-popover
              target="popover-button-variant-success"
              variant="success"
              triggers="focus"
            >
              <template #title>Success</template>
              Success variant popover
            </b-popover>
          </b-col>
        
          <b-col class="hp-flex-none w-auto p-4">
            <b-button variant="info" id="popover-button-variant-info">
              Button
            </b-button>

            <b-popover
              target="popover-button-variant-info"
              variant="info"
              triggers="focus"
            >
              <template #title>Info</template>
              Info variant popover
            </b-popover>
          </b-col>
        </b-row>
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
