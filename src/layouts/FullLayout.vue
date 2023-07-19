<template>
  <div>
    <router-view />

    <buy-now />
  </div>
</template>

<script>
import BuyNow from "@/layouts/components/buy-now";

export default {
  components: {
    BuyNow,
  },
};
</script>
