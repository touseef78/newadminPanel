<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4 class="mb-0">Dynamic tabs + tabs-end slot</h4>
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
        <b-card no-body class="overflow-hidden">
          <b-tabs card class="mt-n16">
            <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
              <p class="hp-p1-body">Tab contents {{ i }}</p>

              <b-button
                size="sm"
                variant="danger"
                class="float-right mb-16"
                @click="closeTab(i)"
              >
                Close tab
              </b-button>
            </b-tab>

            <template #tabs-end>
              <b-nav-item role="presentation" @click.prevent="newTab" href="#">
                <i class="ri-add-line" style="font-size: 16px;"></i>
              </b-nav-item>
            </template>

            <template #empty>
              <div class="text-center text-muted hp-p1-body">
                There are no open tabs<br />
                Open a new tab using the <b>+</b> button above.
              </div>
            </template>
          </b-tabs>
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
import { BRow, BCol, BCard, BButton, BTabs, BTab, BNavItem } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      tabs: [],
      tabCounter: 0,
      codeText: code.dynamicTabs,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BTabs,
    BTab,
    BNavItem,
  },
  methods: {
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    newTab() {
      this.tabs.push(this.tabCounter++);
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
