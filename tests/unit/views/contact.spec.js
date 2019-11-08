import { mount } from "@vue/test-utils";
import Contact from "@/views/Contact.vue";

const wrapper = mount(Contact);

describe("Contact.vue", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("submittedTextAvailable", () => {
    wrapper.setData({ submittedText: null });
    expect(wrapper.vm.submittedTextAvailable).toBe(false);

    wrapper.setData({ submittedText: "Submitted Text!" });
    expect(wrapper.vm.submittedTextAvailable).toBe(true);
  });

  test("closeMessage", () => {
    wrapper.setData({ submittedText: "Submitted Text!" });
    expect(wrapper.vm.$data.submittedText).toBe("Submitted Text!");

    wrapper.vm.closeMessage();
    expect(wrapper.vm.$data.submittedText).toBe(null);
  });

  test("fakeSubmission", () => {
    // changes values
    wrapper.setData({ name: "name", email: "email", content: "content" });
    wrapper.vm.fakeSubmission();
    expect(wrapper.vm.$data.email).toBe(null);
    expect(wrapper.vm.$data.content).toBe(null);
    expect(wrapper.vm.$data.name).toBe(null);
    expect(wrapper.vm.$data.submittedText).toBe(
      "Thank you! Your question has been sent to our team."
    );

    // email is missing
    wrapper.setData({ name: "name", email: null, content: "content" });
    wrapper.vm.fakeSubmission();
    expect(wrapper.vm.$data.email).toBe(null);
    expect(wrapper.vm.$data.content).toBe("content");
    expect(wrapper.vm.$data.name).toBe("name");
    expect(wrapper.vm.$data.submittedText).toBe(
      "Please make sure you have entered an email and a question."
    );

    // content is missing
    wrapper.setData({ name: "name", email: "email", content: null });
    wrapper.vm.fakeSubmission();
    expect(wrapper.vm.$data.email).toBe("email");
    expect(wrapper.vm.$data.content).toBe(null);
    expect(wrapper.vm.$data.name).toBe("name");
    expect(wrapper.vm.$data.submittedText).toBe(
      "Please make sure you have entered an email and a question."
    );
  });
});
