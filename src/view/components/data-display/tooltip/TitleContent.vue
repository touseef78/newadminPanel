<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Title content</h4>

        <p class="hp-p1-body">
          There are several options for providing the title of a tooltip.
          <br />
          By default, tooltip will use the <code>title</code> attribute of the
          element as the tooltip content. The title can also be passed as an
          object to <code>v-b-tooltip</code> in the form of
          <br />
          <br />
          If your title content has basic HTML markup, then you will also need
          to set the <code>html</code> property to true, or use the directive
          modifier <code>html</code>
          <br />
          <br />
          Title can also be a function reference, which is called each time the
          tooltip is opened. To make the title returned by a function reactive
          while open, set the title to a new function reference whenever the
          content changes.
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
          v-b-tooltip.hover
          :title="'Tip from title attribute ' + date"
          variant="primary"
          class="mb-8 mr-8"
        >
          Title
        </b-button>

        <b-button
          v-b-tooltip.hover="'String Tip'"
          variant="primary"
          class="mb-8 mr-8"
        >
          String
        </b-button>

        <b-button
          v-b-tooltip.hover.html="tipData"
          variant="primary"
          class="mb-8 mr-8"
        >
          Data
        </b-button>

        <b-button
          v-b-tooltip.hover.html="tipMethod"
          variant="primary"
          class="mb-8 mr-8"
        >
          Method
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
      tipData: { title: "Tooltip <em>Message</em>" },
      date: new Date(),
      timer: null,
      codeText: code.titleContent,
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
  mounted() {
    this.timer = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    tipMethod() {
      // Note this is called each time the tooltip is first opened.
      return "<strong>" + new Date() + "</strong>";
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
