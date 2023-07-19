<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Menu offset</h4>

        <p class="hp-p1-body">
          Like to move your menu away from the toggle buttons a bit? Then use
          the <code>offset</code> prop to specify the number of pixels to push right (or left
          when negative) from the toggle button:
          <br /><br />
          <ul class="hp-p1-body pl-18 hp-list-disc">
            <li>Specified as a number of pixels: positive for right shift, negative
            for left shift.</li>
            <li>Specify the distance in CSS units (i.e. <code>0.3rem</code>, <code>4px</code>,
            <code>1.2em</code>, etc.) passed as a string.</li>
          </ul>
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
        <b-dropdown id="dropdown-offset" offset="25" text="Offset Dropdown" variant="primary">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
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
      codeText: code.offset,
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
