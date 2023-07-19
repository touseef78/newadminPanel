<template>
  <b-col cols="12" class="mb-32">
    <b-row>
      <b-col cols="12" xl="7" class="col-xxxl-5">
        <b-input-group size="lg">
          <b-form-input
            type="text"
            placeholder="Search for anything"
          ></b-form-input>

          <template #append>
            <b-button
              variant="primary"
              class="px-16 px-sm-64 hp-hover-text-color-black-0"
              type="button"
            >
              Search
            </b-button>
          </template>
        </b-input-group>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { BRow, BCol, BButton, BInputGroup, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BInputGroup,
    BFormInput,
  },
};
</script>
