<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <h2 class="mb-16">Color Guide</h2>
      <p class="hp-p1-body mb-0">
        We used dynamic colors to clearly convey the actions, situation and
        direction within the interface. They serve to make things simple to
        understand.
      </p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <b-card>
        <div class="mb-16">
          <h5 class="w-100 mb-8">Theme Colors</h5>
          <p class="hp-p1-body mb-32">
            Themr colors can be use with class .{css-property}-primary-1. It's
            available for text, background-color, background and border.
          </p>
        </div>

        <b-row class="mr-12">
          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="bg-primary hp-color-wrapper-xl"
                v-b-tooltip.hover
                title="Pr-1 #0010F7"
              ></b-col>

              <b-col style="flex: 0 0 90px">
                <b-row class="h-100">
                  <b-col
                    class="h-100 bg-primary-4 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Pr-4 #ebfafa"
                  ></b-col>
                  <b-col
                    class="h-100 bg-primary-3 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Pr-3 #55b1f3"
                  ></b-col>
                  <b-col
                    class="h-100 bg-primary-2 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Pr-2 #0063f7"
                  ></b-col>
                </b-row>
              </b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Primary Color
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="bg-secondary hp-color-wrapper-xl"
                v-b-tooltip.hover
                title="Se-1 #c903ff"
              ></b-col>

              <b-col style="flex: 0 0 90px">
                <b-row class="h-100">
                  <b-col
                    class="h-100 bg-secondary-4 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Se-4 #fdeffc"
                  ></b-col>
                  <b-col
                    class="h-100 bg-secondary-3 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Se-3 #f7c2ff"
                  ></b-col>
                  <b-col
                    class="h-100 bg-secondary-2 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Se-2 #e26bf5"
                  ></b-col>
                </b-row>
              </b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Secondary Color
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="bg-danger hp-color-wrapper-xl"
                v-b-tooltip.hover
                title="Da-1 #ff0022"
              ></b-col>

              <b-col style="flex: 0 0 90px">
                <b-row class="h-100">
                  <b-col
                    class="h-100 bg-danger-4 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Da-4 #ffe7ea"
                  ></b-col>
                  <b-col
                    class="h-100 bg-danger-3 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Da-3 #ff8b9a"
                  ></b-col>
                  <b-col
                    class="h-100 bg-danger-2 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Da-2 #ff455e"
                  ></b-col>
                </b-row>
              </b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Danger Color
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="bg-success hp-color-wrapper-xl"
                v-b-tooltip.hover
                title="Su-1 #00f7bf"
              ></b-col>

              <b-col style="flex: 0 0 90px">
                <b-row class="h-100">
                  <b-col
                    class="h-100 bg-success-4 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Su-4 #eafff8"
                  ></b-col>
                  <b-col
                    class="h-100 bg-success-3 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Su-3 #98ffe0"
                  ></b-col>
                  <b-col
                    class="h-100 bg-success-2 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Su-2 #5bffce"
                  ></b-col>
                </b-row>
              </b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Success Color
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="bg-warning hp-color-wrapper-xl"
                v-b-tooltip.hover
                title="Wa-1 #ffc212"
              ></b-col>

              <b-col style="flex: 0 0 90px">
                <b-row class="h-100">
                  <b-col
                    class="h-100 bg-warning-4 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Wa-4 #fff9e9"
                  ></b-col>
                  <b-col
                    class="h-100 bg-warning-3 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Wa-3 #ffe393"
                  ></b-col>
                  <b-col
                    class="h-100 bg-warning-2 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="Wa-2 #ffd252"
                  ></b-col>
                </b-row>
              </b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Warning Color
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="bg-info hp-color-wrapper-xl"
                v-b-tooltip.hover
                title="In-1 #1be7ff"
              ></b-col>

              <b-col style="flex: 0 0 90px">
                <b-row class="h-100">
                  <b-col
                    class="h-100 bg-info-4 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="In-4 #eafcff"
                  ></b-col>
                  <b-col
                    class="h-100 bg-info-3 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="In-3 #97f4ff"
                  ></b-col>
                  <b-col
                    class="h-100 bg-info-2 hp-color-wrapper-sm"
                    v-b-tooltip.hover
                    title="In-2 #59edff"
                  ></b-col>
                </b-row>
              </b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Info Color
            </p>
          </b-col>
        </b-row>
      </b-card>
    </b-col>

    <b-col cols="12">
      <b-card>
        <div class="mb-16">
          <h5 class="w-100 mb-8">Blacks &amp; Gradients</h5>
          <p class="hp-p1-body mb-32">
            Black tags can be use with class .hp-{css-property}-black-dark-bg,
            Gradients can be used with class
            .hp-{css-property}-primary-gradient. Gradients is used for
            background instead of backgroun-color.
          </p>
        </div>

        <b-row class="mx-0 rounded overflow-hidden border-black-40 mb-24">
          <b-col class="px-0">
            <div
              class="w-100 bg-black-bg hp-color-wrapper mb-8 border-left border-top border-bottom hp-border-color-dark-80 rounded-left"
              v-b-tooltip.hover
              title="Dark-Bg #111314"
            ></div>
            <p
              class="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"
            >
              Dark-Bg
            </p>
          </b-col>
          <b-col class="px-0">
            <div
              class="w-100 bg-black-100 hp-color-wrapper mb-8 border-left border-top border-bottom hp-border-color-dark-80"
              v-b-tooltip.hover
              title="B-100 #2D3436"
            ></div>
            <p
              class="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"
            >
              B-100
            </p>
          </b-col>
          <b-col class="px-0">
            <div
              class="w-100 bg-black-80 hp-color-wrapper mb-8 border-left border-top border-bottom hp-border-color-dark-80"
              v-b-tooltip.hover
              title="B-80 #636E72"
            ></div>
            <p
              class="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"
            >
              B-80
            </p>
          </b-col>
          <b-col class="px-0">
            <div
              class="w-100 bg-black-60 hp-color-wrapper mb-8 border-left border-top border-bottom hp-border-color-dark-80"
              v-b-tooltip.hover
              title="B-60 #B2BEC3"
            ></div>
            <p
              class="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"
            >
              B-60
            </p>
          </b-col>
          <b-col class="px-0">
            <div
              class="w-100 bg-black-40 hp-color-wrapper mb-8 border-left border-top border-bottom hp-border-color-dark-80"
              v-b-tooltip.hover
              title="B-40 #DFE6E9"
            ></div>
            <p
              class="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"
            >
              B-40
            </p>
          </b-col>
          <b-col class="px-0">
            <div
              class="w-100 bg-black-20 hp-color-wrapper mb-8 border-left border-top border-bottom hp-border-color-dark-80"
              v-b-tooltip.hover
              title="B-20 #F0F3F5"
            ></div>
            <p
              class="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"
            >
              B-20
            </p>
          </b-col>
          <b-col class="px-0">
            <div
              class="w-100 bg-black-10 hp-color-wrapper mb-8 border-left border-top border-bottom hp-border-color-dark-80"
              v-b-tooltip.hover
              title="B-10 #F7FAFC"
            ></div>
            <p
              class="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"
            >
              B-10
            </p>
          </b-col>
          <b-col class="px-0">
            <div
              class="w-100 bg-black-10 hp-color-wrapper mb-8 border hp-border-color-dark-80 rounded-right"
              v-b-tooltip.hover
              title="B-0 #FFFFFF"
            ></div>
            <p
              class="hp-badge-text hp-text-color-black-100 hp-text-color-dark-0"
            >
              B-0
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="hp-bg-primary-gradient hp-color-wrapper"
                v-b-tooltip.hover
                title="#0010f7 - #1be7ff"
              ></b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Primary Gradient
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="hp-bg-secondary-gradient hp-color-wrapper"
                v-b-tooltip.hover
                title="#a210ba - #ff00c7"
              ></b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Secondary Gradient
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="hp-bg-danger-gradient hp-color-wrapper"
                v-b-tooltip.hover
                title="#ff0022 - #ff5c00"
              ></b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Danger Gradient
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="hp-bg-info-gradient hp-color-wrapper"
                v-b-tooltip.hover
                title="#1be7ff - #c2f4ff"
              ></b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Info Gradient
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="hp-bg-success-gradient hp-color-wrapper"
                v-b-tooltip.hover
                title="#00f7bf - #98ffa2"
              ></b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Success Gradient
            </p>
          </b-col>

          <b-col cols="12" md="4" xxl="2" class="col-xxl-2">
            <b-row class="rounded overflow-hidden mx-0 mb-8 w-100">
              <b-col
                class="hp-bg-warning-gradient hp-color-wrapper"
                v-b-tooltip.hover
                title="#ffc212 - #faff00"
              ></b-col>
            </b-row>

            <p class="hp-badge-text text-black-100 hp-text-color-dark-0">
              Warning Gradient
            </p>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
