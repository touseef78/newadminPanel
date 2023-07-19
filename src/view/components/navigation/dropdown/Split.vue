<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Split button</h4>

        <p class="hp-p1-body">
          Create a split dropdown button, where the left button provides
          standard <code>click</code> event and link support, while the right
          hand side is the dropdown menu toggle button. <br /><br />
          The left split button defaults to an element of type
          <code>&lt;button&gt;</code> (a <code>&lt;b-button&gt;</code> to be
          exact). To convert this button into a link or
          <code>&lt;router-link&gt;</code>, specify the href via the
          <code>split-href</code> prop or a router link <code>to</code> value
          via the <code>split-to</code> prop, while maintaining the look of a
          button.
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
        <b-dropdown
          split
          text="Split Dropdown"
          variant="primary"
          class="mb-8 mr-8"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          split
          split-href="#foo/bar"
          text="Split Link"
          variant="primary"
          class="mb-8 mr-8"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
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
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.split,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BDropdown,
    BDropdownItem,
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
