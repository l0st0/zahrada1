<template>
  <div>
    <Header header="Chatky a sklady" />
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
    title: "Chatky a sklady | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Drevené víkendove chatky."
      }
    ]
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/chatky/1s.jpg"),
          url: require("~/assets/img/chatky/1.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/2s.jpg"),
          url: require("~/assets/img/chatky/2.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/3s.jpg"),
          url: require("~/assets/img/chatky/3.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/4s.jpg"),
          url: require("~/assets/img/chatky/4.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/5s.jpg"),
          url: require("~/assets/img/chatky/5.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/6s.jpg"),
          url: require("~/assets/img/chatky/6.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/7s.jpg"),
          url: require("~/assets/img/chatky/7.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/8s.jpg"),
          url: require("~/assets/img/chatky/8.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/9s.jpg"),
          url: require("~/assets/img/chatky/9.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/10s.jpg"),
          url: require("~/assets/img/chatky/10.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/11s.jpg"),
          url: require("~/assets/img/chatky/11.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/12s.jpg"),
          url: require("~/assets/img/chatky/12.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/13s.jpg"),
          url: require("~/assets/img/chatky/13.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/14s.jpg"),
          url: require("~/assets/img/chatky/14.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/15s.jpg"),
          url: require("~/assets/img/chatky/15.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/16s.jpg"),
          url: require("~/assets/img/chatky/16.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/17s.jpg"),
          url: require("~/assets/img/chatky/17.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/18s.jpg"),
          url: require("~/assets/img/chatky/18.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/19s.jpg"),
          url: require("~/assets/img/chatky/19.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/20s.jpg"),
          url: require("~/assets/img/chatky/20.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/21s.jpg"),
          url: require("~/assets/img/chatky/21.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/22s.jpg"),
          url: require("~/assets/img/chatky/22.jpg"),
          alt: "chatka alebo menší sklad"
        },
        {
          thumb: require("~/assets/img/chatky/23s.jpg"),
          url: require("~/assets/img/chatky/23.jpg"),
          alt: "chatka alebo menší sklad"
        }
      ]
    };
  }
};
</script>