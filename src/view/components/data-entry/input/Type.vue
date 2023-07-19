<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Input type</h4>

        <p class="hp-p1-body">
          <code>&lt;b-form-input&gt;</code> defaults to a
          <code>text</code> input, but you can set the <code>type</code> prop to
          one of the supported native browser HTML5 types: <code>text</code>,
          <code>password</code>, <code>email</code>, <code>number</code>,
          <code>url</code>, <code>tel</code>, <code>search</code>,
          <code>date</code>, <code>datetime</code>, <code>datetime-local</code>,
          <code>month</code>, <code>week</code>, <code>time</code> or
          <code>color</code>.
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
        <b-row class="mb-16" v-for="type in types" :key="type">
          <b-col sm="3">
            <label :for="`type-${type}`">
              Type <code>{{ type }}</code>:
            </label>
          </b-col>

          <b-col sm="9">
            <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
          </b-col>
        </b-row>
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
import { BRow, BCol, BCard, BButton, BFormInput } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      types: [
        'text',
        'number',
        'email',
        'password',
        'search',
        'url',
        'tel',
        'date',
        'time',
        'color'
      ],
      codeText: code.type,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BFormInput,
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
