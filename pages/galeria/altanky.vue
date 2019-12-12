<template>
  <div>
    <Header header="Altánky" />
    <v-gallery :images="list"></v-gallery>
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
        { title: "Image2", url: require("~/assets/img/altany/1.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/2.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/3.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/4.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/5.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/6.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/7.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/8.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/9.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/10.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/11.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/12.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/13.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/14.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/15.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/16.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/17.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/18.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/19.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/20.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/21.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/22.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/23.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/24.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/25.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/26.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/27.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/28.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/29.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/30.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/31.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/32.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/33.jpg") },
        { title: "Image2", url: require("~/assets/img/altany/34.jpg") }
      ]
    };
  }
};
</script>

<style lang="scss">
.light-gallery {
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