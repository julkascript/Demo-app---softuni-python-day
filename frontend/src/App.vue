<template>
  <div class="d-flex flex-row align-items-center justify-content-center">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div 
      class="logout-btn"
      v-show="isLoggedIn"
      @click="logout"
    >Logout</div>
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT');
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logout-btn:hover {
  cursor: pointer;
  color: blue;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
