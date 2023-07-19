<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Drop</h4>

        <p class="hp-p1-body">
          Turn your dropdown menu into a drop-up menu by setting the
          <code>dropup</code>
          prop.
          <br /><br />
          Turn your dropdown menu into a drop-right menu by setting the
          <code>dropright</code> prop. Or, turn it into a drop-left menu by
          setting the <code>dropleft</code> right prop to true. <br /><br />
          <code>dropright</code> takes precedence over <code>dropleft</code>.
          Neither <code>dropright</code> or <code>dropleft</code> have any
          effect if <code>dropup</code> is set.
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
          id="dropdown-dropup"
          dropup
          text="Drop-Up"
          variant="primary"
          class="mb-8 mr-8"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          id="dropdown-dropright"
          dropright
          text="Drop-Right"
          variant="primary"
          class="mb-8 mr-8"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          id="dropdown-dropleft"
          dropleft
          text="Drop-Left"
          variant="primary"
          class="mb-8 mr-8"
        >
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
      codeText: code.drop,
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
