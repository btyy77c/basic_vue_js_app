<template>
  <div id="payment-passed">
    <h2>
      Thank you for your donation of ${{ $store.state.lastDonatedAmount }}
    </h2>

    <button @click="updatePaymentStatus" @keyup.enter="updatePaymentStatus">
      Make Another Donation
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/payment";

#payment-passed {
  @include white-container;
}
</style>

<script>
export default {
  name: "payment-passed",

  methods: {
    updatePaymentStatus() {
      this.$store.commit("changeDonationStatus", "accepting");
    }
  }
};
</script>
