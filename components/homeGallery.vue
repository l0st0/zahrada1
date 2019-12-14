<template>
  <div class="gallery-flex-full">
    <div class="gallery-text">Pozrite si našu galériu:</div>

    <div class="gallery-flex">
      <div class="gallery-flex__box">
        <a href="/galeria/altanky">
          <img
            data-src="@/assets/img/altany/1.jpg"
            alt="Altánky"
            class="lazyload gallery-flex__image--2 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Altánky</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/pristresky">
          <img
            data-src="@/assets/img/pristresky/1.jpg"
            alt="Prístrešky"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Prístrešky</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/garaze">
          <img
            data-src="@/assets/img/garaze/3.jpg"
            alt="Garáže"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Garáže</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/zahrady">
          <img
            data-src="@/assets/img/zahrady/1.jpg"
            alt="Zimné záhrady"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Zimné záhrady</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/chatky">
          <img
            data-src="@/assets/img/chatky/4.jpg"
            alt="Chatky a sklady"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Chatky a sklady</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/ploty">
          <img
            data-src="@/assets/img/ploty/1.jpg"
            alt="Ploty"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Ploty</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/ihriska">
          <img
            data-src="@/assets/img/ihriska/6.jpg"
            alt="Detské ihriská"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Detské ihriská</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/sedenia">
          <img
            data-src="@/assets/img/sedenia/2.jpg"
            alt="Sedenia"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Sedenia</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/lavice">
          <img
            data-src="@/assets/img/lavicky/1.jpg"
            alt="Lavice"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Lavičky</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/hojdacky">
          <img
            data-src="@/assets/img/hojdacky/1.jpg"
            alt="Hojdačky"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Hojdačky</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/studne">
          <img
            data-src="@/assets/img/studne/1.jpg"
            alt="Studne"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Studne</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/kvetinace">
          <img
            data-src="@/assets/img/kvetinace/1.jpg"
            alt="Kvetináče"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Kvetináče</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/doplnky">
          <img
            data-src="@/assets/img/doplnky/1.jpg"
            alt="Záhradné doplnky"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Doplnky</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/sviecky">
          <img
            data-src="@/assets/img/sviecky/1.jpg"
            alt="Sviečky"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Sviečky</span>
      </div>

      <div class="gallery-flex__box">
        <a href="/galeria/kamen">
          <img
            data-src="@/assets/img/kamene/1.jpg"
            alt="Kameň"
            class="lazyload gallery-flex__image--1 gallery-flex__image"
          />
        </a>
        <span class="gallery-flex__box--text">Kameň</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gallery-flex-full {
  padding-top: 2rem;
}

.gallery-text {
  text-align: left;
  font-size: 3rem;
  padding: 2rem;
  font-family: $font-family3;
  //font-weight: 800;
}

.gallery-flex {
  display: flex;
  overflow: auto;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  margin: 0 auto;
  box-shadow: 0px 0px 4px 1px rgb(0, 0, 0);

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: black;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(199, 199, 199);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(150, 150, 150);
  }

  &__image {
    width: 12rem;
    height: 12rem;
    transition: all 0.2s;
    box-shadow: 0px 0px 2px 0.5px rgb(0, 0, 0);
    border-radius: 3px;

    &:hover {
      box-shadow: 0px 0px 4px 2px rgb(0, 0, 0);
    }
  }

  &__box {
    font-size: 1.5rem;
    color: black;
    font-family: $font-family3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem;

    &--text {
      padding-top: 0.6rem;
      text-align: center;
    }
  }
}
</style>