<template>
  <div class="container">
    <div class="content">
      <h1 class="title">{{ $route.params.title }}</h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="card-text" v-html="$route.params.content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
}
</style>
