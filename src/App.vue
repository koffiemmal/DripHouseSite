<script>
//import { RouterLink, RouterView } from 'vue-router'
import Landing from "./components/Landing.vue";
export default {
  components: {
    Landing,
  },
};
</script>

<template>
  <Landing />

  <!--  <RouterView /> -->
</template>

<style scoped>
@font-face {
  font-family: "Anton";
  src: url("@/assets/font/Anton.ttf") format('truetype');;
  font-weight: bolder;
  font-style: normal;
}
* {
  font-family: "Anton", sans-serif;
}
</style>
