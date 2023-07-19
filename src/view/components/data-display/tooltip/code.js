const basic = `
<template>
  <div>
    <b-button variant="primary" v-b-tooltip.hover title="Tooltip directive content">
      Tooltip
    </b-button>

    <p class="hp-p1-body mt-24">And with custom HTML added:</p>

    <b-button variant="primary" id="tooltip-target-1">
      Tooltip with HTML
    </b-button>

    <b-tooltip target="tooltip-target-1" triggers="hover">
      I am tooltip <b>component</b> content!
    </b-tooltip>
  </div>
</template>

<script>
import { BButton, BTooltip } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BTooltip,
  },
};
</script>
`

const positioning = `
<template>
  <b-button v-b-tooltip.hover.top="'Tooltip!'" variant="primary"> Top </b-button>
  <b-button v-b-tooltip.hover.right="'Tooltip!'" variant="primary"> Right </b-button>
  <b-button v-b-tooltip.hover.left="'Tooltip!'" variant="primary"> Left </b-button>
  <b-button v-b-tooltip.hover.bottom="'Tooltip!'" variant="primary"> Bottom </b-button>
  <b-button v-b-tooltip.hover.topright="'Tooltip!'" variant="primary"> Top right </b-button>
  <b-button v-b-tooltip.hover.topleft="'Tooltip!'" variant="primary"> Top left </b-button>
  <b-button v-b-tooltip.hover.bottomright="'Tooltip!'" variant="primary"> Bottom right </b-button>
  <b-button v-b-tooltip.hover.bottomleft="'Tooltip!'" variant="primary"> Bottom left </b-button>
  <b-button v-b-tooltip.hover.lefttop="'Tooltip!'" variant="primary"> Left top </b-button>
  <b-button v-b-tooltip.hover.leftbottom="'Tooltip!'" variant="primary"> Left bottom </b-button>
  <b-button v-b-tooltip.hover.righttop="'Tooltip!'" variant="primary"> Right top </b-button>
  <b-button v-b-tooltip.hover.rightbottom="'Tooltip!'" variant="primary"> Right bottom </b-button>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  components: {
    BButton,
  },
};
</script>
`

const triggers = `
<template>
  <b-button v-b-tooltip="'Tooltip!'" variant="primary"> Hover + Focus </b-button>
  <b-button v-b-tooltip.hover="'Tooltip!'" variant="primary"> Hover </b-button>
  <b-button v-b-tooltip.click="'Tooltip!'" variant="primary"> Click </b-button>
  <b-button v-b-tooltip.focus="'Tooltip!'" variant="primary"> Focus </b-button>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  components: {
    BButton,
  },
};
</script>
`

const titleContent = `
<template>
  <b-button v-b-tooltip.hover :title="'Tip from title attribute ' + date" variant="primary" Title </b-button>
  <b-button v-b-tooltip.hover="'String Tip'" variant="primary" String </b-button>
  <b-button v-b-tooltip.hover.html="tipData" variant="primary" Data </b-button>
  <b-button v-b-tooltip.hover.html="tipMethod" variant="primary" Method </b-button>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  data() {
    return {
      tipData: { title: "Tooltip <em>Message</em>" },
      date: new Date(),
      timer: null,
    };
  },
  components: {
    BButton,
  },
  mounted() {
    this.timer = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    tipMethod() {
      // Note this is called each time the tooltip is first opened.
      return "<strong>" + new Date() + "</strong>";
    },
  },
};
</script>
`

const variants = `
<template>
  <b-button variant="primary" v-b-tooltip.hover.v-primary title="Primary variant"> Primary </b-button>
  <b-button variant="secondary" v-b-tooltip.hover.v-secondary title="Secondary variant"> Secondary </b-button>
  <b-button variant="danger" v-b-tooltip.hover.v-danger title="Danger variant"> Danger </b-button>
  <b-button variant="warning" v-b-tooltip.hover="{ customClass: 'b-tooltip-warning' }" title="Warning variant"> Warning </b-button>
  <b-button variant="info" v-b-tooltip.hover="{ variant: 'info' }" title="Info variant"> Info </b-button>
  <b-button variant="success" v-b-tooltip.hover="{ variant: 'success' }" title="Success variant"> Success </b-button>
  <b-button variant="dark" v-b-tooltip.hover="{ variant: 'dark' }" title="Dark variant"> Dark </b-button>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  components: {
    BButton,
  },
};
</script>
`

export default { basic, positioning, triggers, titleContent, variants }