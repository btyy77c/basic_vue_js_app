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
        aria-label="Enter your question"
        cols="50"
        placeholder="Questions"
        rows="4"
        v-model="content"
      ></textarea>

      <button @keyup.enter="fakeSubmission" @click="fakeSubmission">
        Submit Your Question
      </button>

      <p class="submitted" v-if="submittedTextAvailable">
        {{ submittedText }}
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

  computed: {
    submittedTextAvailable() {
      return this.submittedText != null;
    }
  },

  data() {
    return {
      content: null,
      email: null,
      name: null,
      submittedText: null
    };
  },

  methods: {
    closeMessage() {
      this.submittedText = null;
    },

    fakeSubmission() {
      if (this.email && this.content) {
        this.content = null;
        this.email = null;
        this.name = null;
        this.submittedText =
          "Thank you! Your question has been sent to our team.";
      } else {
        this.submittedText =
          "Please make sure you have entered an email and a question.";
      }
    }
  }
};
</script>
