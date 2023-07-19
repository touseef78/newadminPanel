<template>
  <b-card class="hp-card-1" body-class="py-16">
    <b-row>
      <b-col cols="12" class="mb-8">
        <div class="d-flex align-items-center">
          <i
            class="ri-ghost-smile-line text-primary mr-8"
            style="font-size: 24px"
          ></i>
          <h5 class="mb-0">Attendence</h5>
        </div>
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
            <b-button variant="text" class="p-0 bg-transparent">
              <span>View details</span>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BAvatarGroup,
  BAvatar,
  BButton,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatarGroup,
    BAvatar,
    BButton,
  },
};
</script>
