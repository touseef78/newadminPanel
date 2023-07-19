<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Images</h4>

        <p class="hp-p1-body">
          The <code>&lt;b-card&gt;</code> prop <code>img-src</code> places an
          image on the top of the card, and use the <code>img-alt</code> prop to
          specify a string to be placed in the image's
          <code>alt</code> attribute. The image specified by the
          <code>img-src</code> prop will be responsive and will adjust its width
          when the width of the card is changed. <br /><br />
          Alternatively you can manually place images inside
          <code>&lt;b-card&gt;</code> using the sub-component
          <code>&lt;b-card-img&gt;</code>. See the kitchen sink example below
          for usage.
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
        <b-row class="mb-32">
          <b-col col-lg="6">
            <b-card :img-src="cardImg" img-alt="Card image" img-top>
              <p class="hp-p1-body">
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </p>
            </b-card>
          </b-col>

          <b-col col-lg="6">
            <b-card :img-src="cardImg" img-alt="Card image" img-bottom>
              <p class="hp-p1-body">
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </p>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col col-lg="6">
            <b-card
              :img-src="cardImg"
              img-width="50%"
              img-alt="Card image"
              img-left
            >
              <p class="hp-p1-body">
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </p>
            </b-card>
          </b-col>

          <b-col col-lg="6">
            <b-card
              :img-src="cardImg"
              img-width="50%"
              img-alt="Card image"
              img-right
            >
              <p class="hp-p1-body">
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </p>
            </b-card>
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
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

import cardImg from "@/assets/img/card/image-1.png";

import code from "./code";

export default {
  data() {
    return {
      cardImg: cardImg,
      codeText: code.images,
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
