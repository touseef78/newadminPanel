const basic = `
<template>
  <div>
    <b-button
      variant="primary"
      v-b-popover.hover.top="'I am popover directive content!'"
      title="Popover Title"
    >
      Hover Me
    </b-button>

    <b-button variant="primary" id="popover-target-1"> Hover Me </b-button>
    <b-popover target="popover-target-1" triggers="hover" placement="top">
      <template #title>Popover Title</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>
</template>

<script>
import { BButton, BPopover } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BPopover,
  },
};
</script>
`

const positioning = `
<template>
  <div>
    <b-row class="mx-n4">
      <b-col
        v-for="placement in placements"
        :key="placement"
        class="hp-flex-none w-auto p-4"
      >
        <b-button :id="\`popover-1-\${placement}\`" variant="primary">{{
          placement
        }}</b-button>

        <b-popover
          :target="\`popover-1-\${placement}\`"
          :placement="placement"
          title="Popover!"
          triggers="hover focus"
          :content="\`Placement \${placement}\`"
        ></b-popover>
      </b-col>
    </b-row>

    <p class="hp-p1-body mt-3 mb-2">Content via properties or slots</p>

    <b-row class="mx-n4">
      <b-col md="6" class="hp-flex-none w-auto p-4">
        <b-button id="popover-2" variant="primary"
          >Using properties</b-button
        >
        <b-popover
          target="popover-2"
          title="Prop Examples"
          triggers="hover focus"
          content="Embedding content using properties is easy"
        ></b-popover>
      </b-col>

      <b-col md="6" class="hp-flex-none w-auto p-4">
        <b-button id="popover-3" variant="primary">Using slots</b-button>
        <b-popover target="popover-3" triggers="hover focus">
          <template #title>Content via Slots</template>
          Embedding content
          <span class="text-danger">using slots</span> affords you
          <em>greater <strong>control.</strong></em> and basic HTML support.
        </b-popover>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BButton, BPopover } from "bootstrap-vue";

export default {
  data() {
    return {
      placements: [
        "topright",
        "top",
        "topleft",
        "bottomright",
        "bottom",
        "bottomleft",
        "righttop",
        "right",
        "lefttop",
        "rightbottom",
        "left",
        "leftbottom",
      ],
    };
  },
  components: {
    BButton,
    BPopover,
  },
};
</script>
`

const variants = `
<template>
  <div>
    <b-button variant="primary" id="popover-button-variant-primary">
      Button
    </b-button>

    <b-popover
      target="popover-button-variant-primary"
      variant="primary"
      triggers="focus"
    >
      <template #title>Primary</template>
      Primary variant popover
    </b-popover>

    <b-button variant="secondary" id="popover-button-variant-secondary">
      Button
    </b-button>

    <b-popover
      target="popover-button-variant-secondary"
      variant="secondary"
      triggers="focus"
    >
      <template #title>Secondary</template>
      Secondary variant popover
    </b-popover>

    <b-button variant="danger" id="popover-button-variant-danger">
      Button
    </b-button>

    <b-popover
      target="popover-button-variant-danger"
      variant="danger"
      triggers="focus"
    >
      <template #title>Danger</template>
      Danger variant popover
    </b-popover>

    <b-button variant="warning" id="popover-button-variant-warning">
      Button
    </b-button>

    <b-popover
      target="popover-button-variant-warning"
      variant="warning"
      triggers="focus"
    >
      <template #title>Warning</template>
      Warning variant popover
    </b-popover>

    <b-button variant="success" id="popover-button-variant-success">
      Button
    </b-button>

    <b-popover
      target="popover-button-variant-success"
      variant="success"
      triggers="focus"
    >
      <template #title>Success</template>
      Success variant popover
    </b-popover>

    <b-button variant="info" id="popover-button-variant-info">
      Button
    </b-button>

    <b-popover
      target="popover-button-variant-info"
      variant="info"
      triggers="focus"
    >
      <template #title>Info</template>
      Info variant popover
    </b-popover>
  </div>
</template>

<script>
import { BButton, BPopover } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BPopover,
  },
};
</script>
`

const showAndHide = `
<template>
  <div>
    <b-button id="popover-button-sync" variant="primary" class="mb-8 mr-8">
      I have a popover
    </b-button>

    <div class="mt-4">
      <b-button
        variant="outline-primary"
        class="mb-8 mr-8"
        @click="show = !show"
      >
        Toggle Popover
      </b-button>
    </div>

    <b-popover
      :show.sync="show"
      target="popover-button-sync"
      title="Popover"
      placement="top"
    >
      Hello <strong>World!</strong>
    </b-popover>
  </div>
</template>

<script>
import { BButton, BPopover } from "bootstrap-vue";

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    BButton,
    BPopover,
  },
};
</script>
`

const openAndClose = `
<template>
  <div>
    <b-button id="popover-button-event" variant="primary" class="mb-8 mr-8">
      I have a popover
    </b-button>

    <div class="mt-4">
      <b-button variant="outline-primary" class="mb-8 mr-8" @click="onOpen">
        Open
      </b-button>

      <b-button variant="outline-primary" class="mb-8 mr-8" @click="onClose">
        Close
      </b-button>
    </div>

    <b-popover ref="popover" target="popover-button-event" title="Popover">
      Hello <strong>World!</strong>
    </b-popover>
  </div>
</template>

<script>
import { BButton, BPopover } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BPopover,
  },
  methods: {
    onOpen() {
      this.$refs.popover.$emit("open");
    },
    onClose() {
      this.$refs.popover.$emit("close");
    },
  },
};
</script>
`

const startOpen = `
<template>
  <div>
    <b-button id="popover-button-open" variant="primary">Button</b-button>

    <b-popover show target="popover-button-open" title="Popover">
      I start <strong>open</strong>
    </b-popover>
  </div>
</template>

<script>
import { BButton, BPopover } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BPopover,
  },
};
</script>
`

const disabling = `
<template>
  <div>
    <b-button id="popover-button-disable-event" variant="primary">
      I have a popover
    </b-button>

    <div class="mt-12">
      <b-button
        variant="outline-primary"
        class="mb-8 mr-8"
        @click="onEnable"
      >
        Enable
      </b-button>

      <b-button
        variant="outline-primary"
        class="mb-8 mr-8"
        @click="onDisable"
      >
        Disable
      </b-button>
    </div>

    <b-popover
      ref="popover"
      target="popover-button-disable-event"
      title="Popover"
    >
      Hello <strong>World!</strong>
    </b-popover>
  </div>
</template>

<script>
import { BButton, BPopover } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BPopover,
  },
  methods: {
    onEnable() {
      this.$refs.popover.$emit("enable");
    },
    onDisable() {
      this.$refs.popover.$emit("disable");
    },
  },
};
</script>
`

const advanced = `
<template>
  <div>
    <!-- Our triggering (target) element -->
    <b-button id="popover-reactive-1" variant="primary" ref="button">
      Reactive Content Using Slots
    </b-button>

    <!-- Output from the popover interaction -->
    <b-card title="Returned values:" v-if="input1Return && input2Return">
      <p class="card-text" style="max-width: 20rem;">
        Name: <strong>{{ input1Return }}</strong><br>
        Color: <strong>{{ input2Return }}</strong>
      </p>
    </b-card>

    <!-- Our popover title and content render container -->
    <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
    <!-- We specify the same container as the trigger button, so that popover is close to button -->
    <b-popover
      target="popover-reactive-1"
      triggers="click"
      :show.sync="popoverShow"
      placement="auto"
      container="my-container"
      ref="popover"
      @show="onShow"
      @shown="onShown"
      @hidden="onHidden"
    >
      <template #title>
        <div class="px-8 d-flex align-items-center justify-content-between">
          Interactive Content

          <b-button @click="onClose" class="close" aria-label="Close" variant="none">
            <span class="d-inline-block" aria-hidden="true">&times;</span>
          </b-button>
        </div>
      </template>

      <div class="p-8">
        <b-form-group
          label="Name"
          label-for="popover-input-1"
          label-cols="3"
          :state="input1state"
          class="mb-12"
          description="Enter your name"
          invalid-feedback="This field is required"
        >
          <b-form-input
            ref="input1"
            id="popover-input-1"
            v-model="input1"
            :state="input1state"
            size="sm"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Color"
          label-for="popover-input-2"
          label-cols="3"
          :state="input2state"
          class="mb-1"
          description="Pick a color"
          invalid-feedback="This field is required"
        >
          <b-form-select
            id="popover-input-2"
            v-model="input2"
            :state="input2state"
            :options="options"
            size="sm"
          ></b-form-select>
        </b-form-group>

        <b-alert show class="small mt-16" variant="primary">
          <strong>Current Values:</strong><br>
          Name: <strong>{{ input1 }}</strong><br>
          Color: <strong>{{ input2 }}</strong>
        </b-alert>

        <b-button @click="onClose" size="sm" variant="danger" class="mr-8 mb-8">Cancel</b-button>
        <b-button @click="onOk" size="sm" variant="primary" class="mr-8 mb-8">Ok</b-button>
      </div>
    </b-popover>
  </div>
</template>

<script>
import { BCard, BButton, BPopover, BFormGroup, BFormInput, BFormSelect, BAlert } from "bootstrap-vue";

export default {
  data() {
    return {
      input1: '',
      input1state: null,
      input2: '',
      input2state: null,
      options: [{ text: '- Choose 1 -', value: '' }, 'Red', 'Green', 'Blue'],
      input1Return: '',
      input2Return: '',
      popoverShow: false,
    };
  },
  components: {
    BCard,
    BButton,
    BPopover,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BAlert,
  },
  watch: {
    input1(val) {
      if (val) {
        this.input1state = true
      }
    },
    input2(val) {
      if (val) {
        this.input2state = true
      }
    }
  },
  methods: {
    onClose() {
      this.popoverShow = false
    },
    onOk() {
      if (!this.input1) {
        this.input1state = false
      }
      if (!this.input2) {
        this.input2state = false
      }
      if (this.input1 && this.input2) {
        this.onClose()
        // Return our popover form results
        this.input1Return = this.input1
        this.input2Return = this.input2
      }
    },
    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.input1 = ''
      this.input2 = ''
      this.input1state = null
      this.input2state = null
      this.input1Return = ''
      this.input2Return = ''
    },
    onShown() {
      // Called just after the popover has been shown
      // Transfer focus to the first input
      this.focusRef(this.$refs.input1)
    },
    onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button)
    },
    focusRef(ref) {
      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a \`focus()\` method exists
      // We do this in a double \`$nextTick()\` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          ;(ref.$el || ref).focus()
        })
      })
    },
  },
};
</script>
`

export default { basic, positioning, variants, showAndHide, openAndClose, startOpen, disabling, advanced }