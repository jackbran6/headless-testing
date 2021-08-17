<template>
  <div class="container">
    <div>
      <h1 class="title">Headless WordPress NuxtDemo</h1>
      <div class="card-container">
        <div class="row">
          <post-card v-for="post in posts" :key="post.slug" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      posts: {
        type: Array
      }
    }
  },

  head: {
    title: 'Hello world!'
  },
  // // computed: {
  // //   posts() {
  // //     return [{}]
  // //   },
  // //   pageInfo() {
  // //     return {
  // //       endCursor: '',
  // //       hasNextPage: false,
  // //       hasPreviousPage: false,
  // //       startCursor: ''
  // //     }
  // //   }
  // },

  async created() {
    try {
      const response = await axios.get(
        `http://localhost:8000/wp-json/wp/v2/books`
      )

      this.posts = response.data
      console.log(this.posts)
    } catch (e) {
      console.log(e)
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  margin: 10vw;
}
.card-container {
  margin-left: 10vw;
}
</style>
