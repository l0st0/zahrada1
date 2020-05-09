<template>
  <div class="container-small">
    <Header header="Aktuálna ponuka výrobkov na predajni" />
    <p class="ponuka-head">Aktualizované 9.5 2020</p>

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
    title: "Aktuálna ponuka | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Naša aktuálna ponuka výrobkov na v našom záhradnom centre."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/aktualne/1s.jpg"),
          url: require("~/assets/img/aktualne/1.jpg"),
          alt: "studne"
        },
        {
          thumb: require("~/assets/img/aktualne/2s.jpg"),
          url: require("~/assets/img/aktualne/2.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/3s.jpg"),
          url: require("~/assets/img/aktualne/3.jpg"),
          alt: "studna"
        },
        {
          thumb: require("~/assets/img/aktualne/4s.jpg"),
          url: require("~/assets/img/aktualne/4.jpg"),
          alt: "lavicka"
        },
        {
          thumb: require("~/assets/img/aktualne/5s.jpg"),
          url: require("~/assets/img/aktualne/5.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/6s.jpg"),
          url: require("~/assets/img/aktualne/6.jpg"),
          alt: "studna"
        },
        {
          thumb: require("~/assets/img/aktualne/7s.jpg"),
          url: require("~/assets/img/aktualne/7.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/8s.jpg"),
          url: require("~/assets/img/aktualne/8.jpg"),
          alt: "studna"
        },
        {
          thumb: require("~/assets/img/aktualne/9s.jpg"),
          url: require("~/assets/img/aktualne/9.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/10s.jpg"),
          url: require("~/assets/img/aktualne/10.jpg"),
          alt: "studna"
        },
        {
          thumb: require("~/assets/img/aktualne/11s.jpg"),
          url: require("~/assets/img/aktualne/11.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/12s.jpg"),
          url: require("~/assets/img/aktualne/12.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/13s.jpg"),
          url: require("~/assets/img/aktualne/13.jpg"),
          alt: "studna"
        },
        {
          thumb: require("~/assets/img/aktualne/14s.jpg"),
          url: require("~/assets/img/aktualne/14.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/15s.jpg"),
          url: require("~/assets/img/aktualne/15.jpg"),
          alt: "studna"
        },
        {
          thumb: require("~/assets/img/aktualne/16s.jpg"),
          url: require("~/assets/img/aktualne/16.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/17s.jpg"),
          url: require("~/assets/img/aktualne/17.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/18s.jpg"),
          url: require("~/assets/img/aktualne/18.jpg"),
          alt: "studna"
        },
        {
          thumb: require("~/assets/img/aktualne/19s.jpg"),
          url: require("~/assets/img/aktualne/19.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/20s.jpg"),
          url: require("~/assets/img/aktualne/20.jpg"),
          alt: "sedenie"
        },
        {
          thumb: require("~/assets/img/aktualne/21s.jpg"),
          url: require("~/assets/img/aktualne/21.jpg"),
          alt: "studna"
        },
        {
          thumb: require("~/assets/img/aktualne/22s.jpg"),
          url: require("~/assets/img/aktualne/22.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/aktualne/23s.jpg"),
          url: require("~/assets/img/aktualne/23.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/aktualne/24s.jpg"),
          url: require("~/assets/img/aktualne/24.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/aktualne/25s.jpg"),
          url: require("~/assets/img/aktualne/25.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/aktualne/26s.jpg"),
          url: require("~/assets/img/aktualne/26.jpg"),
          alt: "altanok"
        },
        {
          thumb: require("~/assets/img/aktualne/27s.jpg"),
          url: require("~/assets/img/aktualne/27.jpg"),
          alt: "altanok"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.heading-2 {
  padding: 5rem 2rem 2rem 2rem;
}

.ponuka-head {
  font-size: 2rem;
  padding-bottom: 4rem;
  line-height: 1.5;
  margin: auto;
  text-align: center;
  color: white;
}

.image-container {
  img {
    width: 15rem !important;
    height: 15rem !important;
  }
}
</style>



