import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://localhost:8000/wp-json/wp/v2/`,
  headers: {
    Authorization:
      'Bearer {eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMCIsImlhdCI6MTYyOTIzNzIzMywibmJmIjoxNjI5MjM3MjMzLCJleHAiOjE2Mjk4NDIwMzMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19._cq2ASUkkDN5D1KjI3vtXL7_3kyrIIiiCtMfjZq5uFA}'
  }
})
