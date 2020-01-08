<template>
  <div>
    <Header header="Ploty" />
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
    title: "Ploty | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Drevené ploty na mieru podľa Vaších predstáv. "
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/ploty/1s.jpg"),
          url: require("~/assets/img/ploty/1.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/2s.jpg"),
          url: require("~/assets/img/ploty/2.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/3s.jpg"),
          url: require("~/assets/img/ploty/3.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/4s.jpg"),
          url: require("~/assets/img/ploty/4.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/5s.jpg"),
          url: require("~/assets/img/ploty/5.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/6s.jpg"),
          url: require("~/assets/img/ploty/6.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/7s.jpg"),
          url: require("~/assets/img/ploty/7.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/8s.jpg"),
          url: require("~/assets/img/ploty/8.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/9s.jpg"),
          url: require("~/assets/img/ploty/9.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/10s.jpg"),
          url: require("~/assets/img/ploty/10.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/11s.jpg"),
          url: require("~/assets/img/ploty/11.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/12s.jpg"),
          url: require("~/assets/img/ploty/12.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/13s.jpg"),
          url: require("~/assets/img/ploty/13.jpg"),
          alt: "drevený plot"
        },
        {
          thumb: require("~/assets/img/ploty/14s.jpg"),
          url: require("~/assets/img/ploty/14.jpg"),
          alt: "drevený plot"
        }
      ]
    };
  }
};
</script>