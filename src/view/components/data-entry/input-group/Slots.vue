<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Using named slots</h4>

        <p class="hp-p1-body">
          if you want better control over addons, you can use
          <code>prepend</code> and <code>append</code> slots instead.
          <br /><br />
          The slot content will automatically be wrapped by
          <code>&lt;b-input-group-prepend&gt;</code> or
          <code>&lt;b-input-group-append&gt;</code> to display correctly.
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
        <b-input-group>
          <template #prepend>
            <b-input-group-text>Username</b-input-group-text>
          </template>
          <b-form-input></b-form-input>

          <template #append>
            <b-dropdown text="Dropdown" variant="primary">
              <b-dropdown-item>Action A</b-dropdown-item>
              <b-dropdown-item>Action B</b-dropdown-item>
            </b-dropdown>
          </template>
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
  BInputGroupText,
  BFormInput,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      text: "",
      codeText: code.slots,
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
    BInputGroupText,
    BFormInput,
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
