<template>
  <div>
    <Header header="Studne" />
    <v-gallery :images="list">
      <a class="lightBoxGallery__a" v-for="img in list" :data-image="img.url" v-bind:key="img.id">
        <div class="image-container">
          <img class="lazyload" :data-src="img.thumb" :alt="img.alt" />
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
    title: "Studne | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Drevené studne ako doplnok pre Vašu záhradu. "
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/studne/1s.jpg"),
          url: require("~/assets/img/studne/1.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/2s.jpg"),
          url: require("~/assets/img/studne/2.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/3s.jpg"),
          url: require("~/assets/img/studne/3.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/4s.jpg"),
          url: require("~/assets/img/studne/4.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/5s.jpg"),
          url: require("~/assets/img/studne/5.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/6s.jpg"),
          url: require("~/assets/img/studne/6.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/7s.jpg"),
          url: require("~/assets/img/studne/7.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/8s.jpg"),
          url: require("~/assets/img/studne/8.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/9s.jpg"),
          url: require("~/assets/img/studne/9.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/10s.jpg"),
          url: require("~/assets/img/studne/10.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/11s.jpg"),
          url: require("~/assets/img/studne/11.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/12s.jpg"),
          url: require("~/assets/img/studne/12.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/13s.jpg"),
          url: require("~/assets/img/studne/13.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/14s.jpg"),
          url: require("~/assets/img/studne/14.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/15s.jpg"),
          url: require("~/assets/img/studne/15.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/16s.jpg"),
          url: require("~/assets/img/studne/16.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/17s.jpg"),
          url: require("~/assets/img/studne/17.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/18s.jpg"),
          url: require("~/assets/img/studne/18.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/19s.jpg"),
          url: require("~/assets/img/studne/19.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/20s.jpg"),
          url: require("~/assets/img/studne/20.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/21s.jpg"),
          url: require("~/assets/img/studne/21.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/22s.jpg"),
          url: require("~/assets/img/studne/22.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/23s.jpg"),
          url: require("~/assets/img/studne/23.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/24s.jpg"),
          url: require("~/assets/img/studne/24.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/25s.jpg"),
          url: require("~/assets/img/studne/25.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/26s.jpg"),
          url: require("~/assets/img/studne/26.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/27s.jpg"),
          url: require("~/assets/img/studne/27.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/28s.jpg"),
          url: require("~/assets/img/studne/28.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/29s.jpg"),
          url: require("~/assets/img/studne/29.jpg"),
          alt: "drevená studňa"
        },
        {
          thumb: require("~/assets/img/studne/30s.jpg"),
          url: require("~/assets/img/studne/30.jpg"),
          alt: "drevená studňa"
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