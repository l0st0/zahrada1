<template>
  <div class="container-small">
    <GalleryNav />
    <nuxt-child />
  </div>
</template>

<script>
import GalleryNav from "../components/galleryNav";
export default {
  components: {
    GalleryNav
  }
};
</script>

<style lang="scss" scoped>
.page-enter-active {
  transition: all 2s ease-in;
}
.page-leave-active {
  transition: all 1s ease-out;
}
.page-enter, .page-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}


</style>