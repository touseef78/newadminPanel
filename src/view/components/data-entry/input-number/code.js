const basic = `
<template>
  <input-number :min="1" :max="10" :value="1" />
</template>

<script>
import InputNumber from "./InputNumber.vue";

export default {
  components: {
    InputNumber
  },
};
</script>
`

const disabled = `
<template>
  <input-number :min="1" :max="10" :value="1" :disabled="true" />
</template>

<script>
import InputNumber from "./InputNumber.vue";

export default {
  components: {
    InputNumber
  },
};
</script>
`

const sizes = `
<template>
  <input-number :min="1" :max="10" :value="1" size="lg" />
  <input-number :min="1" :max="10" :value="1" />
  <input-number :min="1" :max="10" :value="1" size="sm" />
</template>

<script>
import InputNumber from "./InputNumber.vue";

export default {
  components: {
    InputNumber
  },
};
</script>
`

export default { basic, disabled, sizes }