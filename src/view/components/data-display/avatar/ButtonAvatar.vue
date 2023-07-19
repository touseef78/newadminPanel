<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Button</h4>

        <p class="hp-p1-body">
          Want to trigger the opening of a modal or trigger an action? Set the
          button prop to instruct <code>&lt;b-avatar&gt;</code> to render as a
          <code>&lt;button&gt;</code> element. When rendered as a button, the
          component will emit the click event whenever clicked.
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
        <b-list-group>
          <b-list-group-item>
            <b-avatar
              button
              @click="onClick"
              variant="primary"
              text="FF"
              class="align-baseline mr-8 hp-bg-dark-primary"
            ></b-avatar>
            Button Text Avatar
          </b-list-group-item>

          <b-list-group-item>
            <b-avatar
              variant="none"
              button
              @click="onClick"
              :src="require('@/assets/img/memoji/memoji-1.png')"
              class="mr-8"
            ></b-avatar>
            Button Image Avatar
          </b-list-group-item>

          <b-list-group-item>
            <b-avatar
              button
              @click="onClick"
              icon="star-fill"
              class="align-center mr-8 hp-bg-dark-secondary"
            ></b-avatar>
            Button Icon Avatar
          </b-list-group-item>
        </b-list-group>
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
  BButton,
  BAvatar,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.button,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BAvatar,
    BListGroup,
    BListGroupItem,
  },
  methods: {
    onClick() {
      this.$bvModal.msgBoxOk("User name: Fred Flintstone", {
        title: "User Info",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
      });
    },

    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
