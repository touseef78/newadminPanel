<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Contextual variants</h4>

        <p class="hp-p1-body">
          Use contextual variants to style list items with a stateful background
          and color, via the <code>variant</code> prop.
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
          <b-list-group-item>Default list group item</b-list-group-item>
          <b-list-group-item variant="primary"
            >Primary list group item</b-list-group-item
          >
          <b-list-group-item variant="secondary"
            >Secondary list group item</b-list-group-item
          >
          <b-list-group-item variant="success"
            >Success list group item</b-list-group-item
          >
          <b-list-group-item variant="danger"
            >Danger list group item</b-list-group-item
          >
          <b-list-group-item variant="warning"
            >Warning list group item</b-list-group-item
          >
          <b-list-group-item variant="info"
            >Info list group item</b-list-group-item
          >
          <b-list-group-item variant="light"
            >Light list group item</b-list-group-item
          >
          <b-list-group-item variant="dark"
            >Dark list group item</b-list-group-item
          >
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
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.variant,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
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
