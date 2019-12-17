<template>
  <div>
    <Header header="Sviečky" />
    <v-gallery :images="list">
      <a class="lightBoxGallery__a" v-for="img in list" :data-image="img.url" v-bind:key="img.id">
        <div class="image-container">
          <img class="lazyload" src="@/assets/img/loading.svg" :data-src="img.thumb" :alt="img.alt" />
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

  head: {
    title: "Sviečky | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Kvalitné sviečky."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/sviecky/1s.jpg"),
          url: require("~/assets/img/sviecky/1.jpg"),
          alt: "sviečka"
        },
        {
          thumb: require("~/assets/img/sviecky/2s.jpg"),
          url: require("~/assets/img/sviecky/2.jpg"),
          alt: "sviečka"
        },
        {
          thumb: require("~/assets/img/sviecky/3s.jpg"),
          url: require("~/assets/img/sviecky/3.jpg"),
          alt: "sviečka"
        },
        {
          thumb: require("~/assets/img/sviecky/4s.jpg"),
          url: require("~/assets/img/sviecky/4.jpg"),
          alt: "sviečka"
        },
        {
          thumb: require("~/assets/img/sviecky/5s.jpg"),
          url: require("~/assets/img/sviecky/5.jpg"),
          alt: "sviečka"
        },
        {
          thumb: require("~/assets/img/sviecky/6s.jpg"),
          url: require("~/assets/img/sviecky/6.jpg"),
          alt: "sviečka"
        },
        {
          thumb: require("~/assets/img/sviecky/7s.jpg"),
          url: require("~/assets/img/sviecky/7.jpg"),
          alt: "sviečka"
        },
        {
          thumb: require("~/assets/img/sviecky/8s.jpg"),
          url: require("~/assets/img/sviecky/8.jpg"),
          alt: "sviečka"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  img {
    width: 18rem !important;
    height: 10rem !important;
  }
}
</style>