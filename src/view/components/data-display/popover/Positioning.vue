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
          <code>lefttop</code>, and <code>leftbottom</code> aligned. Positioning
          is relative to the trigger element.
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
          <b-col
            v-for="placement in placements"
            :key="placement"
            class="hp-flex-none w-auto p-4"
          >
            <b-button :id="`popover-1-${placement}`" variant="primary">{{
              placement
            }}</b-button>

            <b-popover
              :target="`popover-1-${placement}`"
              :placement="placement"
              title="Popover!"
              triggers="hover focus"
              :content="`Placement ${placement}`"
            ></b-popover>
          </b-col>
        </b-row>

        <p class="hp-p1-body mt-3 mb-2">Content via properties or slots</p>

        <b-row class="mx-n4">
          <b-col md="6" class="hp-flex-none w-auto p-4">
            <b-button id="popover-2" variant="primary"
              >Using properties</b-button
            >
            <b-popover
              target="popover-2"
              title="Prop Examples"
              triggers="hover focus"
              content="Embedding content using properties is easy"
            ></b-popover>
          </b-col>

          <b-col md="6" class="hp-flex-none w-auto p-4">
            <b-button id="popover-3" variant="primary">Using slots</b-button>
            <b-popover target="popover-3" triggers="hover focus">
              <template #title>Content via Slots</template>
              Embedding content
              <span class="text-danger">using slots</span> affords you
              <em>greater <strong>control.</strong></em> and basic HTML support.
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
      placements: [
        "topright",
        "top",
        "topleft",
        "bottomright",
        "bottom",
        "bottomleft",
        "righttop",
        "right",
        "lefttop",
        "rightbottom",
        "left",
        "leftbottom",
      ],
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
