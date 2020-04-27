<template>
  <div class="container">
    <header class="header">
      <div class="header-top">
        <div class="header-text">
          <div class="header-text__1">Záhradné centrum</div>
          <div class="header-text__2">Huncovce</div>
        </div>

        <!-- <div class="objednavky">
          <img class="objednavky__svg" src="@/assets/img/svg/home/zima2.svg" alt="snow" />
          <div class="objednavky__text">Objednávky príjmame aj v zime!</div>
        </div>-->
      </div>
      <div class="header-mid">
        <div class="header-svg">
          <div class="svg-box">
            <img class="svg-box__svg" src="@/assets/img/svg/home/ok.svg" alt="OK" />
            <div class="svg-box__text">Top materiály slovenskej výroby</div>
          </div>

          <div class="svg-box">
            <img class="svg-box__svg" src="@/assets/img/svg/home/camera.svg" alt="kamera" />
            <div class="svg-box__text">
              <span>Fotografiu Vašej vysnenej záhrady</span>
              <span>premeníme na realitu</span>
            </div>
          </div>

          <div class="svg-box">
            <img class="svg-box__svg" src="@/assets/img/svg/home/car.svg" alt="auto car" />
            <div class="svg-box__text">Rýchle dodanie priamo k Vám domov</div>
          </div>

          <div class="svg-box">
            <img class="svg-box__svg" src="@/assets/img/svg/home/euro.svg" alt="euro" />
            <div class="svg-box__text">Najnižšie ceny výroby na mieru</div>
          </div>
        </div>

        <div class="header-right">
          <div class="header-right__formular">
            <form name="contact" method="post" action="/success">
              <input type="hidden" name="form-name" value="contact" />
              <label for="name">
                Vaše meno
                <input type="text" id="name" name="Meno" placeholder="Meno" required />
              </label>

              <label for="email">
                Váš email na ktorý Vám odpíšeme
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Email"
                  required
                />
              </label>

              <label for="subject">
                Napíšte nám správu
                <textarea
                  id="subject"
                  name="Správa"
                  placeholder="Správa"
                  style="height:150px"
                  required
                ></textarea>
              </label>
              <input type="submit" value="Odoslať" />
            </form>
          </div>

          <!-- <div class="prianie">
            <img
              class="prianie__svg lazyload"
              data-src="@/assets/img/svg/christmas.svg"
              alt="christmas"
            />
            <div class="prianie__text">Želáme Vám krásne vianočné sviatky plné šťastia a pohody</div>
          </div>-->
        </div>
      </div>
    </header>

    <main class="main">
      <Gallery />
      <div class="about">
        <div class="about-text">O nás</div>

        <div>
          <ul class="box">
            <li class="box-text box-text1">
              Záhradné centrum máme otvorené od júna 2014, ale
              skúsenosti s výrobou drevených doplnkov a drevených stavieb už 15 rokov.
            </li>
            <li class="box-text box-text2">
              Našou prioritou sú kvalitné výrobky a spokojní zákazníci, preto
              spolupracujeme
              výhradne so slovenskými dodávateľmi dreva a farieb.
            </li>
            <li class="box-text box-text3">
              Okrem drevených doplnkov u nás nájdete aj betónové sochy, sviečky, prírodný
              kameň a
              keramiku zo Sardínie.
            </li>
            <li class="box-text box-text4">
              Vyrábame aj výrobky na mieru, respektíve podľa Vášho návrhu, ktoré vlastnia
              zákazníci
              aj za hranicami SR.
            </li>
          </ul>
        </div>
      </div>

      <div class="certifikat">
        <div class="certifikat__text">Certifikáty</div>
        <v-gallery :images="list">
          <a
            class="lightBoxGallery__a"
            v-for="img in list"
            :data-image="img.url"
            v-bind:key="img.id"
          >
            <div class="image-container">
              <img class="lazyload" :data-src="img.thumb" :alt="img.alt" />
            </div>
          </a>
        </v-gallery>
      </div>
    </main>
  </div>
</template>

<script>
import Gallery from "@/components/homeGallery";
export default {
  components: {
    Gallery
  },
  data() {
    return {
      list: [
        {
          thumb: require("~/assets/img/certifikat/1.jpg"),
          url: require("~/assets/img/certifikat/1.jpg"),
          alt: "certifikat podtatranske vystavne trhy"
        },
        {
          thumb: require("~/assets/img/certifikat/2.jpg"),
          url: require("~/assets/img/certifikat/2.jpg"),
          alt: "certifikat osmo"
        },
        {
          thumb: require("~/assets/img/certifikat/3.jpg"),
          url: require("~/assets/img/certifikat/3.jpg"),
          alt: "certifikat tatra expo"
        },
        {
          thumb: require("~/assets/img/certifikat/4.jpg"),
          url: require("~/assets/img/certifikat/4.jpg"),
          alt: "certifikat tatra expo"
        },
        {
          thumb: require("~/assets/img/certifikat/5.jpg"),
          url: require("~/assets/img/certifikat/5.jpg"),
          alt: "certifikat spisske vystavne trhy"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
label {
  color: white;
  font-size: 0rem;
}
// HEADER
.header {
  min-height: calc(100vh - 5.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;

  background: linear-gradient(
      to bottom,
      rgba(rgb(0, 0, 0), 0.8),
      rgba(rgb(0, 0, 0), 0.8)
    ),
    url(~assets/img/bg1.jpg);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  padding-top: 2rem;
  color: white;
  z-index: 2;

  @media only screen and (max-width: $bg-sm) {
    flex-direction: column;
  }

  &__1 {
    font-size: 6rem;
    padding-right: 1.5rem;

    @media only screen and (max-width: $bg-lg) {
      font-size: 5rem;
    }

    @media only screen and (max-width: $bg-md) {
      font-size: 4rem;
    }

    @media only screen and (max-width: $bg-sm) {
      font-size: 3.5rem;
      padding-right: 0rem;
    }
  }

  &__2 {
    font-size: 8.5rem;

    @media only screen and (max-width: $bg-lg) {
      font-size: 7rem;
    }

    @media only screen and (max-width: $bg-md) {
      font-size: 5.5rem;
    }

    @media only screen and (max-width: $bg-sm) {
      font-size: 5rem;
    }

    @media only screen and (max-width: $bg-sx) {
      font-size: 4.5rem;
    }
  }
}

.objednavky {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0 1rem 0;
  animation: pulse infinite ease-in-out 1.5s;
  z-index: 2;

  &__text {
    color: white;
    text-align: center;
    padding-top: 1.5rem;
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  &__svg {
    height: 4rem;

    @media only screen and (max-width: $bg-sm) {
      height: 3.5rem;
    }
  }
}

.header-mid {
  display: flex;
  margin: 0 auto;
  padding: 1.5rem;
  margin: 3rem auto;
  z-index: 2;

  @media only screen and (max-width: $bg-md) {
    margin-top: 0;
  }
}

.header-svg {
  display: grid;
  grid-template-columns: max-content;

  @media only screen and (max-width: $bg-md) {
    //grid-template-columns: max-content;
    display: none;
  }
}

.svg-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding: 2rem;
  animation: 1s moveInRight 0s ease-in;

  &__text {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    letter-spacing: 1px;
  }

  &__svg {
    height: 4rem;
  }
}

.header-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 5rem;

  @media only screen and (max-width: $bg-md) {
    padding-left: 0rem;
  }

  &__formular {
    //order: 1;
    padding: 1rem;
    margin: 0 auto;
    animation: 1s moveInLeft 0s ease-in;
  }

  &__bottom {
    display: flex;
    align-items: center;
  }

  &__text {
    color: white;
    font-size: 1.8rem;

    padding-left: 2rem;
  }
}

/* Style inputs */
input[type="text"],
input[type="email"],
select,
textarea {
  //margin-bottom: 0.4rem;
  width: 100%;
  padding: 1rem;
  border: 2px solid rgb(163, 163, 163);
  resize: vertical;
  border-radius: 5px;
  font-size: 1.3rem;
  font-family: "Montserrat";
  font-weight: 600;
}

input[type="submit"] {
  background-color: $main-color;
  color: black;
  padding: 0.8rem 1.6rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: "Montserrat";
  transition: 0.1s;
  display: block;
  margin-top: 0.8rem;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
  }
}

.prianie {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s moveInTop 0s ease-in;

  @media only screen and (max-width: $bg-md) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: $bg-sxx) {
    display: none;
  }

  &__svg {
    width: 25rem;
    //padding: 1rem;
  }

  &__text {
    max-width: 24rem;
    text-align: center;
    color: white;
    font-size: 2rem;
    //padding: 1rem;
  }
}

// MAIN
.main {
  background: linear-gradient(
      to bottom,
      rgba(rgb(0, 0, 0), 0.3),
      rgba(rgb(0, 0, 0), 0.3)
    ),
    url(~assets/img/bgmain.jpg);

  background-repeat: repeat;
  color: white;
}

.about {
  padding-top: 5rem;
}

.about-text {
  text-align: center;
  font-size: 5.5rem;
}

.box {
  padding: 3rem 4rem 3rem 5rem;
  max-width: 100rem;
  margin: auto;

  &-text {
    padding: 1.5rem 0rem;
    font-size: 2.1rem;
    text-align: left;
    line-height: 1.3;
  }
}

.certifikat {
  &__text {
    text-align: center;
    font-size: 4rem;
    padding: 3rem;
    border-top: 2px dashed rgb(255, 255, 255);
  }
}

.lightBoxGallery .image-container img {
  width: 13rem !important;
  height: 16rem !important;
}
</style>
