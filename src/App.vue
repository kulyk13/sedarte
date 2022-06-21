<template>
  <SiteHeader></SiteHeader>
  <main class="main">
    <router-view></router-view>
  </main>
  <SiteFooter></SiteFooter>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: 'App',
  components: {SiteFooter, SiteHeader},
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
