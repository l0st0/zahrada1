<template>
  <div class="div">
    <div class="side-nav">
      <nuxt-link to="/galeria/altanky" class="side-nav__item">Altánky</nuxt-link>
      <nuxt-link to="/galeria/ihriska" class="side-nav__item">Detské ihriská</nuxt-link>
      <nuxt-link to="/galeria/doplnky" class="side-nav__item">Doplnky</nuxt-link>
      <nuxt-link to="/galeria/garaze" class="side-nav__item">Garáže</nuxt-link>
      <nuxt-link to="/galeria/hojdacky" class="side-nav__item">Hojdačky</nuxt-link>
      <nuxt-link to="/galeria/chatky" class="side-nav__item">Chatky a sklady</nuxt-link>
      <nuxt-link to="/galeria/kamen" class="side-nav__item">Kameň</nuxt-link>
      <nuxt-link to="/galeria/kvetinace" class="side-nav__item">Kvetináče</nuxt-link>
      <nuxt-link to="/galeria/lavicky" class="side-nav__item">Lavičky</nuxt-link>
      <nuxt-link to="/galeria/ploty" class="side-nav__item">Ploty</nuxt-link>
      <nuxt-link to="/galeria/pristresky" class="side-nav__item">Prístrešky</nuxt-link>
      <nuxt-link to="/galeria/sedenia" class="side-nav__item">Sedenia</nuxt-link>
      <nuxt-link to="/galeria/studne" class="side-nav__item">Studne</nuxt-link>
      <nuxt-link to="/galeria/sviecky" class="side-nav__item">Sviečky</nuxt-link>
      <nuxt-link to="/galeria/zahrady" class="side-nav__item">Zimné záhrady</nuxt-link>
    </div>

    <div class="side-nav__mobile">
      <a class="icon1" v-on:click="sideNav">
        <div v-on:click="toggle" class="hamburger hamburger--slider hamburger2" type="button">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </a>
      <div class="side-nav__mobile-text">Galéria</div>
    </div>

    <div v-on:click="close" class="side-nav__mobile-items">
      <nuxt-link to="/galeria/altanky" class="side-nav__item">Altánky</nuxt-link>
      <nuxt-link to="/galeria/ihriska" class="side-nav__item">Detské ihriská</nuxt-link>
      <nuxt-link to="/galeria/doplnky" class="side-nav__item">Doplnky</nuxt-link>
      <nuxt-link to="/galeria/garaze" class="side-nav__item">Garáže</nuxt-link>
      <nuxt-link to="/galeria/hojdacky" class="side-nav__item">Hojdačky</nuxt-link>
      <nuxt-link to="/galeria/chatky" class="side-nav__item">Chatky a sklady</nuxt-link>
      <nuxt-link to="/galeria/kamen" class="side-nav__item">Kameň</nuxt-link>
      <nuxt-link to="/galeria/kvetinace" class="side-nav__item">Kvetináče</nuxt-link>
      <nuxt-link to="/galeria/lavicky" class="side-nav__item">Lavičky</nuxt-link>
      <nuxt-link to="/galeria/ploty" class="side-nav__item">Ploty</nuxt-link>
      <nuxt-link to="/galeria/pristresky" class="side-nav__item">Prístrešky</nuxt-link>
      <nuxt-link to="/galeria/sedenia" class="side-nav__item">Sedenia</nuxt-link>
      <nuxt-link to="/galeria/studne" class="side-nav__item">Studne</nuxt-link>
      <nuxt-link to="/galeria/sviecky" class="side-nav__item">Sviečky</nuxt-link>
      <nuxt-link to="/galeria/zahrady" class="side-nav__item">Zimné záhrady</nuxt-link>
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
    },
    toggle() {
      document.querySelector(".hamburger2").classList.toggle("is-active");
    },
    close() {
      document.querySelector(".hamburger2").classList.toggle("is-active");
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
@import "./assets/scss/hamburger/hamburgers.scss";

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
    font-size: 1.6rem;
    font-family: $font-family3;
    font-weight: 800;
    letter-spacing: 0.4px;
    color: white;
    box-shadow: 0px 0px 1px 1px rgb(0, 0, 0);
    min-width: 18rem;

    background: linear-gradient(
        to bottom,
        rgba(rgb(0, 0, 0), 0.8),
        rgba(rgb(0, 0, 0), 0.8)
      ),
      url(~assets/img/bgn6.jpg);

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &:hover {
      box-shadow: 0px 0px 5px 2px black;
      color: black;
      background: linear-gradient(
          to bottom,
          rgba(rgb(255, 255, 255), 0.2),
          rgba(rgb(255, 255, 255), 0.2)
        ),
        url(~assets/img/bgn6.jpg);

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
}

.linkExactActiveClass {
  box-shadow: 0px 0px 5px 2px black;
  color: black;
  background: linear-gradient(
      to bottom,
      rgba(rgb(255, 255, 255), 0.2),
      rgba(rgb(255, 255, 255), 0.2)
    ),
    url(~assets/img/bgn6.jpg);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

//Mobile

.side-nav__mobile {
  //padding-top: 6rem;
  display: flex;
  align-items: center;

  @media only screen and (min-width: $bg-sm) {
    display: none;
  }

  &-text {
    font-size: 2rem;
    font-family: $font-family2;
    font-weight: 600;
    padding-top: 0.9rem;
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
  padding: 1rem 0 0 1.2rem;
  font-size: 3rem;
  color: black;

  &:hover {
    color: white;
  }
}
</style>