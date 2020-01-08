<template>
  <div class="kontakt">
    <div class="kontakt-main">
      <h3 class="kontakt-main__heading">Adresa:</h3>
      <p class="kontakt-main__paragraph">Tatranská ulica 559/56a</p>
      <p class="kontakt-main__paragraph">Huncovce 059 92</p>
      <p class="kontakt-main__paragraph">Slovensko</p>
    </div>

    <div class="kontakt-main">
      <h3 class="kontakt-main__heading">Kontakt:</h3>
      <p class="kontakt-main__paragraph">Jaroslava Bilinova</p>
      <p class="kontakt-main__paragraph">0915 354 558</p>
      <p class="kontakt-main__paragraph">jarka.bilinova@gmail.com</p>
    </div>

    <div class="kontakt-main">
      <h3 class="kontakt-main__heading">Otváracie hodiny:</h3>
      <p class="kontakt-main__paragraph">Pon-Pia 09:00-17:00</p>
      <p class="kontakt-main__paragraph">Sobota 09:00-12:00</p>
      <p class="kontakt-main__paragraph">Nedeľa zatvorené</p>
    </div>

    <div class="kontakt-main">
      <h3 class="kontakt-main__heading">Sledujte nás:</h3>

      <a
        class="kontakt-main__facebook"
        href="https://www.facebook.com/Z%C3%A1hradn%C3%A9-centrum-Huncovce-1691033311132796/"
        target="_blank"
        rel="noopener"
      >
        <img
          class="kontakt-main__svg lazyload"
          data-src="@/assets/img/svg/facebook.svg"
          alt="facebook"
        />
      </a>
    </div>
    <div class="footer-copyright">
      <span class="footer-copyright__text">2020 &copy; Záhradné centrum</span>
      <div class="me">
        <div class="email">lostwebsk@gmail.com -</div>
        <img
          class="footer-copyright__svg lazyload"
          data-src="@/assets/img/svg/mylogo.svg"
          alt="lostweb logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.kontakt {
  padding: 1.5rem;
  opacity: 0.9;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 120rem;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 5rem;

  @media only screen and (max-width: $bg-lg) {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: max-content max-content;
    max-width: 60rem;
  }

  @media only screen and (max-width: $bg-sm) {
    display: flex;
    flex-direction: column;
  }
}

.kontakt-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;

  @media only screen and (max-width: $bg-sx) {
    padding: 2rem 3rem;
  }

  &__svg {
    height: 6.4rem;
    fill: blue;
    border-radius: 10px;
  }

  &__heading {
    font-size: 2rem;
    padding-bottom: 1rem;

    @media only screen and (max-width: $bg-sx) {
      padding-bottom: 0.8rem;
    }
  }

  &__paragraph {
    font-size: 1.6rem;
    padding-bottom: 0.3rem;
  }
}

.footer-copyright {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 0.8rem;

  font-size: 1.5rem;
  color: white;
  background-color: rgb(0, 0, 0);

  &__svg {
    cursor: pointer;
    width: 7.5rem;
    padding-left: 1rem;
  }
}

.me {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0.8rem;
  right: 1rem;
}

.email {
  font-size: 1.3rem;
}
</style>