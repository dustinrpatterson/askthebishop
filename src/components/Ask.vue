<template>

    <div class="row">
      <!-- <div class="col-4 d-flex align-items-center">
        <img src="../../static/Bishop.jpeg"
             alt="Bishop Wittwer"
             class="bishop">
      </div> -->

          <div class="col-12">
            <div class="text-center">
              <h1 class="">Q&A fireside with Bishop Wittwer</h1>
              <p>Has something been on your mind recently? Submit your question below for our special youth fireside on March 11th.</p>
            </div>
          </div>

          <div class="col-10 ml-auto mr-auto">
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
              <!-- Disable button if form is empty -->
              <b-button type="submit"
                        variant="primary">Submit</b-button>
            </b-form>
            <section v-if="submitted">
              <h3>Thanks for asking your question!</h3>
              <p>Your question has been sent to Bishop Witter. Feel free to ask another question.</p>
              <b-button @click="newQuestion"
                        variant="primary"
                        class="text-left">New Question</b-button>
            </section>
          </div>



    </div>

 
</template>

<script>
import * as firebase from 'firebase'

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
      // e.preventDefault()
      // Check to make sure form is NOT an empty string.

      // Submit to firebase here
      firebase
        .database()
        .ref('questions')
        .push(this.question)
        .then(data => {
          console.log(data)
        })
        .catch(data => {
          console.log(data)
        })

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
<style scoped lang="scss">
.bishop {
  width: 100%;
  margin-left: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
