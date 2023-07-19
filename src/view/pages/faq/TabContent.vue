<template>
  <b-col cols="12">
    <b-tabs v-model="propsTabIndex.index" nav-class="d-none">
      <b-tab :key="index" v-for="(item, index) in data">
        <b-row>
          <b-col
            cols="12"
            md="6"
            :key="index"
            v-for="(item, index) in item.accordion"
            class="mb-32"
          >
            <div class="accordion" role="tablist">
              <b-card no-body :key="index" v-for="(item, index) in item.list" class="border-black-60 hp-border-color-dark-80">
                <b-card-header
                  header-tag="header"
                  class="p-0 bg-transparent border-black-60 hp-border-color-dark-80"
                  role="tab"
                >
                  <div v-b-toggle="item.id" class="p-32">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center mr-16">
                        <p class="hp-p1-body mb-0">
                          {{ item.title }}
                        </p>

                        <b-badge
                          variant="primary"
                          class="badge bg-primary-4 hp-bg-dark-primary border border-primary text-primary ml-16"
                        >
                          Tag
                        </b-badge>
                      </div>

                      <i
                        class="ri-arrow-right-s-line arrow-item hp-transition text-black-60"
                        style="font-size: 20px"
                      ></i>
                    </div>
                  </div>
                </b-card-header>

                <b-collapse
                  :id="item.id"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <p class="hp-p1-body mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque
                      vel leo diam. Class aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos.
                      Integer sit amet nisi eu nisi tincidunt facilisis. Sed
                      mollis nisl dui, a sodales massa sodales sit amet. Sed
                      nisl est, volutpat sed feugiat non, maximus id orci. Fusce
                      placerat congue nulla, a consectetur massa hendrerit a.
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-col>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BBadge,
  BCollapse,
  BTabs,
  BTab,
} from "bootstrap-vue";

import dataJson from "./data.json";

export default {
  props: ["propsTabIndex"],
  data() {
    return {
      data: dataJson,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BBadge,
    BCollapse,
    BTabs,
    BTab,
  },
};
</script>
