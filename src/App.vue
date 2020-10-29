<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- <Home /> -->
    <!-- <Documentation /> -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/style/Header.vue";
import Footer from "./components/style/Footer.vue";
// import Home from "./components/pages/Home.vue";
// import Documentation from "./components/pages/Documentation.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
    // Home
    // Documentation
  }
};
</script>

<style></style>
