<template>
  <ul class="design-card-list">
    <li
        v-for="(card, idx) in cardData"
        :key="idx"
        class="design-card-list__item"
    >
      <router-link to="/" class="design-card-list__img-link ">
        <span></span>
        <img
            :src="card.img"
            :alt="card.title"
            width="216"
            height="155"
            class="design-card-list__img"
        >
        <span></span>
      </router-link>
      <router-link to="/" class="design-card-list__link link">
        {{ card.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DesignCardList",
  props: {
    cardData: Array,
  }
}
</script>

<style lang="scss">
@import "../assets/styles/components/design-card-list";
</style>
