<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>

        <p class="hp-p1-body">
          Avatars are lightweight components, which render inline by default, so
          that they are vertically centered beside any adjoining plain text.
          They also can be used as children of other components.
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
        <p class="hp-p1-body">Using stand-alone:</p>

        <div class="mb-4">
          <b-avatar class="mb-8 mr-8 hp-bg-dark-primary" variant="primary">
            <i class="iconly-Curved-User"></i>
          </b-avatar>
          <b-avatar class="mb-8 mr-8 hp-bg-dark-secondary" text="BV"></b-avatar>
          <b-avatar
            class="mb-8 mr-8"
            variant="none"
            src="https://placekitten.com/300/300"
          ></b-avatar>
          <b-avatar class="mb-8 mr-8 hp-bg-dark-secondary"></b-avatar>
        </div>

        <p class="hp-p1-body mt-16">
          Using in components (list group) example:
        </p>

        <b-list-group style="max-width: 300px">
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar class="mr-3 hp-bg-dark-secondary"></b-avatar>
            <span class="mr-auto">J. Circlehead</span>
            <b-badge variant="primary">5</b-badge>
          </b-list-group-item>

          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="primary" text="BV" class="mr-3 hp-bg-dark-primary"></b-avatar>
            <span class="mr-auto">BootstrapVue</span>
            <b-badge variant="primary">12</b-badge>
          </b-list-group-item>

          <b-list-group-item class="d-flex align-items-center">
            <b-avatar
              variant="none"
              src="https://placekitten.com/300/300"
              class="mr-3"
            ></b-avatar>
            <span class="mr-auto">Super Kitty</span>
            <b-badge variant="primary">9</b-badge>
          </b-list-group-item>

          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="primary" class="mr-3 hp-bg-dark-primary">
              <i class="iconly-Curved-User"></i>
            </b-avatar>
            <span class="mr-auto">ACME group</span>
            <b-badge variant="primary">7</b-badge>
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
  BBadge,
  BAvatar,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
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
    BBadge,
    BAvatar,
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
