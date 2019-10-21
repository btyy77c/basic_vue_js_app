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
    const wrapper = mount(PaymentForm, { stubs: ["router-link"] });

    // Amount not valid
    wrapper.setData({ amount: 0, cardErrors: null });
    wrapper.vm.fakePayment();
    expect(wrapper.vm.$data.cardErrors).toBe("Amount is invalid");

    // Amount valid
    wrapper.setData({ amount: 5, cardErrors: null });
    wrapper.vm.fakePayment();
    expect(wrapper.emitted()).toEqual({ "fake-token": [[null, "5"]] });
    expect(wrapper.vm.$data.cardErrors).toEqual(null);
  });

  test("amount watcher removes non numbers from amount", () => {
    const wrapper = mount(PaymentForm, { stubs: ["router-link"] });

    wrapper.setData({ amount: -1 });
    expect(wrapper.vm.$data.amount).toEqual("1");

    wrapper.setData({
      amount: "1,.6jbyqe78697726`976t7`2:(&G%@#!bvyeqf8980`=+)"
    });
    expect(wrapper.vm.$data.amount).toEqual("1678697726976728980");
  });
});
