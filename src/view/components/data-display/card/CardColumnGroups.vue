<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Card column groups</h4>

        <p class="hp-p1-body">
          Cards can be organized into Masonry-like columns with by wrapping them
          in a <code>&lt;b-card-group&gt;</code> with the prop
          <code>columns</code> set. Cards are built with CSS column properties
          instead of flexbox for easier alignment. Cards are ordered from top to
          bottom and left to right. <br /><br />
          Heads up! Your mileage with card columns may vary. To prevent cards
          breaking across columns, we must set them to display: inline-block as
          column-break-inside: avoid isn't a bulletproof solution yet.
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
        <b-card-group columns>
          <b-card
            title="Card title that wraps to a new line"
            :img-src="require('@/assets/img/card/image-1.png')"
            img-alt="Image"
            img-top
          >
            <b-card-text class="hp-p1-body">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>
          </b-card>

          <b-card header="Quote">
            <blockquote class="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
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
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>

          <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer>
                <small
                  >Someone famous in
                  <cite title="Source Title">Source Title</cite></small
                >
              </footer>
            </blockquote>
          </b-card>

          <b-card>
            <b-card-title>Title</b-card-title>
            <b-card-text class="hp-p1-body">
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>

          <b-card
            :img-src="require('@/assets/img/card/image-1.png')"
            img-alt="Image"
            overlay
          ></b-card>

          <b-card
            :img-src="require('@/assets/img/card/image-1.png')"
            img-alt="Image"
            img-top
          >
            <b-card-text class="hp-p1-body">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first.
            </b-card-text>
            <template #footer>
              <small class="text-muted">Footer Text</small>
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
  BCardTitle,
  BCardText,
  BButton,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.cardColumnGroups,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardGroup,
    BCardTitle,
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
