import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    donationStatus: "accepting",
    lastDonatedAmount: 0
  },

  mutations: {
    changeDonationStatus(state, newStatus) {
      state.donationStatus = newStatus;
    },

    changeLastDonatedAmount(state, newAmount) {
      state.lastDonatedAmount = newAmount;
    }
  },

  actions: {}
});
