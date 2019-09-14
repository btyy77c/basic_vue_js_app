<template>
  <section id="home">
    <h3>Donate Now</h3>

    <PaymentPassed v-if="completedPayment" />
    <PaymentForm :stripe="stripe" @fake-token="fakeStripeToken" v-else />
  </section>
</template>

<style scoped lang="scss">
h3 {
  text-align: center;
}

section {
  margin-top: 45px;
}
</style>

<script>
import PaymentForm from "@/components/PaymentForm.vue";
import PaymentPassed from "@/components/PaymentPassed.vue";

export default {
  name: "home",

  components: {
    PaymentForm,
    PaymentPassed
  },

  computed: {
    completedPayment() {
      return this.$store.state.donationStatus == "completed";
    }
  },

  created() {
    // eslint-disable-next-line
    this.stripe = Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  },

  data() {
    return {
      stripe: null,
      processingCard: false
    };
  },

  methods: {
    fakeStripeToken(card, amount) {
      if (this.processingCard) {
        return;
      }

      this.processingCard = true;

      this.stripe.createToken(card).then(result => {
        this.processingCard = false;
        if (result.error) {
          // Stripe will list error on form
          return;
        } else {
          this.$store.commit("changeLastDonatedAmount", amount);
          this.$store.commit("changeDonationStatus", "completed");
        }
      });
    }
  }
};
</script>
