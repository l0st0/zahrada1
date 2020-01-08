<template>
  <div>
    <Header header="Doplnky" />
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
    title: "Doplnky | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Záhradné doplnky pre Vašu záhradu."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/doplnky/1s.jpg"),
          url: require("~/assets/img/doplnky/1.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/2s.jpg"),
          url: require("~/assets/img/doplnky/2.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/3s.jpg"),
          url: require("~/assets/img/doplnky/3.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/4s.jpg"),
          url: require("~/assets/img/doplnky/4.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/5s.jpg"),
          url: require("~/assets/img/doplnky/5.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/6s.jpg"),
          url: require("~/assets/img/doplnky/6.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/7s.jpg"),
          url: require("~/assets/img/doplnky/7.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/8s.jpg"),
          url: require("~/assets/img/doplnky/8.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/9s.jpg"),
          url: require("~/assets/img/doplnky/9.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/10s.jpg"),
          url: require("~/assets/img/doplnky/10.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/11s.jpg"),
          url: require("~/assets/img/doplnky/11.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/12s.jpg"),
          url: require("~/assets/img/doplnky/12.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/13s.jpg"),
          url: require("~/assets/img/doplnky/13.jpg"),
          alt: "záhradný doplnok"
        },
        {
          thumb: require("~/assets/img/doplnky/14s.jpg"),
          url: require("~/assets/img/doplnky/14.jpg"),
          alt: "záhradný doplnok"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  img {
    width: 14rem !important;
    height: 16rem !important;
  }
}
</style>