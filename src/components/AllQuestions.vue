<template>
  <div class="all-questions">
    <div class="row">
      <div class="col-10 ml-auto mr-auto">
        <h1>Here's what the youth are asking:</h1>
        <ul>
          <li v-for="question in questionArray"
              :key=question.id>{{question.question}}</li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'

export default {
  name: 'AllQuestions',
  data () {
    return {
      questionArray: []
    }
  },
  created () {
    this.loadQuestions()
  },
  methods: {
    loadQuestions () {
      firebase
        .database()
        .ref()
        .child('questions')
        .on('value', data => {
          var firebaseQuestion = data.val()
          this.questionArray = []
          for (let key in firebaseQuestion) {
            this.questionArray.push({
              id: key,
              question: firebaseQuestion[key]
            })
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
