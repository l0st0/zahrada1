<template>
  <div>
    <Header header="Sedenia" />
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
    title: "Sedenia | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Drevené sedacie sety pre Vašu záhradu, chatu, altánok."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/altany/1s.jpg"),
          url: require("~/assets/img/altany/1.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/2s.jpg"),
          url: require("~/assets/img/altany/2.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/3s.jpg"),
          url: require("~/assets/img/altany/3.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/4s.jpg"),
          url: require("~/assets/img/altany/4.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/5s.jpg"),
          url: require("~/assets/img/altany/5.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/6s.jpg"),
          url: require("~/assets/img/altany/6.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/7s.jpg"),
          url: require("~/assets/img/altany/7.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/8s.jpg"),
          url: require("~/assets/img/altany/8.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/9s.jpg"),
          url: require("~/assets/img/altany/9.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/10s.jpg"),
          url: require("~/assets/img/altany/10.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/11s.jpg"),
          url: require("~/assets/img/altany/11.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/12s.jpg"),
          url: require("~/assets/img/altany/12.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/13s.jpg"),
          url: require("~/assets/img/altany/13.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/14s.jpg"),
          url: require("~/assets/img/altany/14.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/15s.jpg"),
          url: require("~/assets/img/altany/15.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/16s.jpg"),
          url: require("~/assets/img/altany/16.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/17s.jpg"),
          url: require("~/assets/img/altany/17.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/18s.jpg"),
          url: require("~/assets/img/altany/18.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/19s.jpg"),
          url: require("~/assets/img/altany/19.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/20s.jpg"),
          url: require("~/assets/img/altany/20.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/21s.jpg"),
          url: require("~/assets/img/altany/21.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/22s.jpg"),
          url: require("~/assets/img/altany/22.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/23s.jpg"),
          url: require("~/assets/img/altany/23.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/24s.jpg"),
          url: require("~/assets/img/altany/24.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/25s.jpg"),
          url: require("~/assets/img/altany/25.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/26s.jpg"),
          url: require("~/assets/img/altany/26.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/27s.jpg"),
          url: require("~/assets/img/altany/27.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/28s.jpg"),
          url: require("~/assets/img/altany/28.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/29s.jpg"),
          url: require("~/assets/img/altany/29.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/30s.jpg"),
          url: require("~/assets/img/altany/30.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/31s.jpg"),
          url: require("~/assets/img/altany/31.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/32s.jpg"),
          url: require("~/assets/img/altany/32.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/33s.jpg"),
          url: require("~/assets/img/altany/33.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/altany/34s.jpg"),
          url: require("~/assets/img/altany/34.jpg"),
          alt: "altanok"
        }
      ]
    };
  }
};
</script>