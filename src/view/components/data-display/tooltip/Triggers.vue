<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Triggers</h4>

        <p class="hp-p1-body">
          Tooltips can be triggered (opened/closed) via any combination of
          <code>click, hover</code> and <code>focus</code>. The default trigger
          is <code>hover focus</code>. Or a trigger of manual can be specified,
          where the popover can only be opened or closed
          <a
            href="https://bootstrap-vue.org/docs/directives/tooltip#hiding-and-showing-tooltips-via-root-events"
            target="_blank"
            ><strong>programmatically</strong></a
          >. <br /><br />
          If a tooltip has more than one trigger, then all triggers must be
          cleared before the tooltip will close. I.e. if a tooltip has the
          trigger <code>focus click</code>, and it was opened by
          <code>focus</code>, and the user then clicks the trigger element, they
          must click it again <strong>and</strong> move focus to close the
          tooltip.
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
        <b-button
          v-b-tooltip="'Tooltip!'"
          variant="primary"
          class="mb-8 mr-8"
        >
          Hover + Focus
        </b-button>
        
        <b-button
          v-b-tooltip.hover="'Tooltip!'"
          variant="primary"
          class="mb-8 mr-8"
        >
          Hover
        </b-button>
        
        <b-button
          v-b-tooltip.click="'Tooltip!'"
          variant="primary"
          class="mb-8 mr-8"
        >
          Click
        </b-button>
        
        <b-button
          v-b-tooltip.focus="'Tooltip!'"
          variant="primary"
          class="mb-8 mr-8"
        >
          Focus
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
      codeText: code.triggers,
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
