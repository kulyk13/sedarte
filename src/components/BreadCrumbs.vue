<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <router-link to="/" class="breadcrumbs__link">Студія дизайн інтер'єру Sedarte</router-link>
    </li>
    <li class="breadcrumbs__item">
      >
    </li>
    <li class="breadcrumbs__item">
      {{ title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    title: String,
  }
}
</script>

<style lang="scss">
@import "../assets/styles/components/bread-crumbs";
</style>
