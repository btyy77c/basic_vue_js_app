import { mount } from "@vue/test-utils";
import PaymentForm from "@/components/PaymentForm.vue";

describe("PaymentForm.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(PaymentForm, {
      stubs: ["router-link"],
      stripe: null
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  /*
  test("filterAmount removes non numbers from amount", () => {});

  test("validAmount returns true or false", () => {});
  */
});
