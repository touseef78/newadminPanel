const basic = `
<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
import { BBreadcrumb } from "bootstrap-vue";

export default {
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          to: { name: "home" },
        },
        {
          text: "Library",
          active: true,
        },
      ],
    };
  },
  components: {
    BBreadcrumb,
  },
};
</script>
`

const manually = `
<template>
  <b-breadcrumb>
    <b-breadcrumb-item href="#home">Home</b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
    <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
    <b-breadcrumb-item active>Baz</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue";

export default {
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
  },
};
</script>
`

export default { basic, manually }