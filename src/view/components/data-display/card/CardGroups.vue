<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Card groups</h4>

        <p class="hp-p1-body">
          In addition to styling the content within cards, BootstrapVue includes
          a <code>&lt;b-card-group&gt;</code> component for laying out series of
          cards. For the time being, these layout options are not yet
          responsive. <br /><br />
          Default card group
          <br />
          Use card groups to render cards as a single, attached element with
          equal width and height columns. Card groups use display: flex; to
          achieve their uniform sizing.
          <br /><br />
          When using card groups with footers, their content will automatically
          line up.
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
        <b-card-group>
          <b-card
            title="Title"
            :img-src="require('@/assets/img/card/image-1.png')"
            img-alt="Image"
            img-top
          >
            <b-card-text class="hp-p1-body">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>

            <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </b-card>

          <b-card
            title="Title"
            :img-src="require('@/assets/img/card/image-1.png')"
            img-alt="Image"
            img-top
          >
            <b-card-text class="hp-p1-body">
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>

            <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </b-card>

          <b-card
            title="Title"
            :img-src="require('@/assets/img/card/image-1.png')"
            img-alt="Image"
            img-top
          >
            <b-card-text class="hp-p1-body">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </b-card-text>

            <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
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
import {
  BRow,
  BCol,
  BCard,
  BCardGroup,
  BCardText,
  BButton,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.cardGroups,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardGroup,
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
