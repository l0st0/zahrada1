<template>
  <div>
    <Header header="Zimné záhrady" />
    <v-gallery :images="list">
      <a class="lightBoxGallery__a" v-for="img in list" :data-image="img.url" v-bind:key="img.id">
        <div class="image-container">
          <img class="lazyload" src="@/assets/img/loading.png" :data-src="img.thumb" :alt="img.alt" />
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
    title: "Zimné záhrady | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Drevené zimné záhrady pre pohodlné posedenia aj v chladnom počasí."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/zahrady/1s.jpg"),
          url: require("~/assets/img/zahrady/1.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/2s.jpg"),
          url: require("~/assets/img/zahrady/2.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/3s.jpg"),
          url: require("~/assets/img/zahrady/3.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/4s.jpg"),
          url: require("~/assets/img/zahrady/4.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/5s.jpg"),
          url: require("~/assets/img/zahrady/5.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/6s.jpg"),
          url: require("~/assets/img/zahrady/6.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/7s.jpg"),
          url: require("~/assets/img/zahrady/7.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/8s.jpg"),
          url: require("~/assets/img/zahrady/8.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/9s.jpg"),
          url: require("~/assets/img/zahrady/9.jpg"),
          alt: "zimná záhrada"
        },
        {
          thumb: require("~/assets/img/zahrady/10s.jpg"),
          url: require("~/assets/img/zahrady/10.jpg"),
          alt: "zimná záhrada"
        }
      ]
    };
  }
};
</script>