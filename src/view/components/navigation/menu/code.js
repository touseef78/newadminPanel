const basic = `
<template>
  <b-navbar toggleable="lg" variant="light" class="rounded hp-bg-dark-90">
    <b-navbar-brand href="#">
      <img
        v-bind:src="require('@/assets/img/logo/logo-small.svg')"
        alt="Logo"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
        <b-nav-item-dropdown text="Dropdown">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>

          <b-button variant="outline-primary" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BButton, BNavForm, BFormInput, BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavItemDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BNavForm,
    BFormInput,
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbarNav,
    BNavItem,
    BCollapse,
    BNavItemDropdown,
    BDropdownItem,
  },
};
</script>
`

const textContent = `
<template>
  <b-navbar toggleable="sm" type="light" variant="light" class="rounded hp-bg-dark-90">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>Yoda</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>Yoda</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template> 

<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavText, BCollapse } from "bootstrap-vue";

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbarNav,
    BNavText,
    BCollapse,
  },
};
</script>
`

const custom = `
<template>
  <b-navbar toggleable type="dark" variant="dark" class="rounded hp-bg-dark-85">
    <b-navbar-brand href="#">Yoda</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto text-white">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled class="text-black-80">Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavbarNavItem, BCollapse } from "bootstrap-vue";

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbarNav,
    BNavbarNavItem,
    BCollapse,
  },
};
</script>
`

export default { basic, textContent, custom }