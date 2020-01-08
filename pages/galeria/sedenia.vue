<template>
  <div>
    <Header header="Sedenia" />
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
          thumb: require("~/assets/img/sedenia/1s.jpg"),
          url: require("~/assets/img/sedenia/1.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/2s.jpg"),
          url: require("~/assets/img/sedenia/2.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/3s.jpg"),
          url: require("~/assets/img/sedenia/3.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/4s.jpg"),
          url: require("~/assets/img/sedenia/4.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/5s.jpg"),
          url: require("~/assets/img/sedenia/5.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/6s.jpg"),
          url: require("~/assets/img/sedenia/6.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/7s.jpg"),
          url: require("~/assets/img/sedenia/7.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/8s.jpg"),
          url: require("~/assets/img/sedenia/8.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/9s.jpg"),
          url: require("~/assets/img/sedenia/9.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/10s.jpg"),
          url: require("~/assets/img/sedenia/10.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/11s.jpg"),
          url: require("~/assets/img/sedenia/11.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/12s.jpg"),
          url: require("~/assets/img/sedenia/12.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/13s.jpg"),
          url: require("~/assets/img/sedenia/13.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/14s.jpg"),
          url: require("~/assets/img/sedenia/14.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/15s.jpg"),
          url: require("~/assets/img/sedenia/15.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/16s.jpg"),
          url: require("~/assets/img/sedenia/16.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/17s.jpg"),
          url: require("~/assets/img/sedenia/17.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/18s.jpg"),
          url: require("~/assets/img/sedenia/18.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/19s.jpg"),
          url: require("~/assets/img/sedenia/19.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/20s.jpg"),
          url: require("~/assets/img/sedenia/20.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/21s.jpg"),
          url: require("~/assets/img/sedenia/21.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/22s.jpg"),
          url: require("~/assets/img/sedenia/22.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/23s.jpg"),
          url: require("~/assets/img/sedenia/23.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/24s.jpg"),
          url: require("~/assets/img/sedenia/24.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/25s.jpg"),
          url: require("~/assets/img/sedenia/25.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/26s.jpg"),
          url: require("~/assets/img/sedenia/26.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/27s.jpg"),
          url: require("~/assets/img/sedenia/27.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/28s.jpg"),
          url: require("~/assets/img/sedenia/28.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/29s.jpg"),
          url: require("~/assets/img/sedenia/29.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/30s.jpg"),
          url: require("~/assets/img/sedenia/30.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/31s.jpg"),
          url: require("~/assets/img/sedenia/31.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/32s.jpg"),
          url: require("~/assets/img/sedenia/32.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/33s.jpg"),
          url: require("~/assets/img/sedenia/33.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/34s.jpg"),
          url: require("~/assets/img/sedenia/34.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/35s.jpg"),
          url: require("~/assets/img/sedenia/35.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/36s.jpg"),
          url: require("~/assets/img/sedenia/36.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/37s.jpg"),
          url: require("~/assets/img/sedenia/37.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/38s.jpg"),
          url: require("~/assets/img/sedenia/38.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/39s.jpg"),
          url: require("~/assets/img/sedenia/39.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/40s.jpg"),
          url: require("~/assets/img/sedenia/40.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/41s.jpg"),
          url: require("~/assets/img/sedenia/41.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/42s.jpg"),
          url: require("~/assets/img/sedenia/42.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/43s.jpg"),
          url: require("~/assets/img/sedenia/43.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/44s.jpg"),
          url: require("~/assets/img/sedenia/44.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/45s.jpg"),
          url: require("~/assets/img/sedenia/45.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/46s.jpg"),
          url: require("~/assets/img/sedenia/46.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/47s.jpg"),
          url: require("~/assets/img/sedenia/47.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/48s.jpg"),
          url: require("~/assets/img/sedenia/48.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/49s.jpg"),
          url: require("~/assets/img/sedenia/49.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/50s.jpg"),
          url: require("~/assets/img/sedenia/50.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/51s.jpg"),
          url: require("~/assets/img/sedenia/51.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/52s.jpg"),
          url: require("~/assets/img/sedenia/52.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/53s.jpg"),
          url: require("~/assets/img/sedenia/53.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/54s.jpg"),
          url: require("~/assets/img/sedenia/54.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/55s.jpg"),
          url: require("~/assets/img/sedenia/55.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/56s.jpg"),
          url: require("~/assets/img/sedenia/56.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/57s.jpg"),
          url: require("~/assets/img/sedenia/57.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/58s.jpg"),
          url: require("~/assets/img/sedenia/58.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/59s.jpg"),
          url: require("~/assets/img/sedenia/59.jpg"),
          alt: "drevené sedenie lavička stol"
        },
        {
          thumb: require("~/assets/img/sedenia/60s.jpg"),
          url: require("~/assets/img/sedenia/60.jpg"),
          alt: "drevené sedenie lavička stol"
        }
      ]
    };
  }
};
</script>