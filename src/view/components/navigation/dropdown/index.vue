<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format." />
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <button-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <menu-alignment />
    </b-col>

    <b-col cols="12" class="mb-32">
      <drop />
    </b-col>

    <b-col cols="12" class="mb-32">
      <offset />
    </b-col>

    <b-col cols="12" class="mb-32">
      <split />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <block />
    </b-col>

    <b-col cols="12" class="mb-32">
      <hidden />
    </b-col>

    <b-col cols="12" class="mb-32">
      <dropdown-form />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import ButtonContent from "./ButtonContent.vue";
import MenuAlignment from "./MenuAlignment.vue";
import Drop from './Drop.vue';
import Offset from './Offset.vue';
import Split from './Split.vue';
import Sizing from './Sizing.vue';
import Variants from './Variants.vue';
import Block from './Block.vue';
import Hidden from './Hidden.vue';
import DropdownForm from './DropdownForm.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    ButtonContent,
    MenuAlignment,
    Drop,
    Offset,
    Split,
    Sizing,
    Variants,
    Block,
    Hidden,
    DropdownForm,
  },
};
</script>
