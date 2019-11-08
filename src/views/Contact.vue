<template>
  <section class="contact">
    <h1>Contact Us</h1>

    <div class="box">
      <input
        @keyup="closeMessage"
        aria-label="Name"
        inputmode="text"
        placeholder="Name"
        v-model="name"
      />

      <input
        @keyup="closeMessage"
        aria-label="Email"
        inputmode="text"
        placeholder="Email"
        v-model="email"
      />

      <textarea
        @keyup="closeMessage"
        cols="50"
        placeholder="Questions"
        rows="4"
        v-model="content"
      ></textarea>

      <button @keyup.enter="fakeSubmission" @click="fakeSubmission">
        Submit Your Question
      </button>

      <p @click="closeMessage" class="submitted" v-if="submitted">
        Thank you! Your question has been sent to our team.
      </p>
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
  text-align: left;
  width: 80vw;
}

.submitted {
  align-items: flex-start;
  color: $blue;
  cursor: pointer;
  display: flex;
  font-size: 0.7em;
}
</style>

<script>
export default {
  name: "contact",

  data() {
    return {
      content: null,
      email: null,
      name: null,
      submitted: false
    };
  },

  methods: {
    closeMessage() {
      this.submitted = false;
    },

    fakeSubmission() {
      this.content = null;
      this.email = null;
      this.name = null;
      this.submitted = true;
    }
  }
};
</script>
