<template>
  <div class="snowflakes">
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❄</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❄</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❄</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.snowflake {
  color: #fff;
  font-size: 2.5rem;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  //display: none;
}

@keyframes snowflakes-fall {
  0% {
    top: -5%;
  }

  100% {
    top: 94%;
  }
}

@keyframes snowflakes-shake {
  0% {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(10rem);
  }

  100% {
    transform: translateX(0px);
  }
}

.snowflake {
  position: absolute;
  top: -10%;
  z-index: 1;
  user-select: none;
  cursor: default;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 8s, 5s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}

.snowflake:nth-of-type(0) {
  left: 1%;
  animation-delay: 0s, 0s;
}

.snowflake:nth-of-type(1) {
  left: 10%;
  animation-delay: 1s, 1s;
}

.snowflake:nth-of-type(2) {
  left: 20%;
  animation-delay: 6s, 0.5s;
}

.snowflake:nth-of-type(3) {
  left: 30%;
  animation-delay: 4s, 2s;
}

.snowflake:nth-of-type(4) {
  left: 40%;
  animation-delay: 2s, 2s;
}

.snowflake:nth-of-type(5) {
  left: 50%;
  animation-delay: 8s, 3s;
}

.snowflake:nth-of-type(6) {
  left: 60%;
  animation-delay: 6s, 2s;
}

.snowflake:nth-of-type(7) {
  left: 70%;
  animation-delay: 2.5s, 1s;
}

.snowflake:nth-of-type(8) {
  left: 80%;
  animation-delay: 1s, 0s;
}

.snowflake:nth-of-type(9) {
  left: 85%;
  animation-delay: 3s, 1.5s;
}
</style>