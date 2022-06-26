<template>
  <LoginDog @login="login" />
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
    }
  }
  
};
</script>

<style scoped>

</style>
