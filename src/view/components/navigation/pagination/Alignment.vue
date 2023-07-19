<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Alignment</h4>

        <p class="hp-p1-body">
          By default the pagination component is left aligned. Change the
          alignment to <code>center</code>, <code>right</code> (<code
            >right</code
          >
          is an alias for <code>end</code>), or <code>fill</code> by setting the
          prop <code>align</code> to the appropriate value.
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
        <div class="overflow-auto">
          <div>
            <h6>Left alignment (default)</h6>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              class="m-0"
            ></b-pagination>
          </div>

          <div class="mt-16">
            <h6 class="text-center">Center alignment</h6>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              align="center"
              class="m-0"
            ></b-pagination>
          </div>

          <div class="mt-16">
            <h6 class="text-right">Right (end) alignment</h6>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              align="right"
              class="m-0"
            ></b-pagination>
          </div>

          <div class="mt-16">
            <h6 class="text-center">Fill alignment</h6>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              align="fill"
              class="m-0"
            ></b-pagination>
          </div>
        </div>
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
import { BRow, BCol, BCard, BButton, BPagination } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      rows: 100,
      currentPage: 3,
      codeText: code.alignment,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BPagination,
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
