<template>
  <li>
    <a v-if="item.children" href="javascript:;" :class="`submenu-item${path.split('/')[2] == item.id
        ? (isShow = true + ' active arrow-active')
        : isShow
          ? ' arrow-active'
          : ''
      }`" v-b-toggle="`sub-collapse-${item.id}`" @click="isShow = !isShow">
      <span>
        <i :class="'iconly-' + item.icon"></i>
        <span>{{ item.title }}</span>
      </span>

      <div class="menu-arrow"></div>
    </a>

    <router-link v-else :to="item.navLink" :class="`${path == item.navLink ? 'active' : ''}`">
      <span v-if="collapsed" v-b-tooltip.hover.right="{ customClass: 'sidebar-tooltip' }" :title="item.title">
        <i :class="'iconly-' + item.icon"></i>
        <span>{{ item.title }}</span>
      </span>

      <span v-else>
        <i :class="'iconly-' + item.icon"></i>
        <span>{{ item.title }}</span>
      </span>
    </router-link>

    <b-collapse :class="collapsed ? 'd-none' : ''" :id="`sub-collapse-${item.id}`"
      :visible="path.split('/')[2] == item.id ? true : false">
      <ul v-if="item.children" class="submenu-children" data-level="1">
        <li :key="index" v-for="(item, index) in item.children">
          <a v-if="item.children" href="javascript:;" :class="`submenu-item${path.split('/')[3] == item.id
              ? ' active arrow-active ' + (isShow2 = true)
              : isShow2
                ? ' arrow-active'
                : ''
            }`" v-b-toggle="`sub-collapse-${item.id}`" @click="isShow2 = !isShow2">
            <span>{{ item.title }}</span>
            <div class="menu-arrow"></div>
          </a>

          <a v-else-if="item.target" :href="item.navLink" :target="item.target"
            :class="`${path == item.navLink ? 'active' : ''}`">
            <span>{{ item.title }}</span>
          </a>

          <router-link v-else :to="item.navLink" :class="`${path == item.navLink ? 'active' : ''}`">
            <span>{{ item.title }}</span>
          </router-link>

          <b-collapse :class="collapsed ? 'd-none' : ''" :id="`sub-collapse-${item.id}`"
            :visible="path.split('/')[3] == item.id ? true : false">
            <ul v-if="item.children" class="submenu-children" data-level="2">
              <li :key="index" v-for="(item, index) in item.children">
                <router-link :to="item.navLink" :class="`${path == item.navLink ? 'active' : ''}`">
                  <span>{{ item.title }}</span>
                </router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </b-collapse>
  </li>
</template>

<script>
import { BButton, BCollapse } from "bootstrap-vue";

export default {
  props: ["collapsed", "item"],
  data() {
    return {
      path: "",
      isShow: false,
      isShow2: false,
    };
  },
  components: {
    BButton,
    BCollapse,
  },
  watch: {
    collapsed: function (val) {
      if (val) {
        this.isShow = false;
        this.isShow2 = false;
      }
    },
    $route() {
      this.getRoute();
    },
  },
  created() {
    this.getRoute();
  },
  methods: {
    getRoute() {
      this.path = this.$route.path;
    },
  },
};
</script>
<style>
.arrow-active{
 
  background-color: #EBFAFA !important;
  border-radius: 7px;
    padding: 12px 13px;
    margin: 0 -12px !important;
}
</style>
