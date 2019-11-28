<template>
  <div class="container-small">
    <Header header="Aktuálna ponuka výrobkov na predajni" />
    <p class="ponuka-head">Aktualizované 3.10 2019</p>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.ponuka-head {
  font-size: 2rem;
  padding-bottom: 2rem;
  font-family: $font-family3;
  line-height: 1.5;
  margin: auto;
  text-align: center;
}
</style>