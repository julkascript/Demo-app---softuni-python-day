<template>
  <LoginDog />
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
  
};
</script>

<style scoped>

</style>
