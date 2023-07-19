const basic = `
<template>
  <div>
    <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!

      <template #dismiss>
        <span></span>
      </template>
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p class="mb-0">This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      
      <template #dismiss>
        <span></span>
      </template>
    </b-alert>

    <b-button @click="showAlert" variant="primary">Show alert with count-down timer</b-button>
    <b-button @click="showDismissibleAlert = true" variant="primary">Show dismissible alert ({{ showDismissibleAlert ? "visible" : "hidden" }}) </b-button>
  </div>
</template>

<script>
import { BButton, BAlert } from "bootstrap-vue";

export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  components: {
    BButton,
    BAlert,
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
`

const variant = `
<template>
  <div>
    <b-alert show variant="primary">Primary Alert</b-alert>
    <b-alert show variant="secondary">Secondary Alert</b-alert>
    <b-alert show variant="success">Success Alert</b-alert>
    <b-alert show variant="danger">Danger Alert</b-alert>
    <b-alert show variant="warning">Warning Alert</b-alert>
    <b-alert show variant="info">Info Alert</b-alert>
    <b-alert show variant="light">Light Alert</b-alert>
    <b-alert show variant="dark">Dark Alert</b-alert>
  </div>
</template>

<script>
import { BAlert } from "bootstrap-vue";

export default {
  components: {
    BAlert,
  },
};
</script>
`

const additionalContent = `
<template>
  <b-alert show variant="info">
    <h4 class="alert-heading">Well done!</h4>
    <p>
      Aww yeah, you successfully read this important alert message. This
      example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p class="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things
      nice and tidy.
    </p>
  </b-alert>
</template>

<script>
import { BAlert } from "bootstrap-vue";

export default {
  components: {
    BAlert,
  },
};
</script>
`

const links = `
<template>
  <div>
    <b-alert show variant="primary"><a href="#" class="alert-link">Primary Alert</a></b-alert>
    <b-alert show variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></b-alert>
    <b-alert show variant="success"><a href="#" class="alert-link">Success Alert</a></b-alert>
    <b-alert show variant="danger"><a href="#" class="alert-link">Danger Alert</a></b-alert>
    <b-alert show variant="warning"><a href="#" class="alert-link">Warning Alert</a></b-alert>
    <b-alert show variant="info"><a href="#" class="alert-link">Info Alert</a></b-alert>
    <b-alert show variant="light"><a href="#" class="alert-link">Light Alert</a></b-alert>
    <b-alert show variant="dark"><a href="#" class="alert-link">Dark Alert</a></b-alert>
  </div>
</template>

<script>
import { BAlert } from "bootstrap-vue";

export default {
  components: {
    BAlert,
  },
};
</script>
`

const dismissible = `
<template>
  <b-alert show dismissible>
    Dismissible Alert! Click the close button over there <b>&rArr;</b>

    <template #dismiss>
      <span></span>
    </template>
  </b-alert>
</template>

<script>
import { BAlert } from "bootstrap-vue";

export default {
  components: {
    BAlert,
  },
};
</script>
`

const autoDismissing = `
<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...

      <template #dismiss>
        <span></span>
      </template>
    </b-alert>

    <b-button @click="showAlert" variant="primary">
      Show alert with count-down timer
    </b-button>
  </div>
</template>

<script>
import { BButton, BAlert } from "bootstrap-vue";

export default {
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },
  components: {
    BButton,
    BAlert,
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
`

const fading = `
<template>
  <div>
    <b-alert show dismissible fade>
      Dismissible Alert!
      
      <template #dismiss>
        <span></span>
      </template>
    </b-alert>

    <b-alert
      variant="danger"
      dismissible
      fade
      :show="showDismissibleAlert"
      @dismissed="showDismissibleAlert = false"
    >
      Dismissible Alert!

      <template #dismiss>
        <span></span>
      </template>
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="warning"
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...

      <template #dismiss>
        <span></span>
      </template>
    </b-alert>

    <b-button @click="showAlert" variant="primary" class="mr-8 mb-8">
      Show alert with count-down timer
    </b-button>

    <b-button @click="showDismissibleAlert = true" variant="primary" class="mr-8 mb-8">
      Show dismissible alert ({{
        showDismissibleAlert ? "visible" : "hidden"
      }})
    </b-button>
  </div>
</template>

<script>
import { BButton, BAlert } from "bootstrap-vue";

export default {
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  components: {
    BButton,
    BAlert,
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
`

export default { basic, variant, additionalContent, links, dismissible, autoDismissing, fading }