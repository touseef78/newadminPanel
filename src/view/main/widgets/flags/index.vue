<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0">
        You can use flags of this page
        <a
          href="https://catamphetamine.gitlab.io/country-flag-icons/3x2/index.html"
          target="_blank"
          >country-flag-icons</a
        >
      </p>
    </b-col>

    <b-col cols="12">
      <flag-item :propsFlags="flags" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import FlagItem from "./FlagItem.vue";

export default {
  data() {
    return {
      flags: [
        {
          flag: "CH",
          title: "Switzerland",
        },
        {
          flag: "SE",
          title: "Sweden",
        },
        {
          flag: "TR",
          title: "Turkey",
        },
        {
          flag: "ES",
          title: "Spain",
        },
        {
          flag: "GB",
          title: "UK",
        },
        {
          flag: "US",
          title: "USA",
        },
        {
          flag: "NL",
          title: "Netherlands",
        },
        {
          flag: "RO",
          title: "Romania",
        },
        {
          flag: "MN",
          title: "Mongolia",
        },
        {
          flag: "ZA",
          title: "South Africa",
        },
        {
          flag: "UA",
          title: "Ukranie",
        },
        {
          flag: "MX",
          title: "Mexico",
        },
        {
          flag: "IN",
          title: "India",
        },
        {
          flag: "PT",
          title: "Portugal",
        },
        {
          flag: "MD",
          title: "Moldova",
        },
        {
          flag: "IT",
          title: "Italy",
        },
        {
          flag: "BR",
          title: "Brazil",
        },
        {
          flag: "DE",
          title: "Germany",
        },
        {
          flag: "AW",
          title: "Aruba",
        },
        {
          flag: "AX",
          title: "Åland Islands",
        },
        {
          flag: "AZ",
          title: "Azerbaijan",
        },
        {
          flag: "BJ",
          title: "Benin",
        },
        {
          flag: "BB",
          title: "Barbados",
        },
        {
          flag: "BD",
          title: "Bangladesh",
        },
        {
          flag: "GE",
          title: "Georgia",
        },
        {
          flag: "GF",
          title: "French Guiana",
        },
        {
          flag: "GG",
          title: "Guernsey",
        },
        {
          flag: "GH",
          title: "Ghana",
        },
        {
          flag: "GI",
          title: "Gibraltar",
        },
        {
          flag: "GL",
          title: "Greenland",
        },
        {
          flag: "TH",
          title: "Thailand",
        },
        {
          flag: "TJ",
          title: "Tajikistan",
        },
        {
          flag: "TK",
          title: "Tokelau",
        },
        {
          flag: "TL",
          title: "Timor-Leste",
        },
        {
          flag: "TM",
          title: "Turkmenistan",
        },
        {
          flag: "TN",
          title: "Tunisia",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    FlagItem,
  },
};
</script>
