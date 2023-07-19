const basic = `
<template>
  <div>
    <!-- Using props -->
    <b-input-group size="lg" prepend="$" append=".00">
      <b-form-input></b-form-input>
    </b-input-group>

    <!-- Using slots -->
    <b-input-group class="mt-3">
      <template #append>
        <b-input-group-text>
          <strong class="text-danger">!</strong>
        </b-input-group-text>
      </template>
      <b-form-input></b-form-input>
    </b-input-group>

    <!-- Using components -->
    <b-input-group prepend="Username" class="mt-3">
      <b-form-input></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-primary">Button</b-button>
        <b-button variant="primary">Button</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import { BButton, BInputGroup, BInputGroupText, BInputGroupAppend, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BInputGroup,
    BInputGroupText,
    BInputGroupAppend,
    BFormInput,
  },
};
</script>
`

const slots = `
<template>
  <b-input-group>
    <template #prepend>
      <b-input-group-text>Username</b-input-group-text>
    </template>
    <b-form-input></b-form-input>

    <template #append>
      <b-dropdown text="Dropdown" variant="primary">
        <b-dropdown-item>Action A</b-dropdown-item>
        <b-dropdown-item>Action B</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-input-group>
</template>

<script>
import { BInputGroup, BInputGroupText, BFormInput, BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BInputGroup,
    BInputGroupText,
    BFormInput,
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const customAddons = `
<template>
  <div>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-form-checkbox class="mr-n2">
          <span class="sr-only">Checkbox for following text input</span>
        </b-form-checkbox>
      </b-input-group-prepend>
      <b-form-input aria-label="Text input with checkbox"></b-form-input>
    </b-input-group>

    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-form-radio class="mr-n2">
          <span class="sr-only">Radio for following text input</span>
        </b-form-radio>
      </b-input-group-prepend>
      <b-form-input aria-label="Text input with radio input"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend is-text>
        <b-form-checkbox switch class="mr-n2">
          <span class="sr-only">Switch for following text input</span>
        </b-form-checkbox>
      </b-input-group-prepend>
      <b-form-input aria-label="Text input with switch"></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
import { BInputGroup, BInputGroupPrepend, BFormCheckbox, BFormRadio, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BInputGroup,
    BInputGroupPrepend,
    BFormCheckbox,
    BFormRadio,
    BFormInput,
  },
};
</script>
`

const multipleInputs = `
<template>
  <b-input-group prepend="First and last name" class="mb-2">
    <b-form-input aria-label="First name"></b-form-input>
    <b-form-input aria-label="Last name"></b-form-input>
  </b-input-group>
</template>

<script>
import { BInputGroup, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BInputGroup,
    BFormInput,
  },
};
</script>
`

const sizing = `
<template>
  <b-input-group
    v-for="size in ['sm', '', 'lg']"
    :key="size"
    :size="size"
    class="mb-3"
    prepend="Label"
  >
    <b-form-input></b-form-input>

    <b-input-group-append>
      <b-button size="sm" text="Button" variant="primary">
        Button
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
import { BButton, BInputGroup, BInputGroupAppend, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
  },
};
</script>
`

export default { basic, slots, customAddons, multipleInputs, sizing }