const basic = `
<template>
  <div>
    <b-button variant="primary" @click="$bvToast.show('example-toast')">
      Show toast
    </b-button>

    <b-toast
      id="example-toast"
      :visible="true"
      static
      no-auto-hide
      no-close-button
    >
      <template #toast-title>
        <div class="d-flex align-items-center justify-content-between w-100">
          <div class="d-flex align-items-center">
            <img
              v-bind:src="require('@/assets/img/logo/logo-small.svg')"
              class="mr-8"
              alt="Logo"
              height="32"
            />
            <strong>Yoda</strong>
          </div>

          <div class="d-flex align-items-center">
            <small>11 mins ago</small>
            <b-button
              variant="text"
              class="p-0 ml-8 bg-transparent"
              @click="$bvToast.hide('example-toast')"
            >
              <i
                class="ri-close-line hp-text-color-dark-0 lh-1"
                style="font-size: 24px"
              ></i>
            </b-button>
          </div>
        </div>
      </template>
      
      <span>Hello, world! This is a toast message.</span>
    </b-toast>
  </div>
</template>

<script>
import { BButton, BToast } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BToast,
  },
};
</script>
`

const onDemand = `
<template>
  <div>
    <b-button variant="primary" @click="makeToast()">Show Toast</b-button>
    <b-button variant="primary" @click="makeToast(true)">Show Toast (appended)</b-button>
  </div>
</template>

<script>
import { BButton, BToast } from "bootstrap-vue";

export default {
  data() {
    return {
      toastCount: 0,
    };
  },
  components: {
    BButton,
    BToast,
  },
  methods: {
     makeToast(append = false) {
      this.toastCount++
      this.$bvToast.toast('This is toast number ' + this.toastCount, {
        title: 'Yoda',
        autoHideDelay: 5000,
        appendToast: append
      })
    },
  },
};
</script>
`

const variants = `
<template>
  <div>
    <b-button variant="primary" @click="makeToast('primary')">Primary</b-button>
    <b-button variant="secondary" @click="makeToast('secondary')">Secondary</b-button>
    <b-button variant="danger" @click="makeToast('danger')">Danger</b-button>
    <b-button variant="warning" @click="makeToast('warning')">Warning</b-button>
    <b-button variant="success" @click="makeToast('success')">Success</b-button>
    <b-button variant="info" @click="makeToast('info')">Info</b-button>
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  components: {
    BButton,
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: \`Variant \${variant || "default"}\`,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>
`

const target = `
<template>
  <div>
    <b-button variant="primary" @click="toast('b-toaster-top-right')">b-toaster-top-right</b-button>
    <b-button variant="primary" @click="toast('b-toaster-top-left')">b-toaster-top-left</b-button>
    <b-button variant="primary" @click="toast('b-toaster-top-center')">b-toaster-top-center</b-button>
    <b-button variant="primary" @click="toast('b-toaster-top-full')">b-toaster-top-full</b-button>
    <b-button variant="primary" @click="toast('b-toaster-bottom-right', true)">b-toaster-bottom-right</b-button>
    <b-button variant="primary" @click="toast('b-toaster-bottom-left', true)">b-toaster-bottom-left</b-button>
    <b-button variant="primary" @click="toast('b-toaster-bottom-center', true)">b-toaster-bottom-center</b-button>
    <b-button variant="primary" @click="toast('b-toaster-bottom-full', true)">b-toaster-bottom-full</b-button>
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  components: {
    BButton,
  },
  methods: {
    toast(toaster, append = false) {
      this.counter++
      this.$bvToast.toast(\`Toast \${this.counter} body content\`, {
        title: \`Toaster \${toaster}\`,
        toaster: toaster,
        solid: true,
        appendToast: append
      })
    },
  },
};
</script>
`

const links = `
<template>
  <b-button variant="primary" @click="toast()">Toast with link</b-button>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  components: {
    BButton,
  },
  methods: {
    toast() {
      this.$bvToast.toast(\`Toast with action link\`, {
        href: "#links",
        title: "Example",
      });
    },
  },
};
</script>
`

const advanced = `
<template>
  <b-button variant="primary" @click="showToast">Show Toast with custom content</b-button >
</template>

<script>
import { BButton, BSpinner } from "bootstrap-vue";

export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    BButton,
    BSpinner,
  },
  methods: {
    showToast() {
      // Use a shorter name for this.$createElement
      const h = this.$createElement;
      // Increment the toast count
      this.count++;
      // Create the message
      const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
        h("b-spinner", { props: { type: "grow", small: true } }),
        " Flashy ",
        h("strong", "toast"),
        \` message #\${this.count} \`,
        h("b-spinner", { props: { type: "grow", small: true } }),
      ]);
      // Create the title
      const vNodesTitle = h(
        "div",
        { class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"] },
        [
          h("strong", { class: "mr-2" }, "The Title"),
          h("small", { class: "ml-auto text-italics" }, "5 minutes ago"),
        ]
      );
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: "primary",
      });
    },
  },
};
</script>
`

export default { basic, onDemand, variants, target, links, advanced }