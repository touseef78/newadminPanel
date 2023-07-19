<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Pressed state and toggling</h4>

        <p class="hp-p1-body">
          Buttons will appear pressed (with a darker background, darker border,
          and inset shadow) when the prop <code>pressed</code> is set to
          <code>true</code>. <br /><br />
          The <code>pressed</code> prop can be set to one of three values:
          <br /><br />

          <ul class="hp-p1-body pl-18 mb-16 hp-list-disc">
            <li><code>true</code>: Sets the <code>.active</code> class and adds the attribute <code>aria-pressed="true"</code>.</li>
            <li><code>false</code>: Clears the <code>.active</code> class and adds the attribute <code>aria-pressed="false"</code>.</li>
            <li><code>null</code>: (default) Neither the class <code>.active</code> nor the attribute <code>aria-pressed</code> will be set.</li>
          </ul>

          To create a button that can be toggled between active and non-active
          states, use the <code>.sync</code> prop modifier (available in Vue
          2.3+) on the <code>pressed</code> property
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
        <h5>Pressed and un-pressed state</h5>
        <b-button class="mb-8 mr-8" :pressed="true" variant="primary">Always Pressed</b-button>
        <b-button class="mb-8 mr-8" :pressed="false" variant="primary">Not Pressed</b-button>

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
            class="mb-8 mr-8"
        >
            {{ btn.caption }}
        </b-button>
        </b-button-group>
        <p class="hp-p1-body mt-2">Pressed States: <strong>{{ btnStates }}</strong></p>
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
import { BRow, BCol, BCard, BButton, BButtonGroup } from "bootstrap-vue";

import code from "./code";

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
      codeText: code.pressedToggling,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BButtonGroup,
  },
  computed: {
    btnStates() {
      return this.buttons.map(btn => btn.state)
    }
  },
  methods: {
    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
