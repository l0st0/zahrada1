<template>
  <div class="div">
    <div class="side-nav">
      <nuxt-link to="/galeria/altanky" class="side-nav__item side-nav__item-0">Altánky</nuxt-link>
      <nuxt-link to="/galeria/ihriska" class="side-nav__item side-nav__item-6">Detské ihriská</nuxt-link>
      <nuxt-link to="/galeria/doplnky" class="side-nav__item side-nav__item-12">Doplnky</nuxt-link>
      <nuxt-link to="/galeria/garaze" class="side-nav__item side-nav__item-2">Garáže</nuxt-link>
      <nuxt-link to="/galeria/hojdacky" class="side-nav__item side-nav__item-9">Hojdačky</nuxt-link>
      <nuxt-link to="/galeria/chatky" class="side-nav__item side-nav__item-4">Chatky a sklady</nuxt-link>
      <nuxt-link to="/galeria/kamen" class="side-nav__item side-nav__item-14">Kameň</nuxt-link>
      <nuxt-link to="/galeria/kvetinace" class="side-nav__item side-nav__item-11">Kvetináče</nuxt-link>
      <nuxt-link to="/galeria/lavicky" class="side-nav__item side-nav__item-8">Lavičky</nuxt-link>
      <nuxt-link to="/galeria/ploty" class="side-nav__item side-nav__item-5">Ploty</nuxt-link>
      <nuxt-link to="/galeria/" class="side-nav__item side-nav__item-1">Prístrešky</nuxt-link>
      <nuxt-link to="/galeria/sedenia" class="side-nav__item side-nav__item-7">Sedenia</nuxt-link>
      <nuxt-link to="/galeria/studne" class="side-nav__item side-nav__item-10">Studne</nuxt-link>
      <nuxt-link to="/galeria/sviecky" class="side-nav__item side-nav__item-13">Sviečky</nuxt-link>
      <nuxt-link to="/galeria/zahrady" class="side-nav__item side-nav__item-3">Zimné záhrady</nuxt-link>
    </div>

    <div class="side-nav__mobile">
      <a class="icon1" v-on:click="sideNav">
        <i class="fa fa-bars"></i>
      </a>
      <div class="side-nav__mobile-text">Galéria</div>
    </div>

    <div class="side-nav__mobile-items">
      <nuxt-link to="/galeria/altanky" class="side-nav__item side-nav__item-0">Altánky</nuxt-link>
      <nuxt-link to="/galeria/ihriska" class="side-nav__item side-nav__item-6">Detské ihriská</nuxt-link>
      <nuxt-link to="/galeria/doplnky" class="side-nav__item side-nav__item-12">Doplnky</nuxt-link>
      <nuxt-link to="/galeria/garaze" class="side-nav__item side-nav__item-2">Garáže</nuxt-link>
      <nuxt-link to="/galeria/hojdacky" class="side-nav__item side-nav__item-9">Hojdačky</nuxt-link>
      <nuxt-link to="/galeria/chatky" class="side-nav__item side-nav__item-4">Chatky a sklady</nuxt-link>
      <nuxt-link to="/galeria/kamen" class="side-nav__item side-nav__item-14">Kameň</nuxt-link>
      <nuxt-link to="/galeria/kvetinace" class="side-nav__item side-nav__item-11">Kvetináče</nuxt-link>
      <nuxt-link to="/galeria/lavicky" class="side-nav__item side-nav__item-8">Lavičky</nuxt-link>
      <nuxt-link to="/galeria/ploty" class="side-nav__item side-nav__item-5">Ploty</nuxt-link>
      <nuxt-link to="/galeria/" class="side-nav__item side-nav__item-1">Prístrešky</nuxt-link>
      <nuxt-link to="/galeria/sedenia" class="side-nav__item side-nav__item-7">Sedenia</nuxt-link>
      <nuxt-link to="/galeria/studne" class="side-nav__item side-nav__item-10">Studne</nuxt-link>
      <nuxt-link to="/galeria/sviecky" class="side-nav__item side-nav__item-13">Sviečky</nuxt-link>
      <nuxt-link to="/galeria/zahrady" class="side-nav__item side-nav__item-3">Zimné záhrady</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sideNav() {
      const sideNavItems = document.querySelector(".side-nav__mobile-items");

      if (sideNavItems.style.display === "flex") {
        sideNavItems.style.display = "none";
      } else {
        sideNavItems.style.display = "flex";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.side-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 160rem;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 1rem 0rem 1rem;
  margin-bottom: 2.5rem;

  @media only screen and (max-width: $bg-sm) {
    display: none;
  }

  &__item {
    padding: 1.2rem;
    margin: 0.6rem;
    font-size: 1.5rem;
    font-family: $font-family2;
    font-weight: 800;
    letter-spacing: 1.3px;
    color: white;
    box-shadow: 0px 0px 2px 1px black;
    min-width: 18rem;
    transition: 0.5s ease;

    background: linear-gradient(
        to bottom,
        rgba(rgb(0, 0, 0), 0.95),
        rgba(rgb(0, 0, 0), 0.7)
      ),
      url(~assets/img/bg_sm.jpg);

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    /* @media only screen and (max-width: $bg-sm) {
      padding: 1.5rem;
      margin: 0.5rem;
      min-width: 21rem;
    } */

    &:hover {
      box-shadow: 0px 0px 4px 3px black;

      background: linear-gradient(
          to bottom,
          rgba(rgb(0, 0, 0), 0),
          rgba(rgb(0, 0, 0), 0)
        ),
        url(~assets/img/bg_sm.jpg);

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
}

.linkExactActiveClass {
  box-shadow: 0px 0px 4px 3px black;
  background: linear-gradient(
      to bottom,
      rgba(rgb(0, 0, 0), 0),
      rgba(rgb(0, 0, 0), 0)
    ),
    url(~assets/img/bg_sm.jpg);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.gallery-input {
  max-width: 150rem;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.gallery-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;

  &__item {
    padding: 0.7rem;
  }

  &__text {
    font-size: 1.5rem;
    text-align: center;
    font-family: $font-family3;
    font-weight: 400;
    padding-bottom: 0.6rem;
    padding-top: 1rem;
    z-index: 2;
  }

  &__img {
    width: 17rem;
    height: 17rem;
    cursor: pointer;
    box-shadow: 0 0 10px 5px rgb(0, 0, 0);
    transition: all 0.2s;
    border: 2px solid white;

    &:hover {
      transform: scale(1.05);
    }

    @media only screen and (max-width: $bg-sx) {
      width: 13rem;
      height: 13rem;
    }
  }
}

//Mobile

.side-nav__mobile {
  padding-top: 6rem;

  display: flex;
  align-items: center;

  @media only screen and (min-width: $bg-sm) {
    display: none;
  }

  &-text {
    font-size: 2rem;
    font-family: $font-family2;
    font-weight: 600;
  }

  &-items {
    display: none;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 160rem;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
  }
}

.icon1 {
  padding: 1rem;
  padding-left: 1.8rem;
  font-size: 3rem;
  color: black;

  &:hover {
    color: white;
  }
}
</style>