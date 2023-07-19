const basic = `
<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>

    <div class="hp-p1-body">
      State: <strong>{{ status }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormCheckbox } from "bootstrap-vue";

export default {
  data() {
    return {
      status: "not_accepted",
    };
  },
  components: {
    BFormCheckbox,
  },
};
</script>
`

const multiple = `
<template>
  <div>
    <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Using sub-components:"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <div class="hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormGroup, BFormCheckbox, BFormCheckboxGroup } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
    };
  },
  components: {
    BFormGroup,
    BFormCheckbox,
    BFormCheckboxGroup,
  },
};
</script>
`

const optionFieldNames = `
<template>
  <div>
    <b-form-checkbox-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-checkbox-group>

    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormCheckboxGroup } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: [],
      options: [
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" },
      ],
    };
  },
  components: {
    BFormCheckboxGroup,
  },
};
</script>
`

const inlineAndStacked = `
<template>
  <div>
    <b-form-group
      label="Form-checkbox-group inline checkboxes (default)"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1a"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Form-checkbox-group stacked checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-2a"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Individual stacked checkboxes (default)"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :aria-describedby="ariaDescribedby"
        name="flavour-3a"
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>

    <b-form-group
      label="Individual inline checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :aria-describedby="ariaDescribedby"
        name="flavour-4a"
        inline
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>
  </div>
</template>

<script>
import { BFormGroup, BFormCheckboxGroup, BFormCheckbox } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
    };
  },
  components: {
    BFormGroup,
    BFormCheckboxGroup,
    BFormCheckbox,
  },
};
</script>
`

const sizing = `
<template>
  <b-form-checkbox size="sm">Small</b-form-checkbox>
  <b-form-checkbox>Default</b-form-checkbox>
  <b-form-checkbox size="lg">Large</b-form-checkbox>
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

const button = `
<template>
  <div>
    <b-form-checkbox
      v-model="checked1"
      name="check-button"
      button
      button-variant="primary"
    >
      Button Checkbox <b>(Checked: {{ checked1 }})</b>
    </b-form-checkbox>

    <b-form-checkbox
      v-model="checked2"
      name="check-button"
      button
      button-variant="primary"
    >
      Button Checkbox <b>(Checked: {{ checked2 }})</b>
    </b-form-checkbox>
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

const groupedButton = `
<template>
  <div>
    <b-form-group
      label="Button-group style checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="primary"
        name="buttons-1"
        buttons
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Button-group style checkboxes with variant primary and large buttons"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        buttons
        button-variant="primary"
        size="lg"
        name="buttons-2"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Stacked (vertical) button-group style checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="primary"
        stacked
        buttons
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
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
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

const nonCustom = `
<template>
  <div>
    <b-form-group
      label="Plain inline checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        plain
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Plain stacked checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        plain
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
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
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

const validation = `
<template>
  <b-form-checkbox-group
    v-model="value"
    :options="options"
    :state="state"
    name="checkbox-validation"
  >
    <b-form-invalid-feedback :state="state">
      Please select two
    </b-form-invalid-feedback>
    <b-form-valid-feedback :state="state">
      Thank you
    </b-form-valid-feedback>
  </b-form-checkbox-group>
</template>

<script>
import { BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback } from "bootstrap-vue";

export default {
  data() {
    return {
      value: [],
      options: [
        { text: "First Check", value: "first" },
        { text: "Second Check", value: "second" },
        { text: "Third Check", value: "third" },
      ],
    };
  },
  components: {
    BFormCheckboxGroup,
    BFormInvalidFeedback,
    BFormValidFeedback,
  },
};
</script>
`

const indeterminate = `
<template>
  <div>
    <b-form-group>
      <template #label>
        <b>Choose your flavours:</b><br />
        <b-form-checkbox
          v-model="allSelected"
          :indeterminate="indeterminate"
          aria-describedby="flavours"
          aria-controls="flavours"
          @change="toggleAll"
        >
          {{ allSelected ? "Un-select All" : "Select All" }}
        </b-form-checkbox>
      </template>

      <template v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="flavors"
          v-model="selected"
          :options="flavours"
          :aria-describedby="ariaDescribedby"
          name="flavors"
          class="ml-4"
          aria-label="Individual flavours"
          stacked
        ></b-form-checkbox-group>
      </template>
    </b-form-group>

    <div class="hp-p1-body">
      Selected: <strong>{{ selected }}</strong
      ><br />
      All Selected: <strong>{{ allSelected }}</strong
      ><br />
      Indeterminate: <strong>{{ indeterminate }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormGroup, BFormCheckboxGroup, BFormCheckbox } from "bootstrap-vue";

export default {
  data() {
    return {
      flavours: ["Orange", "Grape", "Apple", "Lime", "Very Berry"],
      selected: [],
      allSelected: false,
      indeterminate: false,
    };
  },
  components: {
    BFormGroup,
    BFormCheckboxGroup,
    BFormCheckbox,
  },
  methods: {
    toggleAll(checked) {
      this.selected = checked ? this.flavours.slice() : [];
    },
  },
  watch: {
    selected(newValue, oldValue) {
      // Handle changes in individual flavour checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.allSelected = false;
      } else if (newValue.length === this.flavours.length) {
        this.indeterminate = false;
        this.allSelected = true;
      } else {
        this.indeterminate = true;
        this.allSelected = false;
      }
    },
  },
};
</script>
`

export default { basic, multiple, optionFieldNames, inlineAndStacked, sizing, button, groupedButton, nonCustom, validation, indeterminate }