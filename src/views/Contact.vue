<template>
  <section class="contact">
    <h1>Contact Us</h1>

    <div class="box">
      <input
        v-model="name"
        aria-label="Name"
        placeholder="Name"
        inputmode="text"
      />

      <input aria-label="Email" placeholder="Email" inputmode="text" />

      <textarea rows="4" cols="50" placeholder="Questions"></textarea>

      <button @keyup.enter="fakeSubmission" @click="fakeSubmission">
        Submit Your Question
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/colors";
@import "../assets/form_fields";

section {
  text-align: center;
}

.box {
  background-color: $white;
  box-shadow: 0 0 24px -15px $black;
  margin: 10px auto 30px;
  max-width: 800px;
  padding: 10px 15px 20px;
  width: 80vw;
}
</style>

<script>
export default {
  name: "contact",

  data() {
    return {
      name: null
    };
  },

  methods: {
    fakeSubmission() {}
  }
};
</script>
