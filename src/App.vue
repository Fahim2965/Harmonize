<script setup>
async function fetchData() {
  let result = await fetch()
  console.log(result)
}
</script>

<template>
<body>
  <nav>
  <router-link to="/">Home</router-link> | 
  <router-link to="/PlayList">Play List</router-link> | 
  <router-link to="/SignUp">Sign Up</router-link> |
  <button @click="fetchData()">Fetch</button>
  </nav>
  <router-view />
  </body>
</template>

<style scoped>
body {
  text-align: center;}
</style>
