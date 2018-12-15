<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="nav navbar-nav">
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
        </b-navbar-brand>
        <router-link to="/" class="nav-item nav-link active">Home</router-link>|
        <router-link to="/Categories" class="nav-item nav-link">Categories</router-link>

        |
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
