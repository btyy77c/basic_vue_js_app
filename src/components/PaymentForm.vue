<template>
  <div id="fake-stripe-form">
    <input
      v-model="amount"
      aria-label="Enter amount to donate"
      placeholder="Enter amount to donate"
      inputmode="numeric"
    />

    <div id="card-element" />

    <div id="card-errors" role="alert" :if="cardErrors">
      {{ cardErrors }}
    </div>

    <button @keyup.enter="fakePayment" @click="fakePayment" v-if="validAmount">
      Pay ${{ amount }}
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/payment_form";
</style>

<script>
export default {
  name: "fake-payment-form",

  beforeDestroy() {
    this.card.destroy();
  },

  computed: {
    validAmount() {
      return this.amount >= 1;
    }
  },

  data() {
    return {
      amount: null,
      card: null,
      cardErrors: null,
      cardStyles: {
        base: {
          color: "#32325d",
          fontFamily: "sans-serif",
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4"
          }
        }
      }
    };
  },

  methods: {
    fakePayment() {
      if (!this.validAmount) {
        this.cardErrors = "Amount is invalid";
      } else {
        this.$emit("fake-token", this.card, this.amount);
      }
    }
  },

  mounted() {
    this.card = this.elements.create("card", { style: this.cardStyles });
    this.card.mount("#card-element");
    this.card.addEventListener("change", stripeEvent => {
      if (stripeEvent.error) {
        this.cardErrors = stripeEvent.error.message;
      } else {
        this.cardErrors = null;
      }
    });
  },

  props: {
    elements: null
  },

  watch: {
    amount() {
      this.amount = String(this.amount).replace(/[^\d]/g, "");
    }
  }
};
</script>
