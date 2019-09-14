<template>
  <div id="fake-stripe-form">
    <input
      v-model="amount"
      @input="filterAmount"
      placeholder="enter amount to donate"
    />

    <div id="card-element" />

    <div role="alert" :if="cardErrors">
      {{ cardErrors }}
    </div>

    <button @keyup.enter="fakePayment" @click="fakePayment" v-if="validAmount">
      Pay ${{ amount }}
    </button>
  </div>
</template>

<script>
export default {
  name: "fake-payment-form",

  created() {
    this.elements = this.stripe.elements();
  },

  computed: {
    validAmount() {
      return this.amount > 1;
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
          fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4"
          }
        }
      },
      elements: null
    };
  },

  methods: {
    fakePayment() {
      if (!this.validAmount) {
        this.cardErrors = "Amount is invalid";
      } else {
        this.$emit("fake-token", this.card, this.amount);
      }
    },

    filterAmount() {
      this.amount = this.amount.replace(/[^0-9]/g, "");
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
    stripe: null
  }
};
</script>
