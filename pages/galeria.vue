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
</style>