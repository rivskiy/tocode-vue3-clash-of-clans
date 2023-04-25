<template>
  <div class="wrapper">
    <Header/>
    <div class="wrapper-content">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../src/components/Header-main.vue";
import Footer from "../src/components/Footer-main.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {

    }
  }
};
</script>

<style lang="scss">
</style>
