<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        desc="Yoda Components has all ant components helps you create beautiful apps."
      />
    </b-col>

    <b-col cols="12">
      <b-row>
        <b-col
          cols="12"
          md="6"
          :key="index"
          v-for="(item, index) in componentsData"
          class="mb-32"
        >
          <b-card>
            <b-link :to="item.link">
              <b-row align-v="center" align-h="between">
                <b-col class="w-auto">
                  <h5 class="mb-8">{{ item.title }}</h5>
                  <p class="mb-0 hp-p1-body">
                    {{ item.subTitle }}
                  </p>
                </b-col>

                <b-col class="hp-flex-none w-auto">
                  <b-button variant="none" class="rounded-circle btn-icon-only">
                    <i class="ri-arrow-right-s-line remix-icon"></i>
                  </b-button>
                </b-col>
              </b-row>
            </b-link>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard, BLink, BButton } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";

export default {
  data() {
    return {
      componentsData: [
        {
          title: "Style Guide",
          subTitle: "Yoda UI Style with typography and colors",
          link: "/components/general/style-guide",
        },
        {
          title: "Buttons",
          subTitle: "To trigger an operation",
          link: "/components/general/buttons",
        },
        {
          title: "Remix Icons",
          subTitle: "Remix Icon for Yoda Admin Template",
          link: "/components/general/remix-icons",
        },
        {
          title: "Iconly Icons",
          subTitle: "Iconly Icon for Yoda Admin Template",
          link: "/components/general/iconly-icons",
        },
          {
          title: "Breadcrumb",
          subTitle: "Examples of bootstrap breadcrumb",
          link: "/components/navigation/breadcrumb",
        },
        {
          title: "Dropdown",
          subTitle: "Examples of bootstrap dropdown",
          link: "/components/navigation/dropdown",
        },
        {
          title: "Menu",
          subTitle: "Examples of bootstrap menu",
          link: "/components/navigation/menu",
        },
        {
          title: "Pagination",
          subTitle: "Examples of bootstrap pagination",
          link: "/components/navigation/pagination",
        },
        {
          title: "Checkbox",
          subTitle: "Examples of bootstrap checkbox",
          link: "/components/data-entry/checkbox",
        },
        {
          title: "Form",
          subTitle: "Examples of bootstrap form",
          link: "/components/data-entry/form",
        },
        {
          title: "Input",
          subTitle: "Examples of bootstrap input",
          link: "/components/data-entry/input",
        },
        {
          title: "Input Number",
          subTitle: "Examples of bootstrap input number",
          link: "/components/data-entry/input-number",
        },
        {
          title: "Input Group",
          subTitle: "Examples of bootstrap input group",
          link: "/components/data-entry/input-group",
        },
        {
          title: "Radio",
          subTitle: "Examples of bootstrap radio",
          link: "/components/data-entry/radio",
        },
        {
          title: "Select",
          subTitle: "Examples of bootstrap select",
          link: "/components/data-entry/select",
        },
        {
          title: "Slider",
          subTitle: "Examples of bootstrap slider",
          link: "/components/data-entry/slider",
        },
        {
          title: "Switch",
          subTitle: "Examples of bootstrap switch",
          link: "/components/data-entry/switch",
        },
        {
          title: "Avatar",
          subTitle: "Examples of bootstrap avatar",
          link: "/components/data-display/avatar",
        },
        {
          title: "Badge",
          subTitle: "Examples of bootstrap badge",
          link: "/components/data-display/badge",
        },
        {
          title: "Card",
          subTitle: "Examples of bootstrap card",
          link: "/components/data-display/card",
        },
        {
          title: "Carousel",
          subTitle: "Examples of bootstrap carousel",
          link: "/components/data-display/carousel",
        },
        {
          title: "Accordion",
          subTitle: "Examples of bootstrap accordion",
          link: "/components/data-display/accordion",
        },
        {
          title: "Collapse",
          subTitle: "Examples of bootstrap collapse",
          link: "/components/data-display/collapse",
        },
        {
          title: "List",
          subTitle: "Examples of bootstrap list",
          link: "/components/data-display/list",
        },
        {
          title: "Popover",
          subTitle: "Examples of bootstrap popover",
          link: "/components/data-display/popover",
        },
        {
          title: "Table",
          subTitle: "Examples of bootstrap table",
          link: "/components/data-display/table",
        },
        {
          title: "Tabs",
          subTitle: "Examples of bootstrap tabs",
          link: "/components/data-display/tabs",
        },
        {
          title: "Tooltip",
          subTitle: "Examples of bootstrap tooltip",
          link: "/components/data-display/tooltip",
        },
        {
          title: "Alert",
          subTitle: "Examples of bootstrap alert",
          link: "/components/feedback/alert",
        },
        {
          title: "Drawer",
          subTitle: "Examples of bootstrap drawer",
          link: "/components/feedback/drawer",
        },
        {
          title: "Modal",
          subTitle: "Examples of bootstrap modal",
          link: "/components/feedback/modal",
        },
        {
          title: "Notification",
          subTitle: "Examples of bootstrap notification",
          link: "/components/feedback/notification",
        },
        {
          title: "Progress",
          subTitle: "Examples of bootstrap progress",
          link: "/components/feedback/progress",
        },
        {
          title: "Spinner",
          subTitle: "Examples of bootstrap spinner",
          link: "/components/feedback/spinner",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BLink,
    BButton,
    Breadcrumb,
    PageTitle,
  },
};
</script>
