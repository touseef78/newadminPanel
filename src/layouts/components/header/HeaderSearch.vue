<template>
  <div
    class="hp-header-search-item position-relative"
    v-click-outside="hideModal"
  >
    <b-form-input
      placeholder="Search..."
      autocomplete="off"
      v-model="state"
      @keyup="modal = true"
    />

    <div v-if="modal" class="autocomplete-suggestions">
      <b-link
        class="autocomplete-suggestion text-black-100 hp-text-color-dark-0 d-block"
        :to="filteredState.url"
        :key="index"
        v-for="(filteredState, index) in filterStates"
        @click="setState(filteredState.title)"
      >
        {{ filteredState.title }}
      </b-link>
    </div>
  </div>
</template>

<script>
import { BFormInput, BLink } from "bootstrap-vue";
import ClickOutside from 'vue-click-outside'

import searchData from "./search-data/pages.json";

export default {
  props: ["searchActive"],
  data() {
    return {
      state: "",
      modal: false,
      states: searchData,
    };
  },
  components: {
    BFormInput,
    BLink,
  },
  computed: {
    filterStates() {
      return this.states.filter((item) => {
        return item.title.toLowerCase().includes(this.state.toLowerCase());
      });
    },
  },
  methods: {
    setState(state) {
      this.state = state;
      this.modal = false;

      this.$emit("searchClose");
    },

    hideModal() {
      this.modal = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
