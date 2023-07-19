const basic = `
<template>
  <div>
    <label for="range-1">Example range with min and max</label>
    <b-form-input id="range-1" v-model="value" type="range" min="0" max="5"></b-form-input>
    <div class="mt-2 hp-p1-body">Value: {{ value }}</div>
  </div>
</template>

<script>
import { BFormInput } from "bootstrap-vue";

export default {
  data() {
    return {
      value: "2",
    };
  },
  components: {
    BFormInput,
  },
};
</script>
`

const step = `
<template>
  <div>
    <label for="range-2">Example range with step value</label>
    <b-form-input id="range-2" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>
    <div class="mt-2 hp-p1-body">Value: {{ value }}</div>
  </div>
</template>

<script>
import { BFormInput } from "bootstrap-vue";

export default {
  data() {
    return {
      value: "2",
    };
  },
  components: {
    BFormInput,
  },
};
</script>
`

export default { basic, step }