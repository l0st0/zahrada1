<template>
  <div>
    <Header header="Kameň" />
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
    title: "Kameň | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Kvalitný kameň za dobrú cenu."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/kamene/1s.jpg"),
          url: require("~/assets/img/kamene/1.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/2s.jpg"),
          url: require("~/assets/img/kamene/2.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/3s.jpg"),
          url: require("~/assets/img/kamene/3.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/4s.jpg"),
          url: require("~/assets/img/kamene/4.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/5s.jpg"),
          url: require("~/assets/img/kamene/5.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/6s.jpg"),
          url: require("~/assets/img/kamene/6.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/7s.jpg"),
          url: require("~/assets/img/kamene/7.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/8s.jpg"),
          url: require("~/assets/img/kamene/8.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/9s.jpg"),
          url: require("~/assets/img/kamene/9.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/10s.jpg"),
          url: require("~/assets/img/kamene/10.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/11s.jpg"),
          url: require("~/assets/img/kamene/11.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/12s.jpg"),
          url: require("~/assets/img/kamene/12.jpg"),
          alt: "kameň"
        },
        {
          thumb: require("~/assets/img/kamene/13s.jpg"),
          url: require("~/assets/img/kamene/13.jpg"),
          alt: "kameň"
        }
      ]
    };
  }
};
</script>