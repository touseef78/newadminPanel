<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>

        <p class="hp-p1-body">Use <code>&lt;b-collapse&gt;</code> components</p>
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
        <b-button v-b-toggle.collapse-1 variant="primary">
          Toggle Collapse
        </b-button>

        <b-collapse id="collapse-1">
          <b-card class="mt-16">
            <p class="hp-p1-body card-text">Collapse contents Here</p>

            <b-button variant="primary" v-b-toggle.collapse-1-inner size="sm">
              Toggle Inner Collapse
            </b-button>

            <b-collapse id="collapse-1-inner">
              <b-card class="mt-16">
                <p class="hp-p1-body mb-0">Hello!</p>
              </b-card>
            </b-collapse>
          </b-card>
        </b-collapse>
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
import { BRow, BCol, BCard, BButton, BCollapse } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.basic,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BCollapse,
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
