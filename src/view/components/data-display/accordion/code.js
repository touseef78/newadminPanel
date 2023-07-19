const basic = `
<template>
  <div class="accordion" role="tablist">
    <b-card no-body>
      <b-card-header
        header-tag="header"
        class="p-0 bg-transparent"
        role="tab"
      >
        <div v-b-toggle.accordion-1 class="p-32">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center mr-16">
              <p class="hp-p1-body mb-0">Lorem Ipsum Collapse Title</p>

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
        id="accordion-1"
        accordion="my-accordion"
        role="tabpanel"
        visible
      >
        <b-card-body>
          <p class="hp-p1-body mb-0">
            I start opened because <code>visible</code> is
            <code>true</code>
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header
        header-tag="header"
        class="p-0 bg-transparent"
        role="tab"
      >
        <div v-b-toggle.accordion-2 class="p-32">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center mr-16">
              <p class="hp-p1-body mb-0">Lorem Ipsum Collapse Title</p>

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
        id="accordion-2"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <p class="hp-p1-body mb-0">{{ text }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body>
      <b-card-header
        header-tag="header"
        class="p-0 bg-transparent"
        role="tab"
      >
        <div v-b-toggle.accordion-3 class="p-32">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center mr-16">
              <p class="hp-p1-body mb-0">Lorem Ipsum Collapse Title</p>

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
        id="accordion-3"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <p class="hp-p1-body mb-0">{{ text }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardHeader, BCardBody, BBadge, BCollapse } from "bootstrap-vue";

export default {
  data() {
    return {
      text: \`
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      \`,
    };
  },
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCollapse,
    BBadge,
  },
};
</script>
`

export default { basic }