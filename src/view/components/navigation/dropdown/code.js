const basic = `
<template>
  <div>
    <b-dropdown id="dropdown-1" text="Dropdown Button" variant="primary">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item active>Active action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>

    <b-dropdown id="dropdown-2" text="Dropdown Button" variant="primary">
      <b-dropdown-group id="dropdown-group-1" header="Group 1">
        <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
        <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
      </b-dropdown-group>
      <b-dropdown-group id="dropdown-group-2" header="Group 2">
        <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
        <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
      </b-dropdown-group>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownItemButton, BDropdownGroup, BDropdownDivider } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
    BDropdownItemButton,
    BDropdownGroup,
    BDropdownDivider,
  },
};
</script>
`

const buttonContent = `
<template>
  <div>
    <b-dropdown text="Button text via Prop" variant="primary" class="mb-8 mr-8">
      <b-dropdown-item href="#">An item</b-dropdown-item>
      <b-dropdown-item href="#">Another item</b-dropdown-item>
    </b-dropdown>

    <b-dropdown variant="primary" class="mb-8 mr-8">
      <template #button-content>
        Custom <strong>Content</strong> with <em>HTML</em> via Slot
      </template>
      <b-dropdown-item href="#">An item</b-dropdown-item>
      <b-dropdown-item href="#">Another item</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const menuAlignment = `
<template>
  <div>
    <b-dropdown
      id="dropdown-left"
      text="Left align"
      variant="primary"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown
      id="dropdown-right"
      right
      text="Right align"
      variant="primary"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const drop = `
<template>
  <div>
    <b-dropdown
      id="dropdown-dropup"
      dropup
      text="Drop-Up"
      variant="primary"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown
      id="dropdown-dropright"
      dropright
      text="Drop-Right"
      variant="primary"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown
      id="dropdown-dropleft"
      dropleft
      text="Drop-Left"
      variant="primary"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const offset = `
<template>
  <b-dropdown id="dropdown-offset" offset="25" text="Offset Dropdown" variant="primary">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const split = `
<template>
  <div>
    <b-dropdown
      split
      text="Split Dropdown"
      variant="primary"
      >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>

    <b-dropdown
      split
      split-href="#foo/bar"
      text="Split Link"
      variant="primary"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const sizing = `
<template>
  <div>
    <div>
      <b-dropdown
        size="lg"
        text="Large"
        variant="primary"
      >
        <b-dropdown-item-button>Action</b-dropdown-item-button>
        <b-dropdown-item-button>Another action</b-dropdown-item-button>
        <b-dropdown-item-button>Something else here</b-dropdown-item-button>
      </b-dropdown>

      <b-dropdown
        size="lg"
        split
        text="Large Split"
        variant="primary"
      >
        <b-dropdown-item-button>Action</b-dropdown-item-button>
        <b-dropdown-item-button>Another action</b-dropdown-item-button>
        <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
      </b-dropdown>
    </div>

    <div>
      <b-dropdown
        size="sm"
        text="Small"
        variant="primary"
      >
        <b-dropdown-item-button>Action</b-dropdown-item-button>
        <b-dropdown-item-button>Another action</b-dropdown-item-button>
        <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
      </b-dropdown>

      <b-dropdown
        size="sm"
        split
        text="Small Split"
        variant="primary"
      >
        <b-dropdown-item-button>Action</b-dropdown-item-button>
        <b-dropdown-item-button>Another action</b-dropdown-item-button>
        <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem, BDropdownItemButton } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
    BDropdownItemButton,
  },
};
</script>
`

const variants = `
<template>
  <div>
    <b-dropdown text="Primary" variant="primary">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown text="Success" variant="success">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown text="Outline Danger" variant="outline-danger">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown
      split
      split-variant="outline-primary"
      variant="primary"
      text="Split Variant Dropdown"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const block = `
<template>
  <div>
    <b-dropdown
      text="Block Level Dropdown"
      block
      variant="primary"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>

    <b-dropdown
      text="Block Level Split Dropdown"
      block
      split
      split-variant="outline-primary"
      variant="primary"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>

    <b-dropdown
      text="Block Level Dropdown Menu"
      block
      variant="primary"
      menu-class="w-100"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const hidden = `
<template>
  <b-dropdown
    size="lg"
    variant="link"
    toggle-class="text-decoration-none"
    no-caret
  >
    <template #button-content>
      &#x1f50d;<span class="sr-only">Search</span>
    </template>
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    BDropdown,
    BDropdownItem,
  },
};
</script>
`

const form = `
<template>
  <b-dropdown
    id="dropdown-form"
    text="Dropdown with form"
    ref="dropdown"
    variant ="primary"
  >
    <b-dropdown-form>
      <b-form-group
        label="Email"
        label-for="dropdown-form-email"
        @submit.stop.prevent
      >
        <b-form-input
          id="dropdown-form-email"
          size="sm"
          placeholder="email@example.com"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password" label-for="dropdown-form-password">
        <b-form-input
          id="dropdown-form-password"
          type="password"
          size="sm"
          placeholder="Password"
        ></b-form-input>
      </b-form-group>

      <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
      <b-button variant="primary" size="sm" @click="onClick">
        Sign In
      </b-button>
    </b-dropdown-form>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button>
      New around here? Sign up
    </b-dropdown-item-button>
    <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
  </b-dropdown>
</template>

<script>
import { BButton, BFormGroup, BFormInput, BFormCheckbox, BDropdown, BDropdownForm, BDropdownItemButton, BDropdownDivider } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BDropdown,
    BDropdownForm,
    BDropdownItemButton,
    BDropdownDivider,
  },
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true)
    }
  }
};
</script>
`

export default { basic, buttonContent, menuAlignment, drop, offset, split, sizing, variants, block, hidden, form }