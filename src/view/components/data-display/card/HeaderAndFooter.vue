<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Header and footer</h4>

        <p class="hp-p1-body">
          Add an optional header and/or footer within a card via the
          <code>header</code>/<code>footer</code> props or named slots. You can
          control the wrapper element tags used by setting the
          <code>header-tag</code> and <code>footer-tag</code> props (both
          default is <code>div</code>)
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
        <b-card-group deck>
          <b-card
            header="featured"
            header-tag="header"
            footer="Card Footer"
            footer-tag="footer"
            title="Title"
          >
            <p class="hp-p1-body">Header and footers using props.</p>
            
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>

          <b-card title="Title" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0">Header Slot</h6>
            </template>

            <p class="hp-p1-body">Header and footers using slots.</p>
           
            <b-button href="#" variant="primary">Go somewhere</b-button>
           
            <template #footer>
              <em>Footer Slot</em>
            </template>
          </b-card>
        </b-card-group>
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
import { BRow, BCol, BCard, BCardGroup, BButton } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.headerAndFooter,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardGroup,
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
