<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        desc="BootstrapVue form component and helper components that optionally support inline form styles and validation states. Pair them up with other BootstrapVue form control components for an easy customized, and responsive, layout with a consistent look and feel." />
    </b-col>

    <b-col cols="12" class="mb-32">
      <introduction />
    </b-col>

    <b-col cols="12" class="mb-32">
      <inline />
    </b-col>

    <b-col cols="12" class="mb-32">
      <form-text />
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
import Introduction from "./Introduction.vue";

import Inline from "./Inline.vue";
import FormText from "./FormText.vue";
import Feedback from "./Feedback.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Introduction,
    Inline,
    FormText,
    Feedback,
  },
};
</script>
