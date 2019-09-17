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
