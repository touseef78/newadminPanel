<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Sizing</h4>

        <p class="hp-p1-body">
          Dropdowns work with trigger buttons of all sizes, including default
          and split dropdown buttons.
          <br /><br />
          Set the <code>size</code> prop to either <code>sm</code> for small
          button(s), or <code>lg</code> for large button(s).
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
        <div>
          <b-dropdown
            size="lg"
            text="Large"
            variant="primary"
            class="mb-8 mr-8"
          >
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
          </b-dropdown>

          <b-dropdown
            size="lg"
            split
            text="Large Split"
            variant="primary"
            class="mb-8 mr-8"
          >
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button
              >Something else here...</b-dropdown-item-button
            >
          </b-dropdown>
        </div>

        <div>
          <b-dropdown
            size="sm"
            text="Small"
            variant="primary"
            class="mb-8 mr-8"
          >
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button
              >Something else here...</b-dropdown-item-button
            >
          </b-dropdown>

          <b-dropdown
            size="sm"
            split
            text="Small Split"
            variant="primary"
            class="mb-8 mr-8"
          >
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button
              >Something else here...</b-dropdown-item-button
            >
          </b-dropdown>
        </div>
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
  BDropdownItemButton,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
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
    BDropdown,
    BDropdownItem,
    BDropdownItemButton,
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
