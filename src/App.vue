<template>
  <div id="app">
<!--    <AdminLayout v-if="isAuthenticated" />-->
    <LoginLayout />
<!--    <SaleLayout/>-->
  </div>
</template>

<script>
  // import AdminLayout from './layouts/AdminLayout'
  import LoginLayout from './layouts/LoginLayout'
  // import SaleLayout from "@/layouts/SaleLayout";
  import {mapState} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState('auth', ['isAuthenticated']),
    },
    components: {
      // AdminLayout,
      LoginLayout,
      // SaleLayout
    }
  }
</script>

<style lang="scss">
@import "./assets/styles/variables";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $colorDefault;
}

body {
  margin: 0;
}
</style>
