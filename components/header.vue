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
  padding: 4rem 2rem 4rem 2rem;
  font-size: 4.5rem;
  text-align: center;

  @media only screen and (max-width: $bg-sm) {
    font-size: 4rem;
  }
}
</style>