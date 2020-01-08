<template>
  <div>
    <Header header="Lavičky" />
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
    title: "Lavičky | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Drevené lavičky do záhrady alebo do chaty pre príjemné posedenie."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/lavicky/1s.jpg"),
          url: require("~/assets/img/lavicky/1.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/2s.jpg"),
          url: require("~/assets/img/lavicky/2.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/3s.jpg"),
          url: require("~/assets/img/lavicky/3.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/4s.jpg"),
          url: require("~/assets/img/lavicky/4.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/5s.jpg"),
          url: require("~/assets/img/lavicky/5.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/6s.jpg"),
          url: require("~/assets/img/lavicky/6.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/7s.jpg"),
          url: require("~/assets/img/lavicky/7.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/8s.jpg"),
          url: require("~/assets/img/lavicky/8.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/9s.jpg"),
          url: require("~/assets/img/lavicky/9.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/10s.jpg"),
          url: require("~/assets/img/lavicky/10.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/11s.jpg"),
          url: require("~/assets/img/lavicky/11.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/12s.jpg"),
          url: require("~/assets/img/lavicky/12.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/13s.jpg"),
          url: require("~/assets/img/lavicky/13.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/14s.jpg"),
          url: require("~/assets/img/lavicky/14.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/15s.jpg"),
          url: require("~/assets/img/lavicky/15.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/16s.jpg"),
          url: require("~/assets/img/lavicky/16.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/17s.jpg"),
          url: require("~/assets/img/lavicky/17.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/18s.jpg"),
          url: require("~/assets/img/lavicky/18.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/19s.jpg"),
          url: require("~/assets/img/lavicky/19.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/20s.jpg"),
          url: require("~/assets/img/lavicky/20.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/21s.jpg"),
          url: require("~/assets/img/lavicky/21.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/22s.jpg"),
          url: require("~/assets/img/lavicky/22.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/23s.jpg"),
          url: require("~/assets/img/lavicky/23.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/24s.jpg"),
          url: require("~/assets/img/lavicky/24.jpg"),
          alt: "drevená lavička"
        },
        {
          thumb: require("~/assets/img/lavicky/25s.jpg"),
          url: require("~/assets/img/lavicky/25.jpg"),
          alt: "drevená lavička"
        }
      ]
    };
  }
};
</script>