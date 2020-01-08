<template>
  <div>
    <nav class="nav">
      <Navbar />
    </nav>
    <nuxt />
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
.nav {
  position: sticky;
  top: 0;
  z-index: 5;
}

.main {
  //min-height: calc(100vh - 4.7rem);
}

.footer {
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 5px 2px rgb(0, 0, 0);
}
</style>
