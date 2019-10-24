import { mount } from "@vue/test-utils";
import PaymentPassed from "@/components/PaymentPassed.vue";
import Store from "@/store.js";

describe("PaymentPassed.vue", () => {
  let store;

  beforeEach(() => {
    store = Store;
  });

  test("is a Vue instance", () => {
    const wrapper = mount(PaymentPassed, { store });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("updatePaymentStatus changes store to accepting new donations", () => {
    const wrapper = mount(PaymentPassed, { store });

    wrapper.vm.$store.commit("changeDonationStatus", "testing");
    expect(wrapper.vm.$store.state.donationStatus).toEqual("testing");

    wrapper.vm.updatePaymentStatus();
    expect(wrapper.vm.$store.state.donationStatus).toEqual("accepting");
  });
});
