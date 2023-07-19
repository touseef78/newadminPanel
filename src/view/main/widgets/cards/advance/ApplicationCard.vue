<template>
  <b-card class="hp-card-1">
    <b-row>
      <b-col cols="12" class="mb-4">
        <h2 class="mb-0">18 Application</h2>
      </b-col>

      <b-col cols="12">
        <b-row align-v="center" align-h="between">
          <b-col class="hp-flex-none w-auto">
            <b-avatar-group size="24px">
              <b-avatar
                :src="require('@/assets/img/memoji/memoji-1.png')"
              ></b-avatar>

              <b-avatar
                class="bg-danger-4 hp-bg-dark-danger hp-text-color-danger-1"
              >
                A
              </b-avatar>

              <b-avatar class="bg-black-20 text-black-100">
                <i class="iconly-Curved-User" style="font-size: 16px"></i>
              </b-avatar>

              <b-avatar
                class="bg-primary-4 hp-bg-dark-primary hp-text-color-primary-1"
              >
                W
              </b-avatar>

              <b-avatar
                class="bg-warning-4 hp-bg-dark-warning hp-text-color-warning-1"
              >
                X
              </b-avatar>
            </b-avatar-group>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <div class="mt-16 mt-sm-0">
              <i
                class="ri-arrow-right-line text-primary lh-1"
                style="font-size: 24px"
              ></i>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BAvatarGroup, BAvatar } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatarGroup,
    BAvatar,
  },
};
</script>
