<template>
  <h2 class="heading-2">{{header}}</h2>
</template>

<script>
export default {
  props: ["header"]
};
</script>

<style lang="scss" scoped>
.heading-2 {
  padding: 5rem 1rem 4rem 1rem;
  font-size: 4.5rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;

  @media only screen and (max-width: $bg-sm) {
    font-size: 4rem;
  }
}
</style>