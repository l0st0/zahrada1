<template>
  <div>
    <Header header="Altánky" />
    <v-gallery :images="list">
      <a v-for="img in list" :data-image="img.url">
        <div class="image-container">
          <img class="lazyload" :data-src="img.url" />
        </div>
      </a>
    </v-gallery>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      list: [
        { url: require("~/assets/img/altany/1.jpg") },
        { url: require("~/assets/img/altany/2.jpg") },
        { url: require("~/assets/img/altany/3.jpg") },
        { url: require("~/assets/img/altany/4.jpg") },
        { url: require("~/assets/img/altany/5.jpg") },
        { url: require("~/assets/img/altany/6.jpg") },
        { url: require("~/assets/img/altany/7.jpg") },
        { url: require("~/assets/img/altany/8.jpg") },
        { url: require("~/assets/img/altany/9.jpg") },
        { url: require("~/assets/img/altany/10.jpg") },
        { url: require("~/assets/img/altany/11.jpg") },
        { url: require("~/assets/img/altany/12.jpg") },
        { url: require("~/assets/img/altany/13.jpg") },
        { url: require("~/assets/img/altany/14.jpg") },
        { url: require("~/assets/img/altany/15.jpg") },
        { url: require("~/assets/img/altany/16.jpg") },
        { url: require("~/assets/img/altany/17.jpg") },
        { url: require("~/assets/img/altany/18.jpg") },
        { url: require("~/assets/img/altany/19.jpg") },
        { url: require("~/assets/img/altany/20.jpg") },
        { url: require("~/assets/img/altany/21.jpg") },
        { url: require("~/assets/img/altany/22.jpg") },
        { url: require("~/assets/img/altany/23.jpg") },
        { url: require("~/assets/img/altany/24.jpg") },
        { url: require("~/assets/img/altany/25.jpg") },
        { url: require("~/assets/img/altany/26.jpg") },
        { url: require("~/assets/img/altany/27.jpg") },
        { url: require("~/assets/img/altany/28.jpg") },
        { url: require("~/assets/img/altany/29.jpg") },
        { url: require("~/assets/img/altany/30.jpg") },
        { url: require("~/assets/img/altany/31.jpg") },
        { url: require("~/assets/img/altany/32.jpg") },
        { url: require("~/assets/img/altany/33.jpg") },
        { url: require("~/assets/img/altany/34.jpg") }
      ]
    };
  }
};
</script>

<style lang="scss">
.lightBoxGallery {
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  max-width: 150rem;
  margin: 0 auto;

  a {
    border: none !important;
    padding: 0 !important;
    margin: 1rem !important;
  }

  .image-container {
    height: auto !important;

    img {
      cursor: pointer;
      width: 16rem !important;
      height: 15rem !important;
      box-shadow: 0 0 6px 2px black;

      &:hover {
        transition: all 0.3s;
        box-shadow: 0 0 6px 2px black !important;
        transform: scale(1.05);
      }
    }
  }
}
</style>