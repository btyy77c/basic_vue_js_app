import { mount } from "@vue/test-utils";
import PaymentForm from "@/components/PaymentForm.vue";

describe("PaymentForm.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(PaymentForm, { stubs: ["router-link"] });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("validAmount checks for positive integers", () => {
    // Positive integer
    const wrapper = mount(PaymentForm, { stubs: ["router-link"] });
    wrapper.setData({ amount: 10 });
    expect(wrapper.vm.validAmount).toBe(true);

    // Negative integer
    wrapper.setData({ amount: 0 });
    expect(wrapper.vm.validAmount).toBe(false);

    // Not a number
    wrapper.setData({ amount: "not a number" });
    expect(wrapper.vm.validAmount).toBe(false);
  });

  test("fakePayment submits card data to parent component", () => {
    // Amount not valid

    // Amount valid
  });

  test("amount watcher removes non numbers from amount", () => {

  });
});
