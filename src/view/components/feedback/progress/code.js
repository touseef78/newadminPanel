const basic = `
<template>
  <div>
    <b-progress :value="value" :max="max" show-progress animated ></b-progress>

    <b-progress class="progress-multiple-bars mt-8" :max="max" show-value>
      <b-progress-bar :value="value * (6 / 10)" variant="success" ></b-progress-bar>
      <b-progress-bar :value="value * (2.5 / 10)" variant="warning" class="border-rad" ></b-progress-bar>
      <b-progress-bar :value="value * (1.5 / 10)" variant="danger" ></b-progress-bar>
    </b-progress>

    <b-button variant="primary" class="mt-16" @click="randomValue">Click me</b-button>
  </div>
</template>

<script>
  import { BButton, BProgress, BProgressBar, } from "bootstrap-vue";

  export default {
    data() {
      return {
        value: 45,
        max: 100,
      };
    },
    components: {
      BButton,
      BProgress,
      BProgressBar,
    },
    methods: {
      randomValue() {
        this.value = Math.random() * this.max;
      },
    },
  };
</script>
`

const labels = `
<template>
  <div>
    <p class="hp-p1-body mb-4">No label</p>
    <b-progress :value="value" :max="max" class="mb-8"></b-progress>

    <p class="hp-p1-body mb-4">Value label</p>
    <b-progress :value="value" :max="max" show-value class="mb-8"></b-progress>

    <p class="hp-p1-body mb-4">Progress label</p>
    <b-progress :value="value" :max="max" show-progress class="mb-8"></b-progress>

    <p class="hp-p1-body mb-4">Value label with precision</p>
    <b-progress :value="value" :max="max" :precision="2" show-value class="mb-8"></b-progress>

    <p class="hp-p1-body mb-4">Progress label with precision</p>
    <b-progress :value="value" :max="max" :precision="2" show-progress class="mb-8"></b-progress>
  </div>
</template>

<script>
  import { BProgress } from "bootstrap-vue";

  export default {
    data() {
      return {
        value: 33.333333333,
        max: 50,
      };
    },
    components: {
      BProgress,
    },
  };
</script>
`

const customLabel = `
<template>
  <div>
    <p class="hp-p1-body mb-4">Custom label via default slot</p>
    <b-progress :max="max" height="2rem" class="mb-8">
      <b-progress-bar :value="value">
        <span>Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span>
      </b-progress-bar>
    </b-progress>

    <p class="hp-p1-body mb-4">Custom label via property</p>
    <b-progress :max="max" class="mb-8">
      <b-progress-bar :value="value" :label="((value / max) * 100).toFixed(2) + '%'"></b-progress-bar>
    </b-progress>

    <p class="hp-p1-body mb-4">Custom label via property (HTML support)</p>
    <b-progress :max="max" class="mb-8">
      <b-progress-bar :value="value" :label-html="'<del>' + value + '</del>'"></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
  import { BProgress, BProgressBar, } from "bootstrap-vue";

  export default {
    data() {
      return {
        value: 33.333333333,
        max: 50,
      };
    },
    components: {
      BProgress,
      BProgressBar,
    },
  };
</script>
`

const width = `
<template>
  <div>
    <p class="hp-p1-body mb-4">Default width</p>
    <b-progress :value="value" class="mb-8"></b-progress>

    <p class="hp-p1-body mb-4">Custom widths</p>
    <b-progress :value="value" class="w-75 mb-8"></b-progress>
    <b-progress :value="value" class="w-50 mb-8"></b-progress>
    <b-progress :value="value" class="w-25"></b-progress>
  </div>
</template>

<script>
  import { BProgress } from "bootstrap-vue";

  export default {
    data() {
      return {
        value: 75,
      };
    },
    components: {
      BProgress,
    },
  };
</script>
`

const height = `
<template>
  <div>
    <p class="hp-p1-body mb-4">Default height</p>
    <b-progress :value="value" show-progress class="mb-8"></b-progress>

    <p class="hp-p1-body mb-4">Custom heights</p>
    <b-progress height="2rem" :value="value" show-progress class="mb-8"></b-progress>
    <b-progress height="20px" :value="value" show-progress class="mb-8"></b-progress>
    <b-progress height="2px" :value="value"></b-progress>
  </div>
</template>

<script>
  import { BProgress } from "bootstrap-vue";

  export default {
    data() {
      return {
        value: 75,
      };
    },
    components: {
      BProgress,
    },
  };
</script>
`

const solidBackgroundColor = `
<template>
  <div :key="index" v-for="(bar, index) in bars" class="row">
    <div class="col-sm-2">
      <p class="hp-p1-body mb-0">{{ bar.variant }}:</p>
    </div>
    <div class="col-sm-10">
      <b-progress
        :value="bar.value"
        :variant="bar.variant"
        :key="bar.variant"
      ></b-progress>
    </div>
  </div>
</template>

<script>
  import { BProgress } from "bootstrap-vue";

  export default {
    data() {
      return {
        bars: [
          { variant: "success", value: 75 },
          { variant: "info", value: 75 },
          { variant: "warning", value: 75 },
          { variant: "danger", value: 75 },
          { variant: "primary", value: 75 },
          { variant: "secondary", value: 75 },
          { variant: "dark", value: 75 },
        ],
        timer: null,
      };
    },
    components: {
      BProgress,
    },
    mounted() {
      this.timer = setInterval(() => {
        this.bars.forEach((bar) => (bar.value = 25 + Math.random() * 75));
      }, 2000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
    },
  };
</script>
`

const stripedBackgrounds = `
<template>
  <div>
    <b-progress :value="25" variant="success" :striped="striped"></b-progress>
    <b-progress :value="50" variant="info" :striped="striped" class="mt-8"></b-progress>
    <b-progress :value="75" variant="warning" :striped="striped" class="mt-8"></b-progress>
    <b-progress :value="100" variant="danger" :striped="striped" class="mt-8"></b-progress>

    <b-button variant="primary" @click="striped = !striped" class="mt-16">
      {{ striped ? "Remove" : "Add" }} Striped
    </b-button>
  </div>
</template>

<script>
  import { BButton, BProgress } from "bootstrap-vue";

  export default {
    data() {
      return {
        striped: true,
      };
    },
    components: {
      BButton,
      BProgress,
    },
  };
</script>
`

const animatedBackgrounds = `
<template>
  <div>
    <b-progress :value="25" variant="success" striped :animated="animate"></b-progress>
    <b-progress :value="50" variant="info" striped :animated="animate" class="mt-8"></b-progress>
    <b-progress :value="75" variant="warning" striped :animated="animate" class="mt-8"></b-progress>
    <b-progress :value="100" variant="danger" :animated="animate" class="mt-8"></b-progress>

    <b-button variant="primary" @click="animate = !animate" class="mt-16">
      {{ animate ? "Stop" : "Start" }} Animation
    </b-button>
  </div>
</template>

<script>
  import { BButton, BProgress } from "bootstrap-vue";

  export default {
    data() {
      return {
        animate: true,
      };
    },
    components: {
      BButton,
      BProgress,
    },
  };
</script>
`

const multipleBars = `
<template>
  <div>
    <b-progress :max="max" class="progress-multiple-bars mb-8">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress show-progress :max="max" class="progress-multiple-bars mb-8">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress show-value striped :max="max" class="progress-multiple-bars mb-8">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress :max="max" class="progress-multiple-bars">
      <b-progress-bar variant="primary" :value="values[0]" show-progress></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]" animated show-progress></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]" striped show-progress></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
  import { BProgress, BProgressBar, } from "bootstrap-vue";

  export default {
    data() {
      return {
        values: [15, 30, 20],
        max: 100,
      };
    },
    components: {
      BProgress,
      BProgressBar,
    },
  };
</script>
`

export default { basic, labels, customLabel, width, height, solidBackgroundColor, stripedBackgrounds, animatedBackgrounds, multipleBars }