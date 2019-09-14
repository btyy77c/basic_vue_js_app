<template>
  <div id="fake-stripe-form">
    <input
      v-model="amount"
      @input="filterAmount"
      placeholder="Enter amount to donate"
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
@import "../assets/colors";

button {
  background-color: $blue;
  border: 0;
  box-shadow: 0 0 18px -8px darken($blue, 10%);
  color: $white;
  cursor: pointer;
  font-size: 18px;
  margin: 15px 0;
  padding: 5px 10px;
  position: relative;

  &::after {
    background-color: $blue;
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
    content: "";
    height: 100%;
    position: absolute;
    right: -8px;
    top: 0;
    width: 9px;
  }

  &:focus {
    outline: 0;
    background-color: darken($blue, 10%);

    &::after {
      background-color: darken($blue, 10%);
    }
  }

  &:hover {
    background-color: darken($blue, 10%);

    &::after {
      background-color: darken($blue, 10%);
    }
  }
}

input {
  border: 1px solid $blue;
  color: #32325d;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px 15px;
  width: 95%;

  &:focus {
    outline: 1px solid $blue;
  }

  &::placeholder {
    color: #aab7c4;
  }
}

#card-element {
  border: 1px solid $blue;
  padding: 10px 15px;
}

#card-errors {
  color: #eb1d26;
  font-size: 0.8em;
  font-style: italic;
}

#fake-stripe-form {
  background-color: $white;
  box-shadow: 0 0 24px -15px $black;
  margin: 0 auto;
  max-width: 700px;
  padding: 20px 30px;
  width: 80vw;
}
</style>

<script>
export default {
  name: "fake-payment-form",

  beforeDestroy() {
    this.card.destroy()
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
    elements: null
  }
};
</script>
