const basic = `
<template>
  <div>
    <h1>Example heading <b-badge variant="primary" class="ml-16 h3 mb-0">New</b-badge></h1>
    <h2>Example heading <b-badge variant="primary" class="ml-16 h4 mb-0">New</b-badge></h2>
    <h3>Example heading <b-badge variant="primary" class="ml-16 h5 py-4 px-12 mb-0">New</b-badge></h3>
    <h4>Example heading <b-badge variant="primary" class="ml-16">New</b-badge></h4>
    <h5>Example heading <b-badge variant="primary" class="ml-16 hp-caption py-0 px-8">New</b-badge></h5>
    <h6>Example heading <b-badge variant="primary" class="ml-16 hp-input-description py-4 px-8">New</b-badge></h6>
  </div>
</template>

<script>
import { BBadge } from "bootstrap-vue";

export default {
  components: {
    BBadge,
  },
};
</script>
`

const buttons = `
<template>
  <div>
    <b-button variant="primary">
      Notifications
      <b-badge
        class="badge text-white bg-primary-2 hp-bg-dark-primary border-primary ml-8"
      >
        4
      </b-badge>
    </b-button>

    <b-button variant="primary">
      Profile
      <b-badge
        class="badge text-white bg-primary-2 hp-bg-dark-primary border-primary ml-8"
      >
        9 <span class="sr-only">unread messages</span>
      </b-badge>
    </b-button>
  </div>
</template>

<script>
import { BButton, BBadge } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BBadge,
  },
};
</script>
`

const contextualVariations = `
<template>
  <div>
    <b-badge variant="primary">Primary</b-badge>
    <b-badge variant="secondary">Secondary</b-badge>
    <b-badge variant="success">Success</b-badge>
    <b-badge variant="danger">Danger</b-badge>
    <b-badge variant="warning">Warning</b-badge>
    <b-badge variant="info">Info</b-badge>
    <b-badge variant="light">Light</b-badge>
    <b-badge variant="dark">Dark</b-badge>
  </div>
</template>

<script>
import { BBadge } from "bootstrap-vue";

export default {
  components: {
    BBadge,
  },
};
</script>
`

const pill = `
<template>
  <div>
    <b-badge pill variant="primary">Primary</b-badge>
    <b-badge pill variant="secondary">Secondary</b-badge>
    <b-badge pill variant="success">Success</b-badge>
    <b-badge pill variant="danger">Danger</b-badge>
    <b-badge pill variant="warning">Warning</b-badge>
    <b-badge pill variant="info">Info</b-badge>
    <b-badge pill variant="light">Light</b-badge>
    <b-badge pill variant="dark">Dark</b-badge>
  </div>
</template>

<script>
import { BBadge } from "bootstrap-vue";

export default {
  components: {
    BBadge,
  },
};
</script>
`

const actionable = `
<template>
  <div>
    <b-badge href="#" variant="primary">Primary</b-badge>
    <b-badge href="#" variant="secondary">Secondary</b-badge>
    <b-badge href="#" variant="success">Success</b-badge>
    <b-badge href="#" variant="danger">Danger</b-badge>
    <b-badge href="#" variant="warning">Warning</b-badge>
    <b-badge href="#" variant="info">Info</b-badge>
    <b-badge href="#" variant="light">Light</b-badge>
    <b-badge href="#" variant="dark">Dark</b-badge>
  </div>
</template>

<script>
import { BBadge } from "bootstrap-vue";

export default {
  components: {
    BBadge,
  },
};
</script>
`

export default { basic, buttons, contextualVariations, pill, actionable }