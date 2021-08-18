<template>
  <div class="container">
    <div class="div">
      <div class="header-container">
        <h1 class="title">Headless WordPress NuxtDemo</h1>
        <nuxt-link to="new-book" class="add-container">
          <p class="add-text">Add New</p>
        </nuxt-link>
      </div>
      <div class="card-container">
        <div class="row">
          <post-card v-for="post in posts" :key="post.id" :post="post" />
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

  async asyncData() {
    try {
      const response = await axios.get(
        `http://localhost:8000/wp-json/wp/v2/books`
      )

      return {
        posts: response.data
      }
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      posts: {
        type: Array
      }
    }
  },

  head: {
    title: 'Hello world!'
  }
})
</script>

<style lang="scss" scoped>
.title {
  margin: 50px;
}
.card-container {
  margin-left: 10vw;
}
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.add-container {
  border: 1px solid;
  box-shadow: 10px 10px;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 50px;
  padding: 10px;
  width: 10vw;
}
</style>
