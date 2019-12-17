<template>
  <div>
    <Header header="Detské ihriská" />
    <v-gallery :images="list">
      <a class="lightBoxGallery__a" v-for="img in list" :data-image="img.url" v-bind:key="img.id">
        <div class="image-container">
          <img class="lazyload" src="@/assets/img/loading.svg" :data-src="img.thumb" :alt="img.alt" />
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
    title: "Detské ihriská | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Detské ihriská na záhradu alebo do parku."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/ihriska/1s.jpg"),
          url: require("~/assets/img/ihriska/1.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/2s.jpg"),
          url: require("~/assets/img/ihriska/2.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/3s.jpg"),
          url: require("~/assets/img/ihriska/3.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/4s.jpg"),
          url: require("~/assets/img/ihriska/4.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/5s.jpg"),
          url: require("~/assets/img/ihriska/5.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/6s.jpg"),
          url: require("~/assets/img/ihriska/6.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/7s.jpg"),
          url: require("~/assets/img/ihriska/7.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/8s.jpg"),
          url: require("~/assets/img/ihriska/8.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/9s.jpg"),
          url: require("~/assets/img/ihriska/9.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/10s.jpg"),
          url: require("~/assets/img/ihriska/10.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/11s.jpg"),
          url: require("~/assets/img/ihriska/11.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/12s.jpg"),
          url: require("~/assets/img/ihriska/12.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/13s.jpg"),
          url: require("~/assets/img/ihriska/13.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/14s.jpg"),
          url: require("~/assets/img/ihriska/14.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/15s.jpg"),
          url: require("~/assets/img/ihriska/15.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/16s.jpg"),
          url: require("~/assets/img/ihriska/16.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/17s.jpg"),
          url: require("~/assets/img/ihriska/17.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/18s.jpg"),
          url: require("~/assets/img/ihriska/18.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/19s.jpg"),
          url: require("~/assets/img/ihriska/19.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/20s.jpg"),
          url: require("~/assets/img/ihriska/20.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/21s.jpg"),
          url: require("~/assets/img/ihriska/21.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/22s.jpg"),
          url: require("~/assets/img/ihriska/22.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/23s.jpg"),
          url: require("~/assets/img/ihriska/23.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/24s.jpg"),
          url: require("~/assets/img/ihriska/24.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/25s.jpg"),
          url: require("~/assets/img/ihriska/25.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/26s.jpg"),
          url: require("~/assets/img/ihriska/26.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/27s.jpg"),
          url: require("~/assets/img/ihriska/27.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/28s.jpg"),
          url: require("~/assets/img/ihriska/28.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/29s.jpg"),
          url: require("~/assets/img/ihriska/29.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/30s.jpg"),
          url: require("~/assets/img/ihriska/30.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/31s.jpg"),
          url: require("~/assets/img/ihriska/31.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/32s.jpg"),
          url: require("~/assets/img/ihriska/32.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/33s.jpg"),
          url: require("~/assets/img/ihriska/33.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/34s.jpg"),
          url: require("~/assets/img/ihriska/34.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/35s.jpg"),
          url: require("~/assets/img/ihriska/35.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/36s.jpg"),
          url: require("~/assets/img/ihriska/36.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/37s.jpg"),
          url: require("~/assets/img/ihriska/37.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/38s.jpg"),
          url: require("~/assets/img/ihriska/38.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/39s.jpg"),
          url: require("~/assets/img/ihriska/39.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/40s.jpg"),
          url: require("~/assets/img/ihriska/40.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/41s.jpg"),
          url: require("~/assets/img/ihriska/41.jpg"),
          alt: "detské ihrisko"
        },
        {
          thumb: require("~/assets/img/ihriska/42s.jpg"),
          url: require("~/assets/img/ihriska/42.jpg"),
          alt: "detské ihrisko"
        }
      ]
    };
  }
};
</script>