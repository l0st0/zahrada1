<template>
  <div class="container-small">
    <Header header="Kontaktujte nás!" />

    <p class="kontakt-head">
      Pre informácie o
      <strong>cenách výrobkov</strong> na predajni nás kontaktujte na
      čísle
      <strong>0915 354 558</strong>,
      prostredníctvom e-mailovej adresy
      <strong>jarka.bilinova@gmail.com</strong> alebo
      <strong>formulárom</strong>
      nižšie.
    </p>

    <div class="kontakt-bottom">
      <div class="kontakt-bottom__map">
        <iframe
          class="kontakt-bottom__iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1692.502731484762!2d20.3664713287307!3d49.11174681679225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA2JzQyLjMiTiAyMMKwMjInMDMuNCJF!5e1!3m2!1ssk!2ssk!4v1570085138906!5m2!1ssk!2ssk"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
      <div class="kontakt-bottom__formular">
        <form name="kontakt" method="POST" data-netlify="true" action="success.html">
          <input type="text" id="name" name="Meno" placeholder="Meno" />

          <input type="email" id="emain" name="Email" placeholder="Email" />

          <textarea id="subject" name="Správa" placeholder="Správa" style="height:170px"></textarea>
          <input type="submit" value="Odoslať" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.kontakt-head {
  font-size: 2rem;
  max-width: 52rem;
  padding-bottom: 2rem;
  font-family: $font-family3;
  line-height: 1.5;
  margin: auto;
  text-align: center;

  @media only screen and (max-width: $bg-sm) {
    font-size: 1.8rem;
  }
}

.kontakt-bottom {
  display: flex;
  justify-content: center;

  @media only screen and (max-width: $bg-sm) {
    flex-direction: column;
    align-items: center;
  }

  &__map {
    padding: 2rem;
    width: 65rem;

    @media only screen and (max-width: $bg-md) {
      width: 50rem;
    }

    @media only screen and (max-width: $bg-sm) {
      width: 100%;
      height: 35rem;
      order: 1;
    }
  }

  &__iframe {
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  }

  &__formular {
    padding: 2rem;
  }
}

input:focus {
  outline: none;
}

#subject:focus {
  outline: none;
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
</style>