<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Create various type inputs such as: <code>text</code>,
        <code>password</code>, <code>number</code>, <code>url</code>,
        <code>email</code>, <code>search</code>, <code>date</code> and more. You
        can use <code>&lt;input&gt;</code> tag.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <type />
    </b-col>

    <b-col cols="12" class="mb-32">
      <control-sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <contextual />
    </b-col>

    <b-col cols="12" class="mb-32">
      <contextual-example />
    </b-col>

    <b-col cols="12" class="mb-32">
      <formatter />
    </b-col>

    <b-col cols="12" class="mb-32">
      <datalist-support />
    </b-col>

    <b-col cols="12" class="mb-32">
      <debounce-support />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Type from "./Type.vue";
import ControlSizing from "./ControlSizing.vue";
import Contextual from "./Contextual.vue";
import ContextualExample from "./ContextualExample.vue";
import Formatter from "./Formatter.vue";
import DatalistSupport from "./DatalistSupport.vue";
import DebounceSupport from "./DebounceSupport.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Type,
    ControlSizing,
    Contextual,
    ContextualExample,
    Formatter,
    DatalistSupport,
    DebounceSupport,
  },
};
</script>
