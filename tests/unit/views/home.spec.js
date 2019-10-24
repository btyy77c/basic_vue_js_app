import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Store from "@/store.js";

const Stripe = jest.fn(() => {
  return {
    elements: jest.fn(),

    createToken: jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve({});
        reject({});
      });
    })
  };
});

let store;
let wrapper;

describe("PaymentPassed.vue", () => {
  beforeEach(() => {
    store = Store;
    window.Stripe = Stripe;
    wrapper = mount(Home, { store });
  });

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("completedPayment", () => {
    // returns false when donationStatus is not completed
    wrapper.vm.$store.commit("changeDonationStatus", "testing");
    expect(wrapper.vm.completedPayment).toEqual(false);

    // completedPayment returns true when donationStatus is completed
    wrapper.vm.$store.commit("changeDonationStatus", "completed");
    expect(wrapper.vm.completedPayment).toEqual(true);
  });

  test("fakeStripeToken", async () => {
    // setup
    wrapper.vm.$store.commit("changeDonationStatus", "testing");
    expect(wrapper.vm.$store.state.donationStatus).toEqual("testing");

    wrapper.vm.$store.commit("changeLastDonatedAmount", 2);
    expect(wrapper.vm.$store.state.lastDonatedAmount).toEqual(2);

    // does nothing if processingCard is true
    wrapper.setData({ processingCard: true });

    await wrapper.vm.fakeStripeToken({}, 10);
    expect(wrapper.vm.$store.state.donationStatus).toEqual("testing");
    expect(wrapper.vm.$store.state.lastDonatedAmount).toEqual(2);

    // updates store values if processingCard is false
    wrapper.setData({ processingCard: false });

    await wrapper.vm.fakeStripeToken({}, 10);
    expect(wrapper.vm.$store.state.donationStatus).toEqual("completed");
    expect(wrapper.vm.$store.state.lastDonatedAmount).toEqual(10);
  });
});
