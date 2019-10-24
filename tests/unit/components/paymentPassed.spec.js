import { mount } from "@vue/test-utils";
import PaymentPassed from "@/components/PaymentPassed.vue";
import Store from "@/store.js";

const store = Store;
const wrapper = mount(PaymentPassed, { store });

describe("PaymentPassed.vue", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("updatePaymentStatus changes store to accepting new donations", () => {
    wrapper.vm.$store.commit("changeDonationStatus", "testing");
    expect(wrapper.vm.$store.state.donationStatus).toEqual("testing");

    wrapper.vm.updatePaymentStatus();
    expect(wrapper.vm.$store.state.donationStatus).toEqual("accepting");
  });
});
