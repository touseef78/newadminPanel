<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Control sizing</h4>

        <p class="hp-p1-body">
          Set height using the <code>size</code> prop to <code>sm</code> or
          <code>lg</code> for small or large respectively. There is no need to
          set size on the individual inputs or buttons. Note however, you will
          be required to also set the size on dropdowns.
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
        <b-input-group
          v-for="size in ['sm', '', 'lg']"
          :key="size"
          :size="size"
          class="mb-3"
          prepend="Label"
        >
          <b-form-input></b-form-input>

          <b-input-group-append>
            <b-button size="sm" text="Button" variant="primary">
              Button
            </b-button>
          </b-input-group-append>
        </b-input-group>
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
  BInputGroup,
  BInputGroupAppend,
  BFormInput,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      text: "",
      codeText: code.sizing,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
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
