<template>
  <div class="main-nav">
    <input type="checkbox" id="nav-check" />
    <nuxt-link linkExactActiveClass:active to="/" class="nav-title">
      <img v-on:click="fix" class="nav-title__svg" src="@/assets/img/logo1.png" alt />
      <span v-on:click="fix">Záhradné centrum</span>
    </nuxt-link>
    <div class="nav-btn">
      <label for="nav-check">
        <div v-on:click="toggle" class="hamburger hamburger--slider" type="button">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </label>
    </div>

    <div v-on:click="close" class="nav-links">
      <nuxt-link class="nav-links__item" to="/ponuka">Aktuálna ponuka</nuxt-link>
      <nuxt-link class="nav-links__item" to="/galeria/altanky">Galéria</nuxt-link>
      <nuxt-link class="nav-links__item" to="/vyroba">Výroba na mieru</nuxt-link>
      <nuxt-link class="nav-links__item" to="/kontakt/">Kontakt</nuxt-link>
      <img class="nav-links__svg" src="@/assets/img/svg/christmas.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      document.querySelector(".hamburger").classList.toggle("is-active");
    },
    close() {
      if (document.querySelector("#nav-check").checked === true) {
        document.querySelector(".hamburger").classList.toggle("is-active");
        document.querySelector("#nav-check").checked = false;
      }
    },
    fix() {
      if (document.querySelector("#nav-check").checked === true) {
        document.querySelector(".hamburger").classList.toggle("is-active");
        document.querySelector("#nav-check").checked = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/hamburger/hamburgers.scss";

a.linkExactActiveClass.linkActiveClass {
  color: green;
  box-shadow: none;
  background: none;
}

.main-nav {
  width: 100%;
  background-color: #ffffff;
  position: relative;
  box-shadow: 0 0 5px 2px black;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-title {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: black;
  padding: 1rem;
  padding-left: 3rem;

  @media only screen and (max-width: $bg-sx) {
    font-size: 2rem;
  }

  &:hover {
    color: green;
  }

  &__svg {
    width: 35px;
    margin-right: 1.5rem;
    transform: translateY(-0.2rem);
  }
}

.nav-btn {
  display: none;
}

.nav-links {
  display: flex;
  font-size: 1.7rem;

  &__item {
    padding: 1rem 3rem;
    text-decoration: none;
    color: black;

    @media only screen and (max-width: $bg-lg) {
      padding: 1rem 2rem;
    }

    &:hover {
      color: green;
    }
  }
  &__svg {
    display: none;
  }
}

#nav-check {
  display: none;
}

@media (max-width: $bg-md) {
  .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: rgb(255, 255, 255);
    height: 0px;
    overflow-y: hidden;
    top: 6rem;
    left: 0rem;
    padding-left: 5rem;
    transition: all 0.2s ease;
    font-size: 1.9rem;

    @media only screen and (max-width: $bg-sx) {
      top: 6.5rem;
    }

    :nth-child(1) {
      padding-top: 2rem;
    }

    &__item {
      display: block;
      width: 100%;
    }

    &__svg {
      display: block;
      position: absolute;
      width: 8rem;
      top: 11rem;
      right: 4rem;

      @media only screen and (max-width: $bg-sm) {
        width: 6rem;
        right: 2rem;
        top: 12.5rem;
      }
    }
  }

  #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  #nav-check:checked ~ .nav-links {
    border-top: 1px solid black;
    box-shadow: 0 3px 3px black;
    height: 20rem;
    overflow-y: hidden;
  }
}
</style>
