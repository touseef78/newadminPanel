<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Responsive tables</h4>

        <p class="hp-p1-body">
          Responsive tables allow tables to be scrolled horizontally with ease.
          Make any table responsive across all viewports by setting the prop
          <code>responsive</code> to <code>true</code>. Or, pick a maximum
          breakpoint with which to have a responsive table up to by setting the
          prop <code>responsive</code> to one of the breakpoint values:
          <code>sm</code>, <code>md</code>, <code>lg</code>, or <code>xl</code>.
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
        <b-table responsive :items="items"></b-table>
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
import { BRow, BCol, BCard, BButton, BTable } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      items: [
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
          heading4: "table cell",
          heading5: "table cell",
          heading6: "table cell",
          heading7: "table cell",
          heading8: "table cell",
          heading9: "table cell",
          heading10: "table cell",
          heading11: "table cell",
          heading12: "table cell",
          heading13: "table cell",
          heading14: "table cell",
          heading15: "table cell",
          heading16: "table cell",
          heading17: "table cell",
          heading18: "table cell",
          heading19: "table cell",
          heading20: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
          heading4: "table cell",
          heading5: "table cell",
          heading6: "table cell",
          heading7: "table cell",
          heading8: "table cell",
          heading9: "table cell",
          heading10: "table cell",
          heading11: "table cell",
          heading12: "table cell",
          heading13: "table cell",
          heading14: "table cell",
          heading15: "table cell",
          heading16: "table cell",
          heading17: "table cell",
          heading18: "table cell",
          heading19: "table cell",
          heading20: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
          heading4: "table cell",
          heading5: "table cell",
          heading6: "table cell",
          heading7: "table cell",
          heading8: "table cell",
          heading9: "table cell",
          heading10: "table cell",
          heading11: "table cell",
          heading12: "table cell",
          heading13: "table cell",
          heading14: "table cell",
          heading15: "table cell",
          heading16: "table cell",
          heading17: "table cell",
          heading18: "table cell",
          heading19: "table cell",
          heading20: "table cell",
        },
      ],
      codeText: code.responsive,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BTable,
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
