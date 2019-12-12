<template>
  <div>
    <Header header="Altánky" />
    <v-gallery :images="list">
      <a v-for="img in list" :data-image="img.url">
        <div class="image-container">
          <img class="lazyload" :data-src="img.thumb" />
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

  head() {
    return {
      title: "Záhradné centrum | Altánky",
      meta: [
        { hid: "description", name: "description", content: "Drevené altánky." }
      ]
    };
  },

  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/altany/1s.jpg"),
          url: require("~/assets/img/altany/1.jpg")
        },
        {
          thumb: require("~/assets/img/altany/2s.jpg"),
          url: require("~/assets/img/altany/2.jpg")
        },
        {
          thumb: require("~/assets/img/altany/3s.jpg"),
          url: require("~/assets/img/altany/3.jpg")
        },
        {
          thumb: require("~/assets/img/altany/4s.jpg"),
          url: require("~/assets/img/altany/4.jpg")
        },
        {
          thumb: require("~/assets/img/altany/5s.jpg"),
          url: require("~/assets/img/altany/5.jpg")
        },
        {
          thumb: require("~/assets/img/altany/6s.jpg"),
          url: require("~/assets/img/altany/6.jpg")
        },
        {
          thumb: require("~/assets/img/altany/7s.jpg"),
          url: require("~/assets/img/altany/7.jpg")
        },
        {
          thumb: require("~/assets/img/altany/8s.jpg"),
          url: require("~/assets/img/altany/8.jpg")
        },
        {
          thumb: require("~/assets/img/altany/9s.jpg"),
          url: require("~/assets/img/altany/9.jpg")
        },
        {
          thumb: require("~/assets/img/altany/10s.jpg"),
          url: require("~/assets/img/altany/10.jpg")
        },
        {
          thumb: require("~/assets/img/altany/11s.jpg"),
          url: require("~/assets/img/altany/11.jpg")
        },
        {
          thumb: require("~/assets/img/altany/12s.jpg"),
          url: require("~/assets/img/altany/12.jpg")
        },
        {
          thumb: require("~/assets/img/altany/13s.jpg"),
          url: require("~/assets/img/altany/13.jpg")
        },
        {
          thumb: require("~/assets/img/altany/14s.jpg"),
          url: require("~/assets/img/altany/14.jpg")
        },
        {
          thumb: require("~/assets/img/altany/15s.jpg"),
          url: require("~/assets/img/altany/15.jpg")
        },
        {
          thumb: require("~/assets/img/altany/16s.jpg"),
          url: require("~/assets/img/altany/16.jpg")
        },
        {
          thumb: require("~/assets/img/altany/17s.jpg"),
          url: require("~/assets/img/altany/17.jpg")
        },
        {
          thumb: require("~/assets/img/altany/18s.jpg"),
          url: require("~/assets/img/altany/18.jpg")
        },
        {
          thumb: require("~/assets/img/altany/19s.jpg"),
          url: require("~/assets/img/altany/19.jpg")
        },
        {
          thumb: require("~/assets/img/altany/20s.jpg"),
          url: require("~/assets/img/altany/20.jpg")
        },
        {
          thumb: require("~/assets/img/altany/21s.jpg"),
          url: require("~/assets/img/altany/21.jpg")
        },
        {
          thumb: require("~/assets/img/altany/22s.jpg"),
          url: require("~/assets/img/altany/22.jpg")
        },
        {
          thumb: require("~/assets/img/altany/23s.jpg"),
          url: require("~/assets/img/altany/23.jpg")
        },
        {
          thumb: require("~/assets/img/altany/24s.jpg"),
          url: require("~/assets/img/altany/24.jpg")
        },
        {
          thumb: require("~/assets/img/altany/25s.jpg"),
          url: require("~/assets/img/altany/25.jpg")
        },
        {
          thumb: require("~/assets/img/altany/26s.jpg"),
          url: require("~/assets/img/altany/26.jpg")
        },
        {
          thumb: require("~/assets/img/altany/27s.jpg"),
          url: require("~/assets/img/altany/27.jpg")
        },
        {
          thumb: require("~/assets/img/altany/28s.jpg"),
          url: require("~/assets/img/altany/28.jpg")
        },
        {
          thumb: require("~/assets/img/altany/29s.jpg"),
          url: require("~/assets/img/altany/29.jpg")
        },
        {
          thumb: require("~/assets/img/altany/30s.jpg"),
          url: require("~/assets/img/altany/30.jpg")
        },
        {
          thumb: require("~/assets/img/altany/31s.jpg"),
          url: require("~/assets/img/altany/31.jpg")
        },
        {
          thumb: require("~/assets/img/altany/32s.jpg"),
          url: require("~/assets/img/altany/32.jpg")
        },
        {
          thumb: require("~/assets/img/altany/33s.jpg"),
          url: require("~/assets/img/altany/33.jpg")
        },
        {
          thumb: require("~/assets/img/altany/34s.jpg"),
          url: require("~/assets/img/altany/34.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.lightBoxGallery {
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  max-width: 150rem;
  margin: 0 auto;

  a {
    border: none !important;
    padding: 0 !important;
    margin: 1rem !important;
  }

  .image-container {
    height: auto !important;

    img {
      cursor: pointer;
      width: 16rem !important;
      height: 15rem !important;
      box-shadow: 0 0 6px 2px black;

      &:hover {
        transition: all 0.3s;
        box-shadow: 0 0 6px 2px black !important;
        transform: scale(1.05);
      }
    }
  }
}
</style>