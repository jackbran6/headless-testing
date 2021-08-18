<template>
  <div class="container">
    <div class="add-form">
      <h3 class="title">Book Title:</h3>
      <textarea
        id="book-title"
        ref="bookTitle"
        v-model="title"
        name="Book Title"
        class="title-container"
      />
      <h3 class="publisher">Publisher:</h3>
      <textarea
        id="publisher"
        ref="publisher"
        v-model="publisher"
        name="Publisher"
        class="publisher-container"
      />
      <h3 class="excerpt">Excerpt:</h3>
      <textarea
        id="excerpt"
        ref="excerpt"
        v-model="excerpt"
        name="Excerpt"
        class="excerpt-container"
      />
      <h3 class="content">Content:</h3>
      <textarea
        id="content"
        ref="content"
        v-model="content"
        name="content"
        class="content-container"
      />
      <div class="submit" @click="submit">
        <p class="submit-text">Submit</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      title: '',
      publisher: '',
      excerpt: '',
      content: '',
      newBook: {}
    }
  },
  methods: {
    submit() {
      this.newBook = {
        title: this.title,
        publisher: this.publisher,
        excerpt: this.excerpt,
        content: this.content,
        status: 'publish'
      }

      axios
        .post(
          `http://localhost:8000/wp-json/wp/v2/books`,

          {
            body: this.newBook,
            headers: {
              'Content-Type': 'application/json',
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMCIsImlhdCI6MTYyOTIzNzIzMywibmJmIjoxNjI5MjM3MjMzLCJleHAiOjE2Mjk4NDIwMzMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19._cq2ASUkkDN5D1KjI3vtXL7_3kyrIIiiCtMfjZq5uFA'
            }
          }
        )

        .then((response) => {
          console.log(response)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 100px;
}
.add-form {
  justify-self: center;
}
.title-container {
  border: 1px solid;
  box-shadow: 10px 10px #485570;
  cursor: pointer;
  height: 50px;
  margin-bottom: 50px;
  margin-top: 10px;
  padding: 10px;
  width: 80vw;
}
.publisher-container {
  border: 1px solid;
  box-shadow: 10px 10px #485570;
  cursor: pointer;
  height: 50px;
  margin-bottom: 50px;
  margin-top: 10px;
  padding: 10px;
  width: 80vw;
}
.excerpt-container {
  border: 1px solid;
  box-shadow: 10px 10px #485570;
  cursor: pointer;
  height: 100px;
  margin-bottom: 50px;
  margin-top: 10px;
  padding: 10px;
  width: 80vw;
}
.content-container {
  border: 1px solid;
  box-shadow: 10px 10px #485570;
  cursor: pointer;
  height: 200px;
  margin-bottom: 50px;
  margin-top: 10px;
  padding: 10px;
  width: 80vw;
}
.submit {
  border: 1px solid;
  box-shadow: 10px 10px;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 10px;
  width: 10vw;
}
h3 {
  line-height: 1;
  margin: 0;
  padding: 0;
}
</style>
