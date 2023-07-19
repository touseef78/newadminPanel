const basic = `
<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        {
          label: "Grouped options",
          options: [
            { value: { C: "3PO" }, text: "Option with object value" },
            { value: { R: "2D2" }, text: "Another option with object value" },
          ],
        },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  components: {
    BFormSelect,
  },
};
</script>
`

const manually = `
<template>
  <div>
    <b-form-select v-model="selected" class="mb-3">
      <b-form-select-option :value="null">
        Please select an option
      </b-form-select-option>
      <b-form-select-option value="a">Option A</b-form-select-option>
      <b-form-select-option value="b" disabled>
        Option B (disabled)
      </b-form-select-option>
      <b-form-select-option-group label="Grouped options">
        <b-form-select-option :value="{ C: '3PO' }">
          Option with object value
        </b-form-select-option>
        <b-form-select-option :value="{ R: '2D2' }">
          Another option with object value
        </b-form-select-option>
      </b-form-select-option-group>
    </b-form-select>

    <div class="mt-2 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect, BFormSelectOption } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: null,
    };
  },
  components: {
    BFormSelect,
    BFormSelectOption,
  },
};
</script>
`

const first = `
<template>
  <div>
    <b-form-select v-model="selected" :options="options" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template #first>
        <b-form-select-option :value="null" disabled>
          -- Please select an option --
        </b-form-select-option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <b-form-select-option value="C">Option C</b-form-select-option>
      <b-form-select-option value="D">Option D</b-form-select-option>
    </b-form-select>

    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect, BFormSelectOption } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: "A",
      options: [
        { value: "A", text: "Option A (from options prop)" },
        { value: "B", text: "Option B (from options prop)" },
      ],
    };
  },
  components: {
    BFormSelect,
    BFormSelectOption,
  },
};
</script>
`

const changing = `
<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>

    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect } from "bootstrap-vue";

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
    BFormSelect,
  },
};
</script>
`

const singleMode = `
<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template> 

<script>
import { BFormSelect } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select some item" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Default Selected Option" },
        { value: "c", text: "This is another option" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  components: {
    BFormSelect,
  },
};
</script>
`

const sizing = `
<template>
  <div>
    <b-form-select v-model="selected" :options="options" :select-size="4"></b-form-select>
    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select some item" },
        { value: "a", text: "This is option a" },
        { value: "b", text: "Default Selected Option b" },
        { value: "c", text: "This is option c" },
        { value: "d", text: "This one is disabled", disabled: true },
        { value: "e", text: "This is option e" },
        { value: "e", text: "This is option f" },
      ],
    };
  },
  components: {
    BFormSelect,
  },
};
</script>
`

const multiple = `
<template>
  <div>
    <b-form-select v-model="selected" :options="options" multiple :select-size="4"></b-form-select>
    <div class="mt-3 hp-p1-body">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect } from "bootstrap-vue";

export default {
  data() {
    return {
      selected: ["b"], 
      options: [
        { value: "a", text: "This is First option" },
        { value: "b", text: "Default Selected Option" },
        { value: "c", text: "This is another option" },
        { value: "d", text: "This one is disabled", disabled: true },
        { value: "e", text: "This is option e" },
        { value: "f", text: "This is option f" },
        { value: "g", text: "This is option g" },
      ],
    };
  },
  components: {
    BFormSelect,
  },
};
</script>
`

export default { basic, manually, first, changing, singleMode, sizing, multiple }