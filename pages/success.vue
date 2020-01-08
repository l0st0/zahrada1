<template>
  <div class="container-small mid">
    <div class="success">
      <h2 class="success__header">Ďakujeme :)</h2>
      <p class="success__sub">Ozveme sa Vám čo najskôr.</p>
      <a class="success__a" href="/">
        <svg
          class="success__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
          />
        </svg>
        <p class="success__a-text">Vrátiť sa na stránku</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.success {
  text-align: center;
  font-size: 1.8rem;

  &__sub {
    padding-top: 1rem;
  }

  &__a {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    transform: translateX(-0.5rem);

    &:hover .success__svg {
      transition: all 0.2s;
    }

    &-text {
      color: blue;
    }
  }

  &__svg {
    width: 3rem;
    padding-right: 1rem;
    transform: translateY(0.2rem);
  }
}
</style>