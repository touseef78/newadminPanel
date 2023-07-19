const basic = `
<template>
  <div>
    <div>
      <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="A"
          >Option A</b-form-radio
        >
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="B"
          >Option B</b-form-radio
        >
      </b-form-group>

      <div class="mt-3 hp-p1-body">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { BFormGroup, BFormRadio } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: '',
    };
  },
  components: {
    BFormGroup,
    BFormRadio,
  },
};
</script>
`

const grouped = `
<template>
  <div>
    <b-form-group label="Radios using options" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="radio-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-options"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Radios using sub-components"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        id="radio-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="radio-sub-component"
      >
        <b-form-radio value="first">Toggle this custom radio</b-form-radio>
        <b-form-radio value="second">
          Or toggle this other custom radio
        </b-form-radio>
        <b-form-radio value="third" disabled>
          This one is Disabled
        </b-form-radio>
        <b-form-radio :value="{ fourth: 4 }">
          This is the 4th radio
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormGroup, BFormRadioGroup, BFormRadio } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: "first",
      options: [
        { text: "Toggle this custom radio", value: "first" },
        { text: "Or toggle this other custom radio", value: "second" },
        { text: "This one is Disabled", value: "third", disabled: true },
        { text: "This is the 4th radio", value: { fourth: 4 } },
      ],
    };
  },
  components: {
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
  },
};
</script>
`

const optionFieldNames = `
<template>
  <div>
    <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-radio-group>

    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormRadioGroup } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: "A",
      options: [
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" },
      ],
    };
  },
  components: {
    BFormRadioGroup,
  },
};
</script>
`

const inlineStacked = `
<template>
  <div>
    <b-form-group
      label="Inline radios (default)"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Stacked radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radios-stacked"
        stacked
      ></b-form-radio-group>
    </b-form-group>

    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormGroup, BFormRadioGroup } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: "first",
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" },
      ],
    };
  },
  components: {
    BFormGroup,
    BFormRadioGroup,
  },
};
</script>
`

const sizing = `
<template>
  <div>
    <b-form-radio name="radio-size" size="sm">Small</b-form-radio>
    <b-form-radio name="radio-size">Default</b-form-radio>
    <b-form-radio name="radio-size" size="lg">Large</b-form-radio>
  </div>
</template>

<script>
import { BFormRadio } from "bootstrap-vue";

export default {
  components: {
    BFormRadio,
  },
};
</script>
`

const buttonRadios = `
<template>
  <div>
    <b-form-group label="Button style radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="outline-primary"
        name="radios-btn-default"
        buttons
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Button style radios with outline-primary variant and size lg"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="outline-primary"
        size="lg"
        name="radio-btn-outline"
        buttons
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Stacked button style radios"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="outline-primary"
        name="radio-btn-stacked"
        buttons
        stacked
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
import { BFormGroup, BFormRadioGroup } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: "radio1",
      options: [
        { text: "Radio 1", value: "radio1" },
        { text: "Radio 3", value: "radio2" },
        { text: "Radio 3 (disabled)", value: "radio3", disabled: true },
        { text: "Radio 4", value: "radio4" },
      ],
    };
  },
  components: {
    BFormGroup,
    BFormRadioGroup,
  },
};
</script>
`

const feedback = `
<template>
  <b-form-radio-group
    v-model="value"
    :options="options"
    :state="state"
    name="radio-validation"
  >
    <b-form-invalid-feedback :state="state">
      Please select one
    </b-form-invalid-feedback>
    <b-form-valid-feedback :state="state">
      Thank you
    </b-form-valid-feedback>
  </b-form-radio-group>
</template>

<script>
import { BFormInvalidFeedback, BFormValidFeedback, BFormRadioGroup } from "bootstrap-vue";

export default {
  data() {
    return {
      value: null,
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" },
      ],
    };
  },
  components: {
    BFormInvalidFeedback,
    BFormValidFeedback,
    BFormRadioGroup,
  },
};
</script>
`

export default { basic, grouped, optionFieldNames, inlineStacked, sizing, buttonRadios, feedback }