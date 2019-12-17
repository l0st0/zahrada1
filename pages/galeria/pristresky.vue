<template>
  <div>
    <Header header="Prístrešky" />
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
    title: "Prístrešky | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Drevené prístrešky pre Vaše auto."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/pristresky/1s.jpg"),
          url: require("~/assets/img/pristresky/1.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/2s.jpg"),
          url: require("~/assets/img/pristresky/2.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/3s.jpg"),
          url: require("~/assets/img/pristresky/3.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/4s.jpg"),
          url: require("~/assets/img/pristresky/4.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/5s.jpg"),
          url: require("~/assets/img/pristresky/5.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/6s.jpg"),
          url: require("~/assets/img/pristresky/6.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/7s.jpg"),
          url: require("~/assets/img/pristresky/7.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/8s.jpg"),
          url: require("~/assets/img/pristresky/8.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/9s.jpg"),
          url: require("~/assets/img/pristresky/9.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/10s.jpg"),
          url: require("~/assets/img/pristresky/10.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/11s.jpg"),
          url: require("~/assets/img/pristresky/11.jpg"),
          alt: "drevený prístrešok"
        },
        {
          thumb: require("~/assets/img/pristresky/12s.jpg"),
          url: require("~/assets/img/pristresky/12.jpg"),
          alt: "drevený prístrešok"
        }
      ]
    };
  }
};
</script>