<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>List Groups inside cards</h4>

        <p class="hp-p1-body">
          Incorporate list groups into cards. Use the
          <code>&lt;b-list-group&gt;</code> prop <code>flush</code> prop when
          using cards with <code>no-body</code> to make the sides of the list
          group flush with the card.
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
          <b-card header="Card with list group">
            <b-list-group>
              <b-list-group-item href="#">Cras justo odio</b-list-group-item>
              <b-list-group-item href="#"
                >Dapibus ac facilisis in</b-list-group-item
              >
              <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <p class="card-text mt-2 hp-p1-body">
              Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
              nulla tempor. Laborum consequat non elit enim exercitation cillum
              aliqua consequat id aliqua. Esse ex consectetur mollit voluptate
              est in duis laboris ad sit ipsum anim Lorem.
            </p>
          </b-card>

          <b-card no-body header="Card with flush list group">
            <b-list-group flush>
              <b-list-group-item href="#">Cras justo odio</b-list-group-item>
              <b-list-group-item href="#"
                >Dapibus ac facilisis in</b-list-group-item
              >
              <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <p class="hp-p1-body">
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                nulla tempor. Laborum consequat non elit enim exercitation cillum
                aliqua consequat id aliqua. Esse ex consectetur mollit voluptate
                est in duis laboris ad sit ipsum anim Lorem.
              </p>
            </b-card-body>
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
  BCardGroup,
  BCard,
  BCardBody,
  BButton,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.cards,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCardGroup,
    BCard,
    BCardBody,
    BButton,
    BListGroup,
    BListGroupItem,
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
