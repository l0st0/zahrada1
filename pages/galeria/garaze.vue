<template>
  <div>
    <Header header="Garáže" />
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
    title: "Garáže | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Garáže prístrešky na autá."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/garaze/1s.jpg"),
          url: require("~/assets/img/garaze/1.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/2s.jpg"),
          url: require("~/assets/img/garaze/2.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/3s.jpg"),
          url: require("~/assets/img/garaze/3.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/4s.jpg"),
          url: require("~/assets/img/garaze/4.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/5s.jpg"),
          url: require("~/assets/img/garaze/5.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/6s.jpg"),
          url: require("~/assets/img/garaze/6.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/7s.jpg"),
          url: require("~/assets/img/garaze/7.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/8s.jpg"),
          url: require("~/assets/img/garaze/8.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/9s.jpg"),
          url: require("~/assets/img/garaze/9.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/10s.jpg"),
          url: require("~/assets/img/garaze/10.jpg"),
          alt: "garáž"
        },
        {
          thumb: require("~/assets/img/garaze/11s.jpg"),
          url: require("~/assets/img/garaze/11.jpg"),
          alt: "garáž"
        }
      ]
    };
  }
};
</script>