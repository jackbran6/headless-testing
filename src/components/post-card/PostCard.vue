<template>
  <article class="card">
    <div class="card-shadow">
      <div class="card-body">
        <h5 class="card-title">
          <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">{{
            post.title
          }}</NuxtLink>
        </h5>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="card-text" v-html="post.excerpt"></div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['post']
})
</script>

<style lang="scss" scoped>
.card {
  width: 80vw;
}
.card-shadow {
  border: 1px solid;
  box-shadow: 10px 10px;
  padding: 10px;
}
</style>
