const individual = `
<template>
  <b-form-checkbox v-model="checked" name="check-button" switch>
    Switch Checkbox <b>(Checked: {{ checked }})</b>
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from "bootstrap-vue";

export default {
  data() {
    return {
      checked: false,
    };
  },
  components: {
    BFormCheckbox,
  },
};
</script>
`

const grouped = `
<template>
  <div>
    <b-form-group
      label="Inline switch style checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Stacked (vertical) switch style checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        switches
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
import { BFormGroup, BFormCheckboxGroup } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Red", value: "red" },
        { text: "Green", value: "green" },
        { text: "Yellow (disabled)", value: "yellow", disabled: true },
        { text: "Blue", value: "blue" },
      ],
    };
  },
  components: {
    BFormGroup,
    BFormCheckboxGroup,
  },
};
</script>
`

const sizing = `
<template>
  <div>
    <b-form-checkbox switch size="sm">Small</b-form-checkbox>
    <b-form-checkbox switch>Default</b-form-checkbox>
    <b-form-checkbox switch size="lg">Large</b-form-checkbox>
  </div>
</template>

<script>
import { BFormCheckbox } from "bootstrap-vue";

export default {
  components: {
    BFormCheckbox,
  },
};
</script>
`

export default { individual, grouped, sizing }