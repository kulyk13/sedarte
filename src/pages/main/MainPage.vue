<template>
  <HeroBlock></HeroBlock>
</template>

<script>
import HeroBlock from "@/pages/main/partials/HeroBlock.vue";

export default {
  name: "MainPage",
  components: {
    HeroBlock
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/pages/home-page/home-page";
</style>
