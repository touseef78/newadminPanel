<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4 class="mb-0">Bordered</h4>
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
        <div class="d-flex flex-wrap mx-n8">
          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              border-variant="primary"
              header="Primary"
              header-bg-variant="primary"
              header-text-variant="white"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              border-variant="secondary"
              header="Secondary"
              header-bg-variant="secondary"
              header-text-variant="white"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              border-variant="success"
              header="Success"
              header-bg-variant="success"
              header-text-variant="white"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              border-variant="info"
              header="Info"
              header-bg-variant="info"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              border-variant="warning"
              header="Warning"
              header-bg-variant="warning"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              border-variant="danger"
              header="Danger"
              header-bg-variant="danger"
              header-text-variant="white"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              border-variant="light"
              header="Light"
              header-bg-variant="light"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              border-variant="dark"
              header="Dark"
              header-bg-variant="dark"
              header-text-variant="white"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
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
import { BRow, BCol, BCard, BCardText, BButton } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.borderVariants,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
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
