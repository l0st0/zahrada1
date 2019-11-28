<template>
  <div>
    <nav class="nav">
      <MainNav />
    </nav>
    <main class="main">
      <nuxt />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import MainNav from "@/components/mainNav";
import Footer from "@/components/footer";
export default {
  components: {
    MainNav,
    Footer
  }
};
</script>

<style lang="scss">
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
}

.main {
  min-height: 100vh;
}

.footer {
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 5px 2px rgb(0, 0, 0);
}
</style>
