<template>
  <div class="container">
    <header class="header">
      <div class="header-top">
        <div class="header-text">
          <h2 class="header-text__1">Záhradné centrum</h2>
          <h1 class="header-text__2">Huncovce</h1>
        </div>

        <div class="objednavky">
          <svg class="objednavky__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M23.464 12.698l-5.45 1.522-3.966-2.22 3.966-2.219 5.449 1.521.537-1.927-3.523-.982 3.125-1.762-.983-1.742-3.125 1.761.983-3.523-1.926-.537-1.52 5.449-4.031 2.256v-3.881l4-4-1.414-1.414-2.586 2.586v-3.586h-2v3.586l-2.586-2.586-1.414 1.414 4 4v3.881l-4.031-2.256-1.52-5.449-1.926.537.982 3.523-3.124-1.761-.982 1.742 3.124 1.762-3.523.982.537 1.927 5.449-1.521 3.966 2.219-3.966 2.22-5.45-1.522-.536 1.927 3.523.982-3.125 1.763.983 1.741 3.125-1.761-.984 3.523 1.927.536 1.521-5.448 4.03-2.255v3.88l-4 4 1.414 1.414 2.586-2.586v3.586h2v-3.586l2.586 2.586 1.414-1.414-4-4v-3.88l4.03 2.255 1.521 5.448 1.927-.536-.984-3.523 3.125 1.761.983-1.741-3.125-1.763 3.523-.982z"
            />
          </svg>
          <div class="objednavky__text">Objednávky príjmame aj v zime!</div>
        </div>
      </div>
      <div class="header-mid">
        <div class="header-svg">
          <div data-aos="flip-left" class="svg-box">
            <svg class="svg-box__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"
              />
            </svg>

            <div class="svg-box__text">Top materiály slovenskej výroby</div>
          </div>

          <div data-aos="flip-right" class="svg-box margin-top">
            <svg class="svg-box__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M5 4h-3v-1h3v1zm8 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11-5v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8l1.406 2.109c.371.557.995.891 1.664.891h3.93zm-19 4c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm13 4c0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5 5-2.239 5-5z"
              />
            </svg>

            <div class="svg-box__text">
              <span>Fotografiu Vašej vysnenej záhrady</span>
              <span>premeníme na realitu</span>
            </div>
          </div>

          <div data-aos="flip-left" class="svg-box">
            <svg class="svg-box__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M7 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm9 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm4-1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-17.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.318 3.168c-.761-1.413-1.699-3.17-2.684-4.812-.786-1.312-1.37-1.938-2.751-2.187-1.395-.25-2.681-.347-4.585-.347s-3.19.097-4.585.347c-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.412-.98 3.806 0 1.318.42 2.415 1 3.817v2.209c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-2.209c.58-1.403 1-2.499 1-3.817 0-1.394-.293-2.533-.98-3.806zm-15.641-3.784c.67-1.117.852-1.149 1.39-1.246 1.268-.227 2.455-.316 4.231-.316s2.963.088 4.231.316c.538.097.72.129 1.39 1.246.408.681.81 1.388 1.195 2.081-1.456.22-4.02.535-6.816.535-3.048 0-5.517-.336-6.805-.555.382-.686.779-1.386 1.184-2.061zm11.595 10.616h-11.948c-1.671 0-3.026-1.354-3.026-3.026 0-1.641.506-2.421 1.184-3.678 1.041.205 3.967.704 7.816.704 3.481 0 6.561-.455 7.834-.672.664 1.231 1.166 2.01 1.166 3.646 0 1.672-1.355 3.026-3.026 3.026zm5.526-10c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202z"
              />
            </svg>

            <div class="svg-box__text">Rýchle dodanie priamo k Vám domov</div>
          </div>

          <div data-aos="flip-right" class="svg-box">
            <svg class="svg-box__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M17.728 20.517c-3.488 0-5.613-2.461-6.443-5.517h6.715l.333-2h-7.398c-.059-.664-.064-1.335-.014-2h7.746l.333-2h-7.755c.786-3.106 2.855-5.626 6.154-5.626 1.133 0 2.391.203 3.836.62l.765-3.162c-1.854-.552-3.616-.832-5.244-.832-5.959 0-9.541 4.152-10.594 9h-2.162l-.333 2h2.203c-.049.666-.051 1.334-.007 2h-2.53l-.333 2h3.145c1.033 4.848 4.664 9 11.085 9 1.5 0 3.004-.276 4.476-.821l-.883-3.23c-1.048.378-2.088.568-3.095.568z"
              />
            </svg>

            <div class="svg-box__text">Najnižšie ceny výroby na mieru</div>
          </div>
        </div>

        <div class="header-right">
          <div class="header-right__formular">
            <form name="contact" method="POST" data-netlify="true" action="success.html">
              <input type="text" id="name" name="Meno" placeholder="Meno" />

              <input type="email" id="emain" name="Email" placeholder="Email" />

              <textarea id="subject" name="Správa" placeholder="Správa"></textarea>
              <div class="header-right__bottom">
                <input type="submit" value="Odoslať" />
                <div class="header-right__text">Ďakujeme!</div>
              </div>
            </form>
          </div>

          <div class="header-right__prianie">
            <img class="header-right__prianie--svg" src="@/assets/img/svg/christmas.svg" alt />
            <div
              class="header-right__prianie--text"
            >Želáme Vám krásne vianočné sviatky plné šťastia a pohody</div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
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
      rgba(rgb(0, 0, 0), 0.85),
      rgba(rgb(0, 0, 0), 0.85)
    ),
    url(~assets/img/bg1.jpg);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* @media only screen and (max-width: $bg-sm) {
        min-height: calc(100vh - 6.5rem);
    } */
}

.header-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1.5rem;
  font-size: 4.8rem;
  color: white;
  font-family: $font-family1;

  @media only screen and (max-width: $bg-lg) {
    font-size: 3.8rem;
  }

  @media only screen and (max-width: $bg-md) {
    font-size: 3rem;
  }

  @media only screen and (max-width: $bg-sm) {
    flex-direction: column;
  }

  &__1 {
    padding-right: 1.5rem;

    @media only screen and (max-width: $bg-sm) {
      padding-right: 0rem;
    }
  }
}

.objednavky {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0 3rem 0;

  &__text {
    color: white;
    text-align: center;
    font-family: $font-family3;
    padding-top: 1.5rem;
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  &__svg {
    height: 4rem;
    fill: rgb(16, 97, 246);
  }
}

.header-mid {
  display: flex;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 3rem;
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

  &__text {
    color: white;
    text-align: center;
    font-family: $font-family3;
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    letter-spacing: 1px;
  }

  &__svg {
    height: 4rem;
    fill: $main-color;
  }
}

.header-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  padding-left: 5rem;

  @media only screen and (max-width: $bg-sm) {
    padding-left: 0rem;
    padding: 1rem;
  }

  &__formular {
    //order: 1;
    padding: 2rem;
    margin: 0 auto;
  }

  &__bottom {
    display: flex;
    align-items: center;
  }

  &__text {
    color: white;
    font-size: 1.8rem;
    font-family: $font-family3;

    padding-left: 2rem;
  }

  &__prianie {
    display: flex;
    align-items: center;
    justify-content: center;

    &--svg {
      width: 25rem;
      //padding: 1rem;
    }

    &--text {
      max-width: 24rem;
      text-align: center;
      color: white;
      font-size: 2rem;
      font-family: $font-family3;
      //padding: 1rem;
    }
  }
}

/* Style inputs */
input[type="text"],
input[type="email"],
select,
textarea {
  margin-bottom: 0.8rem;
  width: 100%;
  padding: 1rem;
  border: 2px solid rgb(163, 163, 163);
  resize: vertical;
  border-radius: 5px;
  font-size: 1.3rem;
  font-family: $font-family3;
  font-weight: 800;
}

input[type="submit"] {
  background-color: $main-color;
  color: black;
  padding: 0.8rem 1.6rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: $font-family3;
  font-weight: 800;
  transition: 0.1s;
  display: block;
}

input[type="submit"]:hover {
  transform: scale(1.05);
}

.about {
  padding-top: 7rem;
}

.about-text {
  text-align: center;
  font-size: 5rem;
  font-family: $font-family1;
  font-weight: 800;
}

.box {
  padding: 3rem 4rem 6rem 5rem;
  max-width: 100rem;
  margin: auto;

  &-text {
    padding: 1.5rem 0rem;
    font-size: 2.1rem;
    text-align: left;
    line-height: 1.3;
    font-family: $font-family3;
  }
}

.certifikat-text {
  font-size: 3.7rem;
  text-align: center;
  padding-top: 2.5rem;
  font-family: $font-family1;
  border-top: 1.5px solid black;
  font-weight: 800;
}

.certifikat-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2.5rem;

  max-width: 120rem;
  margin: 0 auto;

  &__item {
    padding: 1.5rem;
  }

  &__img {
    width: 13rem;
    height: 17rem;
    cursor: pointer;
    box-shadow: 2px 2px 3px 0px rgb(0, 0, 0);
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
