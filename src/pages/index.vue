<template>
  <div class="container">
    <div>
      <h1 class="title">Headless WordPress NuxtDemo</h1>
      <div class="card-container">
        <div class="row">
          <post-card v-for="post in posts" :key="post.slug" :post="post" />
          <div class="d-flex w-100">
            <div v-if="pageInfo.hasNextPage" class="ml-auto">
              <NuxtLink :to="{ query: { after: pageInfo.endCursor } }"
                ><span>Next Page</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  head: {
    title: 'Hello world!'
  },
  computed: {
    posts() {
      return [
        {
          title: 'Test Post',
          slug: 'test-post',
          content: '<p>This is a test post</p>',
          excerpt: '<p>This is a test post</p>'
        }
      ]
    },
    pageInfo() {
      return {
        endCursor: '',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: ''
      }
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
