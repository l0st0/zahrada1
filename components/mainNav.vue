<template>
  <div class="main-nav">
    <input type="checkbox" id="nav-check" />
    <nuxt-link linkExactActiveClass:active to="/" class="nav-title">
      <img class="nav-title__svg" src="@/assets/img/logo.svg" alt />
      <span>Záhradné centrum</span>
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

    <div class="nav-links">
      <nuxt-link to="/galeria">Galéria</nuxt-link>
      <nuxt-link to="/ponuka">Aktuálna ponuka</nuxt-link>
      <nuxt-link to="/vyroba">Výroba na mieru</nuxt-link>
      <nuxt-link to="/kontakt">Kontakt</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      document.querySelector(".hamburger").classList.toggle("is-active");
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
  font-family: $font-family3;
  font-weight: 500;
  box-shadow: 0 0 5px 2px black;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-title {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: black;
  padding: 1rem;

  &__svg {
    width: 2rem;
    margin-right: 1rem;
    transform: translateY(-3px);
  }
}

.nav-btn {
  display: none;
}

.nav-links {
  display: flex;
  font-size: 1.7rem;
}

.nav-links > a {
  padding: 1rem 2rem;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: green;
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
    transition: all 0.35s ease-out;
    overflow-y: hidden;
    top: 4rem;
    left: 0rem;
    padding-left: 2rem;

    :nth-child(1) {
      padding-top: 2rem;
    }
  }
  .nav-links > a {
    display: block;
    width: 100%;
  }
  #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  #nav-check:checked ~ .nav-links {
    box-shadow: 0 3px 3px black;
    height: 18rem;
    overflow-y: hidden;
  }
}
</style>