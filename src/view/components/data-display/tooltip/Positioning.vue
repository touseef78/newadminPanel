<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Positioning</h4>

        <p class="hp-p1-body">
          Twelve options are available for positioning: <code>top</code>,
          <code>topleft</code>, <code>topright</code>, <code>right</code>,
          <code>righttop</code>, <code>rightbottom</code>, <code>bottom</code>,
          <code>bottomleft</code>, <code>bottomright</code>, <code>left</code>,
          <code>lefttop</code>, and <code>leftbottom</code> aligned. The default
          position is <code>top</code>. Positioning is relative to the trigger
          element.
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
        <b-button v-b-tooltip.hover.top="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Top
        </b-button>
        <b-button v-b-tooltip.hover.right="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Right
        </b-button>
        <b-button v-b-tooltip.hover.left="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Left
        </b-button>
        <b-button v-b-tooltip.hover.bottom="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Bottom
        </b-button>
        <b-button v-b-tooltip.hover.topright="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Top right
        </b-button>
        <b-button v-b-tooltip.hover.topleft="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Top left
        </b-button>
        <b-button v-b-tooltip.hover.bottomright="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Bottom right
        </b-button>
        <b-button v-b-tooltip.hover.bottomleft="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Bottom left
        </b-button>
        <b-button v-b-tooltip.hover.lefttop="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Left top
        </b-button>
        <b-button v-b-tooltip.hover.leftbottom="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Left bottom
        </b-button>
        <b-button v-b-tooltip.hover.righttop="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Right top
        </b-button>
        <b-button v-b-tooltip.hover.rightbottom="'Tooltip!'" variant="primary" class="mb-8 mr-8">
          Right bottom
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
      codeText: code.positioning,
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
