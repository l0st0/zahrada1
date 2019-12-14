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
        href="https://www.facebook.com/Z%C3%A1hradn%C3%A9-centrum-Huncovce-1691033311132796/"
        target="_blank"
      >
        <svg class="kontakt-main__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
          />
        </svg>
      </a>
    </div>
    <div class="footer-copyright">&copy; Záhradné centrum 2019</div>
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
  font-family: $font-family3;
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
  //width: 100%;
}
</style>