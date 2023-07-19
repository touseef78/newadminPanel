<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Background and border variants</h4>

        <p class="hp-p1-body">
          Cards include their own variant style for quickly changing the
          background-color and of a card via the <code>bg-variant</code> and
          <code>border-variant</code> props. Darker solid variants may require
          setting the prop <code>text-variant</code> to adjust the text color.
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
        <div class="d-flex flex-wrap mx-n8">
          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              bg-variant="primary"
              text-variant="white"
              header="Primary"
              style="max-width: 18rem"
            >
              <b-card-text class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              bg-variant="secondary"
              text-variant="white"
              header="Secondary"
              style="max-width: 18rem"
            >
              <b-card-text class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              bg-variant="success"
              text-variant="white"
              header="Success"
              style="max-width: 18rem"
            >
              <b-card-text class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card bg-variant="info" header="Info" style="max-width: 18rem">
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              bg-variant="warning"
              header="Warning"
              style="max-width: 18rem"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              bg-variant="danger"
              text-variant="white"
              header="Danger"
              style="max-width: 18rem"
            >
              <b-card-text class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card bg-variant="light" header="Light" style="max-width: 18rem">
              <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-card-text>
            </b-card>
          </div>

          <div class="hp-flex-none w-auto px-8 mb-16">
            <b-card
              bg-variant="dark"
              text-variant="white"
              header="Dark"
              style="max-width: 18rem"
            >
              <b-card-text class="text-white">
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
      codeText: code.backgroundVariants,
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
