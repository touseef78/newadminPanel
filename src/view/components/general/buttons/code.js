const basic = `
<template>
  <div>
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
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

const type = `
<template>
  <div>
    <b-button variant="primary">I am a Button</b-button>
    <b-button variant="primary" href="#">I am a Link</b-button>
  </div>
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

const sizing = `
<template>
  <div>
    <b-button variant="primary" size="sm">Small Button</b-button>
    <b-button variant="primary">Default Button</b-button>
    <b-button variant="primary" size="lg">Large Button</b-button>
  </div>
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

const solidColor = `
<template>
  <div>
    <b-button variant="primary">Primary</b-button>
    <b-button variant="secondary">Secondary</b-button>
    <b-button variant="success">Success</b-button>
    <b-button variant="danger">Danger</b-button>
    <b-button variant="warning">Warning</b-button>
    <b-button variant="info">Info</b-button>
    <b-button variant="black-100">Dark</b-button>
  </div>
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

const outlineColor = `
<template>
  <div>
    <b-button variant="outline-primary">Primary</b-button>
    <b-button variant="outline-secondary">Secondary</b-button>
    <b-button variant="outline-success">Success</b-button>
    <b-button variant="outline-danger">Danger</b-button>
    <b-button variant="outline-warning">Warning</b-button>
    <b-button variant="outline-info">Info</b-button>
    <b-button variant="outline-black-100">Dark</b-button>
  </div>
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

const ghostColor = `
<template>
  <div>
    <b-button variant="primary" class="btn-ghost">Primary Button</b-button>
    <b-button variant="secondary" class="btn-ghost">Secondary Button</b-button>
    <b-button variant="danger" class="btn-ghost">Danger Button</b-button>
    <b-button variant="info" class="btn-ghost">Info Button</b-button>
    <b-button variant="success" class="btn-ghost">Success Button</b-button>
    <b-button variant="warning" class="btn-ghost">Warning Button</b-button>
    <b-button variant="dark" class="btn-ghost">Dark Button</b-button>
  </div>
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

const text = `
<template>
  <div>
    <b-button variant="text" class="text-primary hp-hover-bg-primary-4 hp-hover-bg-dark-primary">Primary Button</b-button>
    <b-button variant="text" class="text-secondary hp-hover-bg-secondary-4 hp-hover-bg-dark-secondary">Secondary Button</b-button>
    <b-button variant="text" class="text-danger hp-hover-bg-danger-4 hp-hover-bg-dark-danger">Danger Button</b-button>
    <b-button variant="text" class="text-info hp-hover-bg-info-4 hp-hover-bg-dark-info">Info Button</b-button>
    <b-button variant="text" class="text-success hp-hover-bg-success-4 hp-hover-bg-dark-success">Success Button</b-button>
    <b-button variant="text" class="text-warning hp-hover-bg-warning-4 hp-hover-bg-dark-warning">Warning Button</b-button>
    <b-button variant="text" class="text-black-100 hp-hover-bg-black-10 hp-hover-bg-dark-80 hp-hover-text-color-dark-0">Dark Button</b-button>
  </div>
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

const link = `
<template>
  <div>
    <b-button variant="link" class="text-primary hp-hover-text-color-primary-3">Primary Button</b-button>
    <b-button variant="link" class="text-secondary hp-hover-text-color-secondary-3">Secondary Button</b-button>
    <b-button variant="link" class="text-danger hp-hover-text-color-danger-3">Danger Button</b-button>
    <b-button variant="link" class="text-info hp-hover-text-color-info-3">Info Button</b-button>
    <b-button variant="link" class="text-success hp-hover-text-color-success-3">Success Button</b-button>
    <b-button variant="link" class="text-warning hp-hover-text-color-warning-3">Warning Button</b-button>
    <b-button variant="link" class="text-black-100 hp-hover-text-color-black-60">Dark Button</b-button>
  </div>
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

const block = `
<template>
  <b-button block variant="primary">Block Level Button</b-button>
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

const pill = `
<template>
  <div>
    <b-button pill variant="primary">Button</b-button>
    <b-button pill variant="danger">Button</b-button>
    <b-button pill variant="outline-danger">Button</b-button>
    <b-button pill variant="warning">Button</b-button>
  </div>
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

const squared = `
<template>
  <div>
    <b-button squared variant="primary">Button</b-button>
    <b-button squared variant="danger">Button</b-button>
    <b-button squared variant="outline-danger">Button</b-button>
    <b-button squared variant="warning">Button</b-button>
  </div>
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

const disabled = `
<template>
  <div>
    <b-button disabled>Primary Button</b-button>
    <b-button disabled variant="primary">
      <i class="ri-arrow-right-s-line remix-icon"></i>
      <span>Primary Button</span>
    </b-button>
    <b-button disabled variant="text">
      <span>Text Button</span>
    </b-button>
  </div>
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

const pressedToggling = `
<template>
  <div>
    <h5>Pressed and un-pressed state</h5>
    <b-button :pressed="true" variant="primary">Always Pressed</b-button>
    <b-button :pressed="false" variant="primary">Not Pressed</b-button>

    <h5 class="mt-3">Toggleable Button</h5>
    <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button>
    <p class="hp-p1-body mt-2">Pressed State: <strong>{{ myToggle }}</strong></p>

    <h5>In a button group</h5>
    <b-button-group size="sm">
    <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.state"
        variant="primary"
    >
        {{ btn.caption }}
    </b-button>
    </b-button-group>
    <p class="hp-p1-body mt-2">Pressed States: <strong>{{ btnStates }}</strong></p>
  </div> 
</template> 

<script>
import { BButton, BButtonGroup } from "bootstrap-vue";

export default {
  data() {
    return {
      myToggle: false,
      buttons: [
        { caption: 'Toggle 1', state: true },
        { caption: 'Toggle 2', state: false },
        { caption: 'Toggle 3', state: true },
        { caption: 'Toggle 4', state: false }
      ],
    };
  },
  components: {
    BButton,
    BButtonGroup,
  },
  computed: {
    btnStates() {
      return this.buttons.map(btn => btn.state)
    }
  },
};
</script>
`

const iconButtons = `
<template>
  <div>
    <div>
      <b-button variant="primary">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
      
      <b-button variant="outline-primary">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>

      <b-button variant="dashed-primary">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
    </div>

    <div>
      <b-button variant="secondary">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
      
      <b-button variant="outline-secondary">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>

      <b-button variant="dashed-secondary">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
    </div>

    <div>
      <b-button variant="danger">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
      
      <b-button variant="outline-danger">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>

      <b-button variant="dashed-danger">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
    </div>

    <div>
      <b-button variant="info">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
      
      <b-button variant="outline-info">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>

      <b-button variant="dashed-info">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
    </div>

    <div>
      <b-button variant="success">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
      
      <b-button variant="outline-success">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>

      <b-button variant="dashed-success">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
    </div>

    <div>
      <b-button variant="warning">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
      
      <b-button variant="outline-warning">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>

      <b-button variant="dashed-warning">
        <i class="ri-search-line remix-icon"></i>
        <span>Search</span>
      </b-button>
    </div>
  </div>
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

const iconOnly = `
<template>
  <div>
    <div>
      <b-button variant="primary" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="primary" class="btn-icon-only rounded-circle">
        <span>Y</span>
      </b-button>

      <b-button variant="outline-primary" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="dashed-primary" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>
      
      <b-button variant="primary" class="btn-icon-only">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>

      <b-button variant="primary" class="btn-icon-only rounded-circle">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>
    </div>

    <div>
      <b-button variant="secondary" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="secondary" class="btn-icon-only rounded-circle">
        <span>Y</span>
      </b-button>

      <b-button variant="outline-secondary" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="dashed-secondary" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>
      
      <b-button variant="secondary" class="btn-icon-only">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>

      <b-button variant="secondary" class="btn-icon-only rounded-circle">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>
    </div>

    <div>
      <b-button variant="danger" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="danger" class="btn-icon-only rounded-circle">
        <span>Y</span>
      </b-button>

      <b-button variant="outline-danger" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="dashed-danger" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>
      
      <b-button variant="danger" class="btn-icon-only">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>

      <b-button variant="danger" class="btn-icon-only rounded-circle">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>
    </div>

    <div>
      <b-button variant="info" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="info" class="btn-icon-only rounded-circle">
        <span>Y</span>
      </b-button>

      <b-button variant="outline-info" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="dashed-info" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>
      
      <b-button variant="info" class="btn-icon-only">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>

      <b-button variant="info" class="btn-icon-only rounded-circle">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>
    </div>

    <div>
      <b-button variant="success" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="success" class="btn-icon-only rounded-circle">
        <span>Y</span>
      </b-button>

      <b-button variant="outline-success" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="dashed-success" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>
      
      <b-button variant="success" class="btn-icon-only">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>

      <b-button variant="success" class="btn-icon-only rounded-circle">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>
    </div>

    <div>
      <b-button variant="warning" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="warning" class="btn-icon-only rounded-circle">
        <span>Y</span>
      </b-button>

      <b-button variant="outline-warning" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>

      <b-button variant="dashed-warning" class="btn-icon-only rounded-circle">
        <i class="ri-search-line remix-icon"></i>
      </b-button>
      
      <b-button variant="warning" class="btn-icon-only">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>

      <b-button variant="warning" class="btn-icon-only rounded-circle">
        <i class="ri-arrow-right-s-line remix-icon"></i>
      </b-button>
    </div>
  </div>
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

const gradient = `
<template>
  <div>
    <b-button variant="primary" class="btn-gradient">
      <span>Primary Button</span>
    </b-button>
    <b-button variant="secondary" class="btn-gradient">
      <span>Secondary Button</span>
    </b-button>
    <b-button variant="danger" class="btn-gradient">
      <span>Danger Button</span>
    </b-button>
    <b-button variant="info" class="btn-gradient">
      <span>Info Button</span>
    </b-button>
    <b-button variant="success" class="btn-gradient">
      <span>Success Button</span>
    </b-button>
    <b-button variant="warning" class="btn-gradient">
      <span>Warning Button</span>
    </b-button>
    <b-button variant="dark" class="btn-gradient">
      <span>Dark Button</span>
    </b-button>
  </div>
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

export default { basic, type, sizing, solidColor, outlineColor, ghostColor, text, link, block, pill, squared, disabled, pressedToggling, iconButtons, iconOnly, gradient }