<template>
  <b-card class="hp-card-5">
    <h5 class="mb-32">Notification</h5>

    <b-row>
      <b-col cols="12">
        <b-row align-v="center" align-h="between">
          <b-col class="hp-flex-none w-auto">
            <div class="d-flex align-items-center">
              <i
                class="ri-shield-keyhole-line text-primary mr-16"
                style="font-size: 24px"
              ></i>

              <div>
                <h5 class="mb-0">Security Setting</h5>
                <p class="mb-0 hp-badge-text font-weight-normal">
                  Secured by Hypeople
                </p>
              </div>
            </div>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <b-form-checkbox
              switch
              size="lg"
              checked="true"
              style="height: 38px"
            />
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" class="mt-24">
        <b-row align-v="center" align-h="between">
          <b-col class="hp-flex-none w-auto">
            <div class="d-flex align-items-center">
              <i
                class="ri-shield-keyhole-line text-primary mr-16"
                style="font-size: 24px"
              ></i>

              <div>
                <h5 class="mb-0">Wi-Fi</h5>
                <p class="mb-0 hp-badge-text font-weight-normal">Hypeople</p>
              </div>
            </div>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <b-form-checkbox switch size="lg" style="height: 38px" />
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" class="mt-24">
        <b-row align-v="center" align-h="between">
          <b-col class="hp-flex-none w-auto">
            <div class="d-flex align-items-center">
              <i
                class="ri-shield-keyhole-line text-primary mr-16"
                style="font-size: 24px"
              ></i>

              <div>
                <h5 class="mb-0">Finger Pring</h5>
                <p class="mb-0 hp-badge-text font-weight-normal">Touch ID</p>
              </div>
            </div>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <b-form-checkbox switch size="lg" style="height: 38px" />
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12" class="mt-24">
        <b-row align-v="center" align-h="between">
          <b-col class="hp-flex-none w-auto">
            <div class="d-flex align-items-center">
              <i
                class="ri-shield-keyhole-line text-primary mr-16"
                style="font-size: 24px"
              ></i>

              <div>
                <h5 class="mb-0">Lock</h5>
                <p class="mb-0 hp-badge-text font-weight-normal">
                  Not recommended
                </p>
              </div>
            </div>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <b-form-checkbox
              switch
              size="lg"
              checked="true"
              style="height: 38px"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BFormCheckbox } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BFormCheckbox,
  },
};
</script>
