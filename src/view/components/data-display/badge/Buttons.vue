<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Buttons</h4>

        <p class="hp-p1-body">
          Badges can be used as part of links or buttons to provide a counter
          (or similar flag).
          <br /><br />
          Note that depending on how they are used, badges may be confusing for
          users of screen readers and similar assistive technologies. While the
          styling of badges provides a visual cue as to their purpose, these
          users will simply be presented with the content of the badge.
          Depending on the specific situation, these badges may seem like random
          additional words or numbers at the end of a sentence, link, or button.
          <br /><br />
          Unless the context is clear (as with the "Notifications" example,
          where it is understood that the "4" is the number of notifications),
          consider including additional context with a visually hidden piece of
          additional text.
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
        <div class="mb-8">
          <b-button variant="primary">
            Notifications
            <b-badge
              class="badge text-white bg-primary-2 hp-bg-dark-primary border-primary ml-8"
            >
              4
            </b-badge>
          </b-button>
        </div>

        <b-button variant="primary">
          Profile
          <b-badge
            class="badge text-white bg-primary-2 hp-bg-dark-primary border-primary ml-8"
          >
            9 <span class="sr-only">unread messages</span>
          </b-badge>
        </b-button>
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
import { BRow, BCol, BCard, BButton, BBadge } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.buttons,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BBadge,
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
