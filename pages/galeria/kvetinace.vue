<template>
  <div>
    <Header header="Kvetináče" />
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
    title: "Záhradné kvetináče | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Krásne záhradné kvetináče do Vašej záhrady."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/kvetinace/1s.jpg"),
          url: require("~/assets/img/kvetinace/1.jpg"),
          alt: "záhradný kvetináče"
        },
        {
          thumb: require("~/assets/img/kvetinace/2s.jpg"),
          url: require("~/assets/img/kvetinace/2.jpg"),
          alt: "záhradný kvetináče"
        },
        {
          thumb: require("~/assets/img/kvetinace/3s.jpg"),
          url: require("~/assets/img/kvetinace/3.jpg"),
          alt: "záhradný kvetináče"
        },
        {
          thumb: require("~/assets/img/kvetinace/4s.jpg"),
          url: require("~/assets/img/kvetinace/4.jpg"),
          alt: "záhradný kvetináče"
        },
        {
          thumb: require("~/assets/img/kvetinace/5s.jpg"),
          url: require("~/assets/img/kvetinace/5.jpg"),
          alt: "záhradný kvetináče"
        },
        {
          thumb: require("~/assets/img/kvetinace/6s.jpg"),
          url: require("~/assets/img/kvetinace/6.jpg"),
          alt: "záhradný kvetináče"
        },
        {
          thumb: require("~/assets/img/kvetinace/7s.jpg"),
          url: require("~/assets/img/kvetinace/7.jpg"),
          alt: "záhradný kvetináče"
        },
        {
          thumb: require("~/assets/img/kvetinace/8s.jpg"),
          url: require("~/assets/img/kvetinace/8.jpg"),
          alt: "záhradný kvetináče"
        }
      ]
    };
  }
};
</script>