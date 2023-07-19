<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Titles, text, and links</h4>

        <p class="hp-p1-body">
          Card titles are adding via the <code>title</code> prop, and sub titles
          are added via the <code>sub-title</code> prop. The title is rendered
          using the sub-component <code>&lt;b-card-title&gt;</code> while the
          Sub Title is rendered using the sub-component
          <code>&lt;b-card-sub-title&gt;</code>. <br /><br />
          With sub-component <code>&lt;b-card-text&gt;</code>, paragraph text
          can be added to the card. The last <code>&lt;b-card-text&gt;</code> in
          the card body will have its bottom margin automatically removed (via
          CSS). Text within <code>&lt;b-card-text&gt;</code> can also be styled
          with the standard HTML tags. <br /><br />
          Links can be added and placed next to each other by adding the
          <code>.card-link</code> class to a <code>&lt;a&gt;</code> tag (or
          <code>&lt;b-link&gt;</code> component).
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
        <b-card title="Card title" sub-title="Card subtitle">
          <p class="hp-p1-body">
            Some quick example text to build on the <em>card title</em> and make
            up the bulk of the card's content.
          </p>

          <p class="hp-p1-body">A second paragraph of text in the card.</p>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
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
import { BRow, BCol, BCard, BButton, BLink } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.titlesTextAndLinks,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BLink,
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
