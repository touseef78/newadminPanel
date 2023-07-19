<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>

        <p class="hp-p1-body">
          Cards are built with as little markup and styles as possible, but
          still manage to deliver a ton of control and customization. Built with
          flexbox, they offer easy alignment and mix well with other components.
          <br /><br />
          <code>&lt;b-card&gt;</code> has no fixed width to start, so they'll
          naturally fill the full width of its parent element. This is easily
          customized via styles or standard Bootstrap v4 sizing classes.
          <br /><br />
          Change the default <code>div</code> root tag to any other HTML element
          by specifying via the <code>tag</code> prop
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
        <b-card
          title="Card Title"
          :img-src="cardImg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
        >
          <p class="hp-p1-body">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <b-button href="#" variant="primary">Go somewhere</b-button>
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
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

import cardImg from "@/assets/img/card/image-1.png";
import code from "./code";

export default {
  data() {
    return {
      cardImg: cardImg,
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
