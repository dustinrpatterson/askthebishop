<template>
  <div>

    <div class="row">
      <div class="col-12">
        <div class="ask text-center">
          <h1 class="">Ask the Bishop!</h1>
          <p>Submit your question below for our special youth fireside on March 11th.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 ml-auto mr-auto mt-4">
        <b-form @submit="submitQuestion"
                v-if="!submitted">
          <b-form-group id="questionInputGroup"
                        label="Your question"
                        label-for="questionInput"
                        description="Your question will remain completely anonymous">
            <b-form-textarea id="questionInput"
                             v-model="question"
                             placeholder="Enter your question here"
                             :rows="4"
                             :max-rows="6">
            </b-form-textarea>
          </b-form-group>
          <b-button type="submit"
                    variant="primary">Submit</b-button>
        </b-form>
        <section v-if="submitted">
          <h1>Thanks for asking your question!</h1>
          <p>Your question has been sent to Bishop Witter. Feel free to ask another question.</p>
          <b-button @click="newQuestion"
                    variant="primary"
                    class="text-left">New Question</b-button>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ask',
  data () {
    return {
      question: '',
      submitted: false
    }
  },
  methods: {
    submitQuestion (e) {
      e.preventDefault()
      // Submit to firebase here

      // reset question field
      this.question = ''
      this.submitted = true
    },
    newQuestion () {
      this.submitted = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
