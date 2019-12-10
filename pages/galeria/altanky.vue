<template>
  <div>
    <Header header="Altánky" />
    <div id="app">
      <div class="gallery">
        <div v-for="(src, idx) in imgs" :key="idx" @click="() => show(idx)">
          <img class="pic__a" :src="src" />
        </div>
      </div>

      <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="imgs"
        :moveDisabled="true"
        @hide="handleHide"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      imgs: [
        require("@/assets/img/altany/1.jpg"),
        require("@/assets/img/altany/2.jpg"),
        require("@/assets/img/altany/3.jpg"),
        require("@/assets/img/altany/4.jpg"),
        require("@/assets/img/altany/5.jpg")
      ],
      visible: false,
      index: 0 // default
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.pic__a {
  width: 17rem;
  height: 15rem;
  cursor: pointer;
  margin: 1rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.8);
}

.pic__a:hover {
  transform: scale(1.05);
}
img {
  width: 100%;
  transition: 0.3s ease;
}
</style>
