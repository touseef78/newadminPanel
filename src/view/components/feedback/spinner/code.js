const border = `
<template>
  <b-spinner />
</template>

<script>
  import { BSpinner } from "bootstrap-vue";

  export default {
    components: {
      BSpinner
    },
  };
</script>
`

const textAlign = `
<template>
  <div class="text-center">
    <b-spinner />
  </div>
</template>

<script>
  import { BSpinner } from "bootstrap-vue";

  export default {
    components: {
      BSpinner
    },
  };
</script>
`

const size = `
<template>
  <div>
    <b-spinner small />
    <b-spinner small type="grow" />

    <b-spinner style="width: 3rem; height: 3rem" />
    <b-spinner style="width: 3rem; height: 3rem" type="grow" />
  </div>
</template>

<script>
  import { BSpinner } from "bootstrap-vue";

  export default {
    components: {
      BSpinner
    },
  };
</script>
`

const grow = `
<template>
  <b-spinner
    type="grow"
    v-for="variant in variants"
    :key="variant"
    :variant="variant"
  />
</template>

<script>
import { BSpinner } from "bootstrap-vue";

export default {
  data() {
    return {
      variants: [
        "primary",
        "secondary",
        "danger",
        "warning",
        "success",
        "info",
        "light",
        "dark",
      ],
    };
  },
  components: {
    BSpinner,
  },
};
</script>
`

const floats = `
<template>
  <div class="clearfix">
    <b-spinner class="float-right" />
  </div>
</template>

<script>
  import { BSpinner } from "bootstrap-vue";

  export default {
    components: {
      BSpinner
    },
  };
</script>
`

const flex = `
<template>
  <div>
    <div class="d-flex justify-content-center mb-3">
      <b-spinner />
    </div>

    <div class="d-flex align-items-center justify-content-between">
      <p class="hp-p1-body mb-0">Loading...</p>
      <b-spinner class="ml-auto" />
    </div>
  </div>
</template>

<script>
  import { BSpinner } from "bootstrap-vue";

  export default {
    components: {
      BSpinner
    },
  };
</script>
`

const colors = `
<template>
  <div class="d-flex flex-wrap">
    <b-spinner
      v-for="variant in variants"
      :key="variant"
      :variant="variant"
      class="mr-16"
    />
  </div>
</template>

<script>
  import { BSpinner } from "bootstrap-vue";

  export default {
    data() {
      return {
        variants: [
          "primary",
          "secondary",
          "danger",
          "warning",
          "success",
          "info",
          "light",
          "dark",
        ],
      };
    },
    components: {
      BSpinner
    },
  };
</script>
`

const buttons = `
<template>
  <div>
    <b-button variant="primary" disabled>
      <b-spinner small></b-spinner>
    </b-button>

    <b-button variant="primary" disabled>
      <b-spinner small></b-spinner>
      <span class="sr-only">Loading...</span>
    </b-button>

    <b-button variant="primary" disabled>
      <b-spinner small type="grow"></b-spinner>
    </b-button>

    <b-button variant="primary" disabled>
      <b-spinner small type="grow" class="mr-8"></b-spinner>
      Loading...
    </b-button>
  </div>
</template>

<script>
  import { BSpinner } from "bootstrap-vue";

  export default {
    components: {
      BSpinner
    },
  };
</script>
`

export default { border, textAlign, size, grow, floats, flex, colors, buttons }