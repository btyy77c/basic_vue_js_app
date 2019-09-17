import { mount } from "@vue/test-utils";
import PaymentForm from "@/components/PaymentForm.vue";

describe("PaymentForm.vue", () => {
  test("filterAmount removed non numbers from amount", () => {});

  test("is a Vue instance", () => {
    const wrapper = mount(PaymentForm,
      {
        stubs: ["router-link"]
      }
    );
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("validAmount returns true or false", () => {});
});
