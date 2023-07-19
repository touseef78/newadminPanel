const basic = `
<template>
  <div>
    <b-button v-b-toggle.collapse-1 variant="primary">
      Toggle Collapse
    </b-button>

    <b-collapse id="collapse-1">
      <b-card class="mt-16">
        <p class="hp-p1-body card-text">Collapse contents Here</p>

        <b-button variant="primary" v-b-toggle.collapse-1-inner size="sm">
          Toggle Inner Collapse
        </b-button>

        <b-collapse id="collapse-1-inner">
          <b-card class="mt-16">
            <p class="hp-p1-body mb-0">Hello!</p>
          </b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { BCard, BButton, BCollapse } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BButton,
    BCollapse,
  },
};
</script>
`

const visibility = `
<template>
  <div>
  <b-button variant="primary" v-b-toggle.collapse-3>Toggle Collapse</b-button>

  <b-collapse visible id="collapse-3">
    <b-card class="mt-16">
      <p class="hp-p1-body mb-0">I should start open!</p>
    </b-card>
  </b-collapse>
  </div>
</template>

<script>
import { BCard, BButton, BCollapse } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BButton,
    BCollapse,
  },
};
</script>
`

export default { basic, visibility }