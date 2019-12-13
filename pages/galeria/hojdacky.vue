<template>
  <div>
    <Header header="Hojdačky" />
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
    title: "Hojdačky | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Hojdačky ako doplnok do Vašej záhrady."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/hojdacky/1s.jpg"),
          url: require("~/assets/img/hojdacky/1.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/2s.jpg"),
          url: require("~/assets/img/hojdacky/2.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/3s.jpg"),
          url: require("~/assets/img/hojdacky/3.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/4s.jpg"),
          url: require("~/assets/img/hojdacky/4.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/5s.jpg"),
          url: require("~/assets/img/hojdacky/5.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/6s.jpg"),
          url: require("~/assets/img/hojdacky/6.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/7s.jpg"),
          url: require("~/assets/img/hojdacky/7.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/8s.jpg"),
          url: require("~/assets/img/hojdacky/8.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/9s.jpg"),
          url: require("~/assets/img/hojdacky/9.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/10s.jpg"),
          url: require("~/assets/img/hojdacky/10.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/11s.jpg"),
          url: require("~/assets/img/hojdacky/11.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/12s.jpg"),
          url: require("~/assets/img/hojdacky/12.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/13s.jpg"),
          url: require("~/assets/img/hojdacky/13.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/14s.jpg"),
          url: require("~/assets/img/hojdacky/14.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/15s.jpg"),
          url: require("~/assets/img/hojdacky/15.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/16s.jpg"),
          url: require("~/assets/img/hojdacky/16.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/17s.jpg"),
          url: require("~/assets/img/hojdacky/17.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/18s.jpg"),
          url: require("~/assets/img/hojdacky/18.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/19s.jpg"),
          url: require("~/assets/img/hojdacky/19.jpg"),
          alt: "drevená hojdačka do záhrady"
        },
        {
          thumb: require("~/assets/img/hojdacky/20s.jpg"),
          url: require("~/assets/img/hojdacky/20.jpg"),
          alt: "drevená hojdačka do záhrady"
        }
      ]
    };
  }
};
</script>
