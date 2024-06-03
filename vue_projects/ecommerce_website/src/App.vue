<template>
  <div class="navbar">
    <a href="#"><img src="favicon.ico" alt="logo"/></a>
    <router-link to="/" class="nav-item">Home</router-link><br>
    <router-link to="/product" class="nav-item">Products</router-link><br>
    <router-link to="/contact" class="nav-item">Contact</router-link><br>
  </div>

    <router-view></router-view>

</template>

<script>
  export default {
    name: 'App',
    components: {
   
    }
  }
</script>

<style scoped>
.navbar {
  display: flex;
  background-color: #333;
  padding: 10px; 
  padding-left: 20px;
  gap: 10px;
  align-items: center;
}
.nav-item {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

.nav-item:hover {
  text-decoration: underline;
  color:greenyellow;
}
</style>
