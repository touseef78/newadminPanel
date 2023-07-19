<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Advanced usage</h4>

        <p class="hp-p1-body">
          When using the <code>this.$bvToast.toast(...)</code> method for
          generating toasts, you may want the toast content to be more than just
          a string message. As mentioned in the Toasts on demand section above,
          you can pass arrays of <code>VNodes</code> as the message and title
          for more complex content. <br /><br />
          Remember to keep toast content simple and to the point. Avoid placing
          interactive components or elements inside toasts, as this can cause
          issues for users of assistive technologies. Refer to the Accessibility
          section below.
          <br /><br />
          Below is an example of using Vue's
          <code>this.$createElement()</code> method for generating more complex
          toast content:
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
        <b-button variant="primary" @click="showToast"
          >Show Toast with custom content</b-button
        >
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
import { BRow, BCol, BCard, BButton, BSpinner } from "bootstrap-vue";
import code from "./code";

export default {
  data() {
    return {
      count: 0,
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
        ` message #${this.count} `,
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

    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
