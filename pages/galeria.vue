
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
  animation: acrossIn 0.5s ease-in-out;
}

.page-leave-active {
  animation: acrossOut 0.5s ease-in-out;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
/* .page-enter-active {
  transition: all 1s ease-in;
}
.page-leave-active {
  transition: all 1s ease-out;
}
.page-enter, .page-leave-to
 {
  transform: translateX(20px);
  opacity: 0;
} */
</style>