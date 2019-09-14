<template>
  <section id="home">
    <h3>Donate Now</h3>

    <PaymentForm />

    <div class="fake-stripe-form">
      <input
        v-model="amount"
        @input="filterAmount"
        placeholder="enter amount to donate"
      />

      <div id="card-element" />

      <div role="alert" :if="cardErrors">
        {{ cardErrors }}
      </div>

      <button
        @keyup.enter="fakePayment"
        @click="fakePayment"
        v-if="validAmount"
      >
        Pay ${{ amount }}
      </button>
    </div>
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
// @ is an alias to /src
import PaymentForm from "@/components/PaymentForm.vue";

export default {
  name: "home",

  components: {
    PaymentForm
  },

  computed: {
    validAmount() {
      return this.amount > 1;
    }
  },

  created() {
    // eslint-disable-next-line
    this.stripe = Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
    this.elements = this.stripe.elements();
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
      elements: null,
      processingCard: false,
      stripe: null
    };
  },

  methods: {
    fakePayment() {
      if (this.processingCard) {
        return;
      }

      this.processingCard = true;

      if (!this.validAmount) {
        this.cardErrors = "Amount is invalid";
        this.processingCard = false;
      } else {
        this.fakeStripeToken();
      }
    },

    fakeStripeToken() {
      this.stripe.createToken(this.card).then(result => {
        this.cardProcessing = false;
        if (result.error) {
          this.cardErrors = result.error.message;
        } else {
          this.cardErrors = "Thank you for your payment";
        }
      });
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
  }
};
</script>
