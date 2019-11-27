<template>
  <nav class="nav" id="nav">
    <div class="nav-desktop">
      <nuxt-link to="/" class="logo">
        <img class="logo__svg" src="@/assets/img/logo.svg" />
        <span class="domov">Záhradné centrum</span>
      </nuxt-link>
      <div class="nav-desktop__items">
        <div>
          <nuxt-link to="/galeria/altanky" class="nav-desktop__a">Galéria</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/ponuka" class="nav-desktop__a">Aktuálna ponuka</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/vyroba" class="nav-desktop__a">Výroba na mieru</nuxt-link>
        </div>
        <div class="nav-box">
          <nuxt-link to="/kontakt" class="nav-desktop__a">Kontakt</nuxt-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu-->
    <div class="nav__mobile">
      <nuxt-link to="/" class="logo">
        <img class="logo__svg" src="@/assets/img/logo.svg" />
        <span class="domov">Záhradné centrum</span>
      </nuxt-link>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <img class="navbar" src="@/assets/img/navbar.svg" />
      </a>
    </div>
    <!-- Navigation links-->
    <div id="myLinks">
      <nuxt-link class="a-mobile" to="/ponuka">Aktuálna ponuka</nuxt-link>
      <nuxt-link class="a-mobile" to="/galeria/altanky">Galéria</nuxt-link>
      <nuxt-link class="a-mobile" to="/vyroba">Výroba na mieru</nuxt-link>
      <nuxt-link class="a-mobile" to="/kontakt">Kontakt</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  head: {
    script: [{ src: "/nav.js", body: true }]
  }
};
</script>

<style lang="scss" scoped>
a.logo.linkExactActiveClass.linkActiveClass {
  color: green;
  box-shadow: none;
  background: none;
}

a.nav-desktop__a.linkExactActiveClass.linkActiveClass {
  color: green;
  box-shadow: none;
  background: none;
}

a.a-mobile.linkExactActiveClass.linkActiveClass {
  color: green;
  box-shadow: none;
  background: none;
}

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.2;
}

.nav-desktop {
  padding: 1rem;
  font-family: $font-family3;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 5px 2px rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__items {
    display: flex;
    align-items: center;
  }

  &__a {
    color: black;
    padding: 0 2rem;
    font-weight: 500;
    font-size: 1.7rem;

    &:hover {
      color: green;
    }
  }

  @media only screen and (max-width: $bg-md) {
    display: none;
  }
}

// MOBILE
.nav__mobile {
  overflow: hidden;
  font-family: $font-family3;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 8px 3px rgb(0, 0, 0);

  @media only screen and (min-width: $bg-md) {
    display: none;
  }
}

#myLinks {
  display: block;
  font-family: $font-family3;
  font-weight: 500;
  box-shadow: 0 2px 2px 0 black;
  opacity: 0;
}

.hidden {
  opacity: 0;
  margin-top: -330px;
  z-index: -5;
  transition-timing-function: linear, step-end, step-end;
}

.a-mobile {
  position: relative;
  padding: 1rem;
  padding-left: 5rem;
  color: black;
  background-color: rgb(255, 255, 255);
  font-size: 1.8rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  z-index: 10;

  &:hover {
    color: green;
  }
}

.nav__mobile {
  padding: 1rem;

  &.icon {
    padding: 0 2rem;
  }
}

.navbar {
  margin-right: 1rem;
  width: 2rem;
}

.logo {
  display: flex;
  align-items: center;

  &__svg {
    width: 2.5rem;
    transform: translateY(-0.3rem);
  }
}

.domov {
  margin-left: 1.5rem;
  font-size: 1.7rem;
  font-weight: 500;
}
</style>