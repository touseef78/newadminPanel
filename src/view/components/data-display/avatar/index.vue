<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        Avatars are a BootstrapVue custom component, and are typically used to
        display a user profile as a picture, an icon, or short text.
        <code>&lt;b-avatar&gt;</code> provides several props for customizing its
        appearance such as color variant and roundness, and optionally supports
        acting as a button, link or
        <a
          href="https://bootstrap-vue.org/docs/reference/router-links"
          target="_blank"
          ><strong>router link</strong></a
        >.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <image-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <icon-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <text-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <square />
    </b-col>

    <b-col cols="12" class="mb-32">
      <rounding />
    </b-col>

    <b-col cols="12" class="mb-32">
      <button-avatar />
    </b-col>

    <b-col cols="12" class="mb-32">
      <link-avatar />
    </b-col>

    <b-col cols="12" class="mb-32">
      <badge />
    </b-col>

    <b-col cols="12" class="mb-32">
      <badge-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <badge-positioning />
    </b-col>

    <b-col cols="12" class="mb-32">
      <group />
    </b-col>

    <b-col cols="12" class="mb-32">
      <group-overlap />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import Basic from "./Basic.vue";
import ImageContent from "./imageContent.vue";
import IconContent from "./iconContent.vue";
import TextContent from './textContent.vue';
import Variants from './Variants.vue';
import Sizing from './Sizing.vue';
import Square from './Square.vue';
import Rounding from './Rounding.vue';
import ButtonAvatar from './ButtonAvatar.vue';
import LinkAvatar from './LinkAvatar.vue';
import Badge from './Badge.vue';
import BadgeContent from './BadgeContent.vue';
import BadgePositioning from './BadgePositioning.vue';
import Group from './Group.vue';
import GroupOverlap from './GroupOverlap.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    Basic,
    ImageContent,
    IconContent,
    TextContent,
    Variants,
    Sizing,
    Square,
    Rounding,
    ButtonAvatar,
    LinkAvatar,
    Badge,
    BadgeContent,
    BadgePositioning,
    Group,
    GroupOverlap,
  },
}
</script>
