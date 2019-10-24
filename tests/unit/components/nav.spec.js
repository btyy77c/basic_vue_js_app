import { mount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

const wrapper = mount(Nav, { stubs: ["router-link"] });

describe("Nav.vue", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("starts with displayLinks value of false", () => {
    expect(Nav.data().displayLinks).toBe(false);
  });

  it("sets displayLinks to false for method resetdisplayLinks", () => {
    wrapper.setData({ displayLinks: true });
    expect(wrapper.vm.$data.displayLinks).toBe(true);

    // Changes true to false
    wrapper.vm.resetdisplayLinks();
    expect(wrapper.vm.$data.displayLinks).toBe(false);

    // Does not change false
    wrapper.vm.resetdisplayLinks();
    expect(wrapper.vm.$data.displayLinks).toBe(false);
  });

  it("updates displayLinks for method updateDisplayLink", () => {
    wrapper.setData({ displayLinks: true });
    expect(wrapper.vm.$data.displayLinks).toBe(true);

    // Changes true to false
    wrapper.vm.updateDisplayLink();
    expect(wrapper.vm.$data.displayLinks).toBe(false);

    // Changes false to true
    wrapper.vm.updateDisplayLink();
    expect(wrapper.vm.$data.displayLinks).toBe(true);
  });
});
