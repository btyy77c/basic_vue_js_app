import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Contact Us";
    const wrapper = shallowMount(Contact, {
      propsData: { msg }
    });
    expect(wrapper.text()).toContain(msg);
  });
});
