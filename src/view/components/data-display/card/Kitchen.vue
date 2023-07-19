<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Kitchen sink example</h4>

        <p class="hp-p1-body">
          Mix and match multiple content types to create the card you need, or
          throw everything in there. Shown below are image styles, blocks, text
          styles, and a list group—all wrapped in a fixed-width card.
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
          no-body
          style="max-width: 20rem"
          :img-src="require('@/assets/img/card/image-1.png')"
          img-alt="Image"
          img-top
        >
          <template #header>
            <h4 class="mb-0">Hello World</h4>
          </template>

          <b-card-body>
            <b-card-title>Card Title</b-card-title>
            <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
            <b-card-text class="hp-p1-body">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card-body>

          <b-list-group flush class="hp-p1-body">
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>

          <b-card-body>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </b-card-body>

          <b-card-footer>This is a footer</b-card-footer>

          <b-card-img
            :src="require('@/assets/img/card/image-1.png')"
            alt="Image"
            bottom
          ></b-card-img>
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
  BCardFooter,
  BCardImg,
  BCardTitle,
  BCardSubTitle,
  BCardText,
  BListGroup,
  BListGroupItem,
  BButton,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.kitchen,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardFooter,
    BCardImg,
    BCardTitle,
    BCardSubTitle,
    BCardText,
    BListGroup,
    BListGroupItem,
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
