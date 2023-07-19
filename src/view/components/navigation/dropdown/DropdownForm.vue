<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Form</h4>

        <p class="hp-p1-body">
          Dropdowns support basic forms. Put a
          <code>&lt;b-dropdown-form&gt;</code> within a dropdown menu and place
          form controls within the <code>&lt;b-dropdown-form&gt;</code>. The
          <code>&lt;b-dropdown-form&gt;</code> is based on the
          <code>&lt;b-form&gt;</code> component, and supports the same props and
          attributes as a regular form.
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
          id="dropdown-form"
          text="Dropdown with form"
          ref="dropdown"
          variant="primary"
        >
          <b-dropdown-form>
            <b-form-group
              label="Email"
              label-for="dropdown-form-email"
              @submit.stop.prevent
            >
              <b-form-input
                id="dropdown-form-email"
                size="sm"
                placeholder="email@example.com"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Password" label-for="dropdown-form-password">
              <b-form-input
                id="dropdown-form-password"
                type="password"
                size="sm"
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
            <b-button variant="primary" size="sm" @click="onClick">
              Sign In
            </b-button>
          </b-dropdown-form>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button>
            New around here? Sign up
          </b-dropdown-item-button>
          <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
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
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BDropdown,
  BDropdownForm,
  BDropdownItemButton,
  BDropdownDivider,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.form,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BDropdown,
    BDropdownForm,
    BDropdownItemButton,
    BDropdownDivider,
  },
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true);
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
