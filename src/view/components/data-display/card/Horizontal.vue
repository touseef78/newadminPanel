<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Horizontal card layout</h4>

        <p class="hp-p1-body">
          Using a combination of grid components, utility classes and individual
          card sub-components, cards can be made horizontal in a mobile-friendly
          and responsive way.
          <br /><br />
          In the example below, we remove the row grid gutters with the
          <code>no-gutters</code> prop on <code>&lt;b-row&gt;</code> and use
          <code>md</code> props on <code>&lt;b-col&gt;</code> to make the card
          horizontal at the <code>md</code> breakpoint. Class
          <code>rounded-0</code> removes the rounding of the
          <code>&lt;b-card-img&gt;</code> corners while class
          <code>overflow-hidden</code> on <code>&lt;b-card&gt;</code> will
          appropriately clip the image's corners based on the border-radius of
          the card. Further adjustments may be needed depending on your card
          content.
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
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="require('@/assets/img/card/image-1.png')"
                alt="Image"
                class="rounded-0 h-100"
              ></b-card-img>
            </b-col>

            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text class="hp-p1-body">
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
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
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardImg,
  BCardText,
  BButton,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.horizontal,
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
