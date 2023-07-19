<template>
  <b-col cols="12">
    <div class="d-flex align-items-center justify-content-center mt-32 mb-24">
      <span
        class="hp-pricing-billed-text hp-pricing-billed-monthly-text hp-caption text-black-60"
        :class="!switchChecked ? 'active' : ''"
      >
        Billed monthly
      </span>

      <b-form-checkbox
        @change="switchChange()"
        :checked="switchChecked"
        name="check-button"
        switch
        size="lg"
        class="ml-8"
        style="height: 38px"
      />

      <span
        class="hp-pricing-billed-text hp-pricing-billed-yearly-text hp-caption text-black-60"
        :class="switchChecked ? 'active' : ''"
      >
        Billed yearly
      </span>
    </div>
  </b-col>
</template>

<script>
import { BCol, BFormCheckbox } from "bootstrap-vue";

export default {
  props: ["switchChecked"],
  components: {
    BCol,
    BFormCheckbox,
  },
  methods: {
    switchChange() {
      this.$emit("switchChange");
    },
  },
};
</script>
