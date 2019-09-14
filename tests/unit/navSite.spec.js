import { mount, shallowMount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

describe("Nav.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Nav, { stubs: ['router-link'] })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it("starts with displayLinks value of false", () => {
    //const msg = "Contact Us";
    //const wrapper = shallowMount(Contact, {
    //  propsData: { msg }
    //});
    //expect(wrapper.text()).toContain(msg);
  });

  it("sets displayLinks to false for method resetdisplayLinks", () => {

  });

  it("updates displayLinks for method updateDisplayLink", () => {

  });
});
