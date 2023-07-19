<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Overlay image</h4>

        <p class="hp-p1-body">
          Place the image in the background of the card by setting the boolean
          prop <code>overlay</code>:
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
        <b-card overlay no-body class="overflow-hidden border-0">
          <div
            class="position-absolute w-100 h-100 bg-primary"
            style="top: 0; left: 0; opacity: 0.5"
          ></div>

          <b-card-img
            :src="require('@/assets/img/card/image-2.png')"
            alt="Card Image"
          />

          <b-card-body overlay>
            <h4 class="text-white">Image Overlay</h4>
            <h6 class="text-white">Subtitle</h6>
            <p class="hp-p1-body text-white">
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </p>
          </b-card-body>
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
import { BRow, BCol, BCard, BCardBody, BCardImg, BButton } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.overlay,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardImg,
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
