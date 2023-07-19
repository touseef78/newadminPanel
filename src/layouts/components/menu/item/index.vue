<template>
  <li>
    <div class="menu-title">{{ item.header }}</div>

    <ul>
      <sub-menu
        :key="index"
        v-for="(item, index) in item.children"
        :item="item"
        :collapsed="collapsed"
      />
    </ul>
  </li>
</template>

<script>
import SubMenu from "./SubMenu.vue";

export default {
  props: ["collapsed", "sidebarItems", "item"],
  components: {
    SubMenu,
  },
};
</script>
