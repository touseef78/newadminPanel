<template>
  <ul class="d-flex flex-wrap align-items-center">
    <li class="px-18" :key="index" v-for="(item, index) in menuItems">
      <b-link
        :class="`px-24 py-10${
          path.split('/')[1] == item.header.toLowerCase() ? ' active' : ''
        }`"
      >
        <span>{{ item.header }}</span>
        <i class="ri-arrow-down-s-line"></i>
      </b-link>

      <ul class="dropdown-menu">
        <li :key="index" v-for="(item, index) in item.children">
          <b-link
            v-if="item.children"
            :class="`dropdown-item${
              path.split('/')[2] == item.id ? ' active' : ''
            }`"
          >
            <span>
              <i :class="`iconly-${item.icon}`"></i>
              <span>{{ item.title }}</span>
            </span>

            <i class="ri-arrow-right-s-line"></i>
          </b-link>

          <b-link
            :class="`${path == item.navLink ? 'active' : ''}`"
            v-else
            :to="item.navLink"
          >
            <span>
              <i :class="`iconly-${item.icon}`"></i>
              <span>{{ item.title }}</span>
            </span>
          </b-link>

          <ul v-if="item.children" class="dropdown-menu">
            <li
              class="dropend"
              :key="index"
              v-for="(item, index) in item.children"
            >
              <b-link
                v-if="item.children"
                :class="`dropdown-item${
                  path.split('/')[3] == item.id ? ' active' : ''
                }`"
              >
                <span>{{ item.title }}</span>

                <i class="ri-arrow-right-s-line"></i>
              </b-link>

              <b-link
                v-else-if="item.target"
                :href="item.navLink"
                :class="`${path == item.navLink ? ' active' : ''}`"
                :target="item.target"
              >
                <span>{{ item.title }}</span>
              </b-link>

              <b-link
                v-else
                :to="item.navLink"
                :class="`${path == item.navLink ? ' active' : ''}`"
              >
                <span>{{ item.title }}</span>
              </b-link>

              <ul v-if="item.children" class="dropdown-menu">
                <li :key="index" v-for="(item, index) in item.children">
                  <b-link
                    :to="item.navLink"
                    :class="`${path == item.navLink ? ' active' : ''}`"
                  >
                    <span>{{ item.title }}</span>
                  </b-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { BRow, BCol, BLink } from "bootstrap-vue";

import navigation from "../../../../navigation";

export default {
  data() {
    return {
      path: "",
      menuItems: navigation,
    };
  },
  components: {
    BRow,
    BCol,
    BLink,
  },
  watch: {
    $route() {
      this.getRoute();
    },
  },
  methods: {
    getRoute() {
      this.path = this.$route.path;
    },
  },
  created() {
    this.getRoute();
  },
};
</script>
