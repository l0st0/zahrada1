<template>
  <div class="container-small">
    <div class="vyroba-head">
      <div class="vyroba-head__flex">
        <h2 class="vyroba-head__header">Výroba na mieru</h2>

        <a class="arrow-vyroba" href="#vyroba">
          <img
            class="arrow-vyroba__svg"
            src="@/assets/img/svg/vyroba/arrow_down.svg"
            alt="arrow down"
          />
        </a>
      </div>

      <div class="vyroba-head__sub">
        <ul class="vyroba-box">
          <li class="vyroba-box-text box-text1">
            V našej firme dávame najvyšší dôraz na vzťah so zákazníkom, na jeho
            vízie a
            požiadavky.
          </li>
          <li class="vyroba-box-text box-text1">
            Vyrobíme Vašu predstavu a premeníme Vašu záhradu pre pokojné rodinné
            posedenia, detskú radosť a dobrý pocit vo svojom prostredí.
          </li>
          <li class="vyroba-box-text box-text1">
            Kontaktujte nás telefonicky
            <strong>0915 354 558</strong> alebo
            emailom
            <strong>jarka.bilinova@gmail.com</strong> a dohodnite si vymeranie výrobku, prípadne nám pošlite
            fotku s rozmermi a my Vám pošleme cenovú ponuku.
          </li>
        </ul>
      </div>
    </div>

    <div class="vyroba" id="vyroba">
      <div class="vyroba-text">
        <h4>Ako funguje výroba na mieru?</h4>
      </div>

      <div class="vyroba-boxes">
        <div class="vyroba-boxes-1">
          <div class="vyroba-boxes__all">
            <img class="vyroba-boxes__svg" src="@/assets/img/svg/vyroba/fotka.svg" alt="fotka" />
            <div class="vyroba-boxes__text">
              Pošlete nám fotku altánku, záhradneho sedenia či iného dreveného doplnku a priestor kde by ste doplnok
              chceli umiestniť.
            </div>
          </div>

          <img
            class="vyroba-boxes__svg-arrow"
            src="@/assets/img/svg/vyroba/arrow_right.svg"
            alt="arrow right"
          />

          <div class="vyroba-boxes__all">
            <img class="vyroba-boxes__svg" src="@/assets/img/svg/vyroba/vymer.svg" alt="vymer" />
            <div class="vyroba-boxes__text">
              My Vám prídeme spraviť výmer. V prípade že už rozmery máte tak Vám pošleme vzorkovník dreva a vy si len
              vyberiete materiál ktorý sa Vám páči.
            </div>
          </div>

          <img
            class="vyroba-boxes__svg-arrow"
            src="@/assets/img/svg/vyroba/arrow_right.svg"
            alt="arrow right"
          />

          <div class="vyroba-boxes__all">
            <img class="vyroba-boxes__svg" src="@/assets/img/svg/home/euro.svg" alt="euro" />
            <div
              class="vyroba-boxes__text"
            >Následne náš tým pre Vás pripraví cenovú ponuku na mieru.</div>
          </div>
        </div>

        <div class="vyroba-boxes-2">
          <div class="vyroba-boxes__all">
            <img class="vyroba-boxes__svg" src="@/assets/img/svg/vyroba/gear.svg" alt="gear" />
            <div
              class="vyroba-boxes__text"
            >Po odsuhlasení cenovej ponuky posunieme Vašu objednávku do výroby.</div>
          </div>

          <img
            class="vyroba-boxes__svg-arrow"
            src="@/assets/img/svg/vyroba/arrow_right.svg"
            alt="arrow right"
          />

          <div class="vyroba-boxes__all">
            <img class="vyroba-boxes__svg" src="@/assets/img/svg/vyroba/home.svg" alt="home" />
            <div
              class="vyroba-boxes__text"
            >Doručenie a realizácia Vami vybraného dreveného doplnku, priamo na Vašej záhrade.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Výroba na mieru | Záhradné centrum",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Premeníme Vašu záhradu podľa Vaších predstáv."
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
.vyroba-box {
  padding: 3rem 4rem 0rem 5rem;
  max-width: 100rem;
  margin: auto;

  &-text {
    padding: 1.5rem 0rem;
    font-size: 2rem;
    text-align: left;
    line-height: 1.3;
    color: white;
  }
}

.vyroba-head {
  &__flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 100rem;
    margin: 0 auto;
    color: white;
  }

  &__header {
    margin-top: 5rem;
    text-align: center;
    font-size: 4.5rem;
    padding-left: 5rem;

    @media only screen and (max-width: $bg-sm) {
      font-size: 4rem;
    }

    @media only screen and (max-width: $bg-sx) {
      font-size: 3.5rem;
    }
  }
}

.arrow-vyroba {
  padding: 2rem;
  margin-top: 5rem;

  &__svg {
    width: 3.2rem;
    cursor: pointer;
    transform: translateY(0.3rem);

    @media only screen and (max-width: $bg-sm) {
      width: 3rem;
    }
  }
}

.vyroba-text {
  font-size: 3rem;
  text-align: center;

  padding: 0 2rem;
  padding-top: 7rem;
  padding-bottom: 2rem;
  color: white;
}

.vyroba-boxes {
  overflow-x: hidden;

  &__all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
    margin: 2rem;
    width: 23rem;
    height: 23rem;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 4px 1px rgb(0, 0, 0);

    @media only screen and (max-width: $bg-lg) {
      width: 20rem;
      height: 20rem;
      margin: 1rem;
    }
  }

  &__all:nth-child(5) {
    padding-bottom: 5rem;
  }

  &-1,
  &-2 {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: $bg-sm) {
      padding-bottom: 0;
      padding-top: 0;
      flex-direction: column;
    }
  }

  &__svg {
    height: 8rem;
    padding: 1rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: $bg-lg) {
      height: 7rem;
    }

    &-arrow {
      width: 3.7rem;

      @media only screen and (max-width: $bg-lg) {
        width: 2.7rem;
      }

      @media only screen and (max-width: $bg-sm) {
        display: none;
      }
    }
  }

  &__text {
    text-align: center;
    font-size: 1.5rem;

    @media only screen and (max-width: $bg-lg) {
      font-size: 1.4rem;
    }
  }
}
</style>