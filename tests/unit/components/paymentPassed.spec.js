import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import PaymentPassed from "@/components/PaymentPassed.vue";

const localVue = createLocalVue()
localVue.use(Vuex)

describe("PaymentPassed.vue", () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  });

  test("is a Vue instance", () => {
    const wrapper = mount(PaymentPassed, { store, localVue });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("updatePaymentStatus changes store to accepting new donations", () => {
    const wrapper = mount(PaymentPassed, { store, localVue });
  });
});
