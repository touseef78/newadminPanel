<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>
          Advanced <code>&lt;b-popover&gt;</code> usage with reactive content
        </h4>

        <p class="hp-p1-body">
          You can even make your <code>&lt;b-popover&gt;</code> content
          interactive. Just remember not to use the <code>focus</code> or triggers (use only
          <code>click</code>). <br /><br />
          If you absolutely must use a trigger other than <code>click</code> (or want to
          disable closing of the popover when the trigger element is clicked a
          second time), then you can either:
          <br /><br />

          <ul class="hp-p1-body pl-18 mb-16 hp-list-disc">
            <li>
              Listen for the <code>hide</code> event on the
              <code>&lt;b-popover&gt;</code> element, and call the <code>preventDefault()</code>
              method (when appropriate) on the <code>BvEvent</code> object passed to your <code>hide</code>
              handler;
            </li>

            <li>
              Disable your trigger element (if possible) as soon as the
              popover begins to open (via the <code>show</code> event), and re-enable it when
              appropriate (i.e. via the <code>hide</code> or <code>hidden</code> event).
            </li>
          </ul>

          For practical
          purposes, <strong>interactive content popovers should be minimal.</strong> The maximum
          width of the popover is hard coded by Bootstrap v4 CSS to <code>276px</code>. Tall
          popovers on small screens can be harder to deal with on mobile devices
          (such as smart-phones).
        </p>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <b-button
          @click="codeClick()"
          variant="text"
          class="btn-icon-only show-code-btn"
        >
          <i
            class="ri-code-s-slash-line hp-text-color-black-80 hp-text-color-dark-30 lh-1"
            style="font-size: 16px"
          ></i>
        </b-button>
      </b-col>
    </b-row>

    <b-row>
      <div class="col-12 mt-16">
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

      <div
        v-if="codeActive"
        class="col-12 mt-24 hljs-container"
        :class="{ active: codeActiveClass }"
      >
        <pre v-highlightjs>
          <code class="hljs html">
            {{ codeText }}
          </code>
        </pre>
      </div>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BButton, BPopover, BFormGroup, BFormInput, BFormSelect, BAlert } from "bootstrap-vue";

import code from "./code";

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
      codeText: code.advanced,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
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
      // This handles that check before focusing, assuming a `focus()` method exists
      // We do this in a double `$nextTick()` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          ;(ref.$el || ref).focus()
        })
      })
    },
    
    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
