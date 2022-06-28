<template>
  <LoginDog @login="login" @google-login="googleLogin" />
</template>

<script>
import LoginDog from '@/components/LoginDog.vue';
export default {
  components: { LoginDog },
  name: "LoginView",
  data() {
    return {
      toggleHide: 'unhide'
    };
  },
  methods: {
    login(username, password) {
      this.$store.dispatch('LOGIN', {username, password});
      this.$router.push('/');
    },
    googleLogin() {
      window.location.href = "http://localhost:8000/auth/login/google-oauth2/";
    }
  }
  
};
</script>

<style scoped>

</style>
