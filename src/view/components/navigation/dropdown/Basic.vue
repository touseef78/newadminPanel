<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>

        <p class="hp-p1-body">
          <code>&lt;b-dropdown&gt;</code> (or known by its shorter alias of
          <code>&lt;b-dd&gt;</code>) components are toggleable, contextual
          overlays for displaying lists of links and more. They're toggled by
          clicking (or pressing space or enter when focused), not by hovering;
          this is an intentional design decision.
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
        <b-dropdown id="dropdown-1" text="Dropdown Button" variant="primary" class="mb-8 mr-8">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
      
        <b-dropdown id="dropdown-2" text="Dropdown Button" variant="primary" class="mb-8 mr-8">
          <b-dropdown-group id="dropdown-group-1" header="Group 1">
            <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
            <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
          </b-dropdown-group>
          <b-dropdown-group id="dropdown-group-2" header="Group 2">
            <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
            <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
          </b-dropdown-group>
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
  BDropdownItemButton,
  BDropdownGroup,
  BDropdownDivider,
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
    BDropdown,
    BDropdownItem,
    BDropdownItemButton,
    BDropdownGroup,
    BDropdownDivider,
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
