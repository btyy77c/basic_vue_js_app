import { mount } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/Home.vue";
import Store from "@/store.js";


describe("PaymentPassed.vue", () => {
  const Stripe = (key) => ({
    elements: jest.fn(),
    createToken: jest.fn(() => Promise.resolve())
  });

  let store

  beforeEach(() => {
    store = Store
    window.Stripe = Stripe
  });

  test("is a Vue instance", () => {
    const wrapper = mount(Home, { store });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("completedPayment", () => {
    const wrapper = mount(Home, { store });

    // returns false when donationStatus is not completed
    wrapper.vm.$store.commit("changeDonationStatus", "testing");
    expect(wrapper.vm.completedPayment).toEqual(false);

    // completedPayment returns true when donationStatus is completed
    wrapper.vm.$store.commit("changeDonationStatus", "completed");
    expect(wrapper.vm.completedPayment).toEqual(true);
  });

  test("fakeStripeToken", () => {
    // does nothing if processingCard is true

    // updates store values if processingCard is false
  });
});
