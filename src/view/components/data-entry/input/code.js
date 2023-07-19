const basic = `
<template>
  <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
  <div class="mt-2 hp-p1-body">Value: {{ text }}</div>
</template>

<script>
import { BFormInput } from "bootstrap-vue";

export default {
  data() {
    return {
      text: "",
    };
  },
  components: {
    BFormInput,
  },
};
</script>
`

const type = `
<template>
  <b-row class="mb-16" v-for="type in types" :key="type">
    <b-col sm="3">
      <label :for="\`type-\${type}\`">
        Type <code>{{ type }}</code>:
      </label>
    </b-col>

    <b-col sm="9">
      <b-form-input :id="\`type-\${type}\`" :type="type"></b-form-input>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BFormInput } from "bootstrap-vue";

export default {
  data() {
    return {
      types: [
        'text',
        'number',
        'email',
        'password',
        'search',
        'url',
        'tel',
        'date',
        'time',
        'color'
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BFormInput,
  },
};
</script>
`

const controlSizing = `
<template>
  <div>
    <b-row>
      <b-col sm="2">
        <label for="input-small">Small:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="mt-16">
      <b-col sm="2">
        <label for="input-default">Default:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-default" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="mt-16">
      <b-col sm="2">
        <label for="input-large">Large:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-large" size="lg" placeholder="Enter your name"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BFormInput,
  },
};
</script>
`

const contextual = `
<template>
  <div>
    <b-row>
      <b-col sm="3">
        <label for="input-none">No State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="mt-16">
      <b-col sm="3">
        <label for="input-valid">Valid State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-valid" :state="true" placeholder="Valid input"></b-form-input>
      </b-col>
    </b-row>

    <b-row class="mt-16">
      <b-col sm="3">
        <label for="input-invalid">Invalid State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-invalid" :state="false" placeholder="Invalid input"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BFormInput } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BFormInput,
  },
};
</script>
`

const contextualExample = `
<template>
  <div role="group">
    <label for="input-live">Name:</label>
    <b-form-input
      id="input-live"
      v-model="name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <!-- This is a form text block (formerly known as help block) -->
    <b-form-text id="input-live-help">Your full name.</b-form-text>
  </div>
</template>

<script>
import { BFormInput, BFormText, BFormInvalidFeedback } from "bootstrap-vue";

export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
  components: {
    BFormInput,
    BFormText,
    BFormInvalidFeedback,
  },
};
</script>
`

const formatter = `
<template>
  <div>
    <b-form-group
      label="Text input with formatter (on input)"
      label-for="input-formatter"
      description="We will convert your name to lowercase instantly"
      class="mb-0"
    >
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your name"
        :formatter="formatter"
      ></b-form-input>
    </b-form-group>
    <p><b>Value:</b> {{ text1 }}</p>

    <b-form-group
      label="Text input with lazy formatter (on blur)"
      label-for="input-lazy"
      description="This one is a little lazy!"
      class="mb-0"
    >
      <b-form-input
        id="input-lazy"
        v-model="text2"
        placeholder="Enter your name"
        lazy-formatter
        :formatter="formatter"
      ></b-form-input>
    </b-form-group>
    <p class="mb-0"><b>Value:</b> {{ text2 }}</p>
  </div>
</template>

<script>
import { BFormGroup, BFormInput } from "bootstrap-vue";

export default {
  data() {
    return {
      text1: "",
      text2: "",
    };
  },
  components: {
    BFormGroup,
    BFormInput,
  },
  methods: {
    formatter(value) {
      return value.toLowerCase();
    },
  },
};
</script>
`

const datalistSupport = `
<template>
  <div>
    <b-form-input list="my-list-id"></b-form-input>

    <b-form-datalist id="my-list-id">
      <option>Manual Option</option>
      <option :key="size" v-for="size in sizes">{{ size }}</option>
    </b-form-datalist>
  </div>
</template>

<script>
import { BFormInput, BFormDatalist } from "bootstrap-vue";

export default {
  data() {
    return {
      sizes: ["Small", "Medium", "Large", "Extra Large"],
    };
  },
  components: {
    BFormInput,
    BFormDatalist,
  },
};
</script>
`

const debounceSupport = `
<template>
  <div>
    <b-form-input v-model="value" type="text" debounce="500"></b-form-input>
    <div class="mt-2 hp-p1-body">Value: "{{ value }}"</div>
  </div>
</template>

<script>
import { BFormInput } from "bootstrap-vue";

export default {
  data() {
    return {
      value: '',
    };
  },
  components: {
    BFormInput,
  },
};
</script>
`

export default { basic, type, controlSizing, contextual, contextualExample, formatter, datalistSupport, debounceSupport }