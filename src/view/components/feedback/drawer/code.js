const basic = `
<template>
  <div>
    <b-button variant="primary" v-b-toggle.sidebar-1>
      Toggle Sidebar
    </b-button>

    <b-sidebar id="sidebar-1" shadow bg-variant="white" no-header body-class="pt-16">
      <template #default="{ hide }">
        <div class="d-flex align-items-center justify-content-between mb-16 pb-24">
          <span class="font-weight-normal d-flex h5 mb-0">Title</span>

          <b-button
            variant="text"
            class="btn-close bg-transparent p-0 d-flex align-items-center justify-content-center"
            @click="hide"
          >
            <i
              class="ri-close-line hp-text-color-dark-0 lh-1"
              style="font-size: 24px"
            ></i>
          </b-button>
        </div>

        <p class="hp-p1-body">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros.
        </p>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { BButton, BSidebar } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BSidebar,
  },
};
</script>
`

const placement = `
<template>
  <div>
    <b-button variant="primary" v-b-toggle.sidebar-right>
      Toggle Sidebar
    </b-button>

    <b-sidebar
      id="sidebar-right"
      right
      shadow
      bg-variant="white"
      no-header
      body-class="pt-16"
    >
      <template #default="{ hide }">
        <div class="d-flex align-items-center justify-content-between mb-16 pb-24">
          <span class="font-weight-normal d-flex h5 mb-0">Title</span>

          <b-button
            variant="text"
            class="btn-close bg-transparent p-0 d-flex align-items-center justify-content-center"
            @click="hide"
          >
            <i
              class="ri-close-line hp-text-color-dark-0 lh-1"
              style="font-size: 24px"
            ></i>
          </b-button>
        </div>

        <p class="hp-p1-body">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros.
        </p>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { BButton, BSidebar } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BSidebar,
  },
};
</script>
`

const hiding = `
<template>
  <div>
    <b-button variant="primary" v-b-toggle.sidebar-no-header>
      Toggle Sidebar
    </b-button>

    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      bg-variant="white"
      body-class="pt-16"
    >
      <template #default="{ hide }">
        <h5 id="sidebar-no-header-title" class="mb-16 pb-24">Custom header sidebar</h5>

        <p class="hp-p1-body">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros.
        </p>

        <b-button variant="primary" block @click="hide">
          Close Sidebar
        </b-button>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { BButton, BSidebar } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BSidebar,
  },
};
</script>
`

const backdrop = `
<template>
  <div>
    <b-button variant="primary" v-b-toggle.sidebar-backdrop>
      Toggle Sidebar
    </b-button>

    <b-sidebar
      id="sidebar-backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
      bg-variant="white"
      no-header
      body-class="pt-16"
    >
      <template #default="{ hide }">
        <div
          class="d-flex align-items-center justify-content-between mb-16 pb-24"
        >
          <span class="font-weight-normal d-flex h5 mb-0">Sidebar with backdrop</span>

          <b-button
            variant="text"
            class="btn-close bg-transparent p-0 d-flex align-items-center justify-content-center"
            @click="hide"
          >
            <i
              class="ri-close-line hp-text-color-dark-0 lh-1"
              style="font-size: 24px"
            ></i>
          </b-button>
        </div>

        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
          <b-form-select
            id="backdrop-variant"
            v-model="variant"
            :options="variants"
          ></b-form-select>
        </b-form-group>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { BButton, BSidebar, BFormGroup, BFormSelect } from "bootstrap-vue";

export default {
  data() {
    return {
      variant: "dark",
      variants: [
        "transparent",
        "white",
        "light",
        "dark",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
    };
  },
  components: {
    BButton,
    BSidebar,
    BFormGroup,
    BFormSelect,
  },
};
</script>
`

export default { basic, placement, hiding, backdrop }