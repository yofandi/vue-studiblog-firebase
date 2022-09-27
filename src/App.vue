<template>
  <!-- navbar -->
  <NavbarBlog />
  <router-view />
  <FooterBlog />
</template>

<script>
import NavbarBlog from "./components/Navbar.vue";
import FooterBlog from "./components/Footer.vue";
export default {
  components: {
    NavbarBlog,
    FooterBlog,
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800");
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
