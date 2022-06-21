<template>
  <div id="header-logo" class="logohover">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.5 181.5">
      <title>Sedarte Design</title>
      <g id="sedarte" data-name="sedarte">
        <g id="sedarte-2" data-name="sedarte-2">
          <path d="M177.08,177.69V90.15A86.34,86.34,0,0,0,90.75,3.81h0C48.41,3.81,4.42,37.62,4.42,90.59c0,49.59,39.24,87.5,87.19,87.09,36.4-.31,56.25-20.18,56.25-44.07h0A43.58,43.58,0,0,0,104.27,90H57.67a25,25,0,0,1-25-25h0c0-24.47,22.5-43.95,60.05-43.95,45.6,0,60.33,32.56,60.33,40h0" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></path>
          <rect width="181.5" height="181.5" fill="none"></rect>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "LogoIcon"
}
</script>

<style scoped>
@keyframes loopLogo {
  0% {
    stroke-dashoffset: 892.132080078125;
  }

  50% {
    stroke-dashoffset: 1784.26416015625;
  }

  100% {
    stroke-dashoffset: 2676.396240234375;
  }
}

#header-logo:hover path{
  stroke-dasharray: 892.132080078125;
  stroke-dashoffset: 892.132080078125;
  animation: loopLogo 3s infinite;
}
</style>
