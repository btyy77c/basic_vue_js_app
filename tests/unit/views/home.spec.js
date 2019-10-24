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
});
