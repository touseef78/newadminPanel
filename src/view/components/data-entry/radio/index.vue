<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        For cross browser consistency,
        <code>&lt;b-form-radio-group&gt;</code> and
        <code>&lt;b-form-radio&gt;</code> uses Bootstrap's custom radio input to
        replace the browser default radio input. It is built on top of semantic
        and accessible markup, so it is a solid replacement for the default
        radio input.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <grouped />
    </b-col>

    <b-col cols="12" class="mb-32">
      <option-field-names />
    </b-col>

    <b-col cols="12" class="mb-32">
      <inline-stacked />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <button-radios />
    </b-col>

    <b-col cols="12" class="mb-32">
      <feedback />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import Grouped from "./Grouped.vue";
import OptionFieldNames from "./OptionFieldNames.vue";
import InlineStacked from "./InlineStacked.vue";
import Sizing from "./Sizing.vue";
import ButtonRadios from "./ButtonRadios.vue";
import Feedback from "./Feedback.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    Grouped,
    OptionFieldNames,
    InlineStacked,
    Sizing,
    ButtonRadios,
    Feedback,
  },
};
</script>
