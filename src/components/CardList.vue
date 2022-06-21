<template>
  <ul class="card-list">
    <li
        v-for="(card, idx) in cardData"
        :key="idx"
        class="card-list__card"
    >
        <img
            :src="card.img"
            :alt="card.name"
            class="card-list__card-img"
        >
        <router-link
          v-if="card.link && card.link.length > 0"
          :to="card.link"
          class="card-list__card-text card-list__card-text--link"
        >
          <h3 class="card-list__card-title">{{card.title}}</h3>
          <p class="card-list__card-name">{{card.name}}</p>
        </router-link>
        <div v-else class="card-list__card-text">
          <h3 class="card-list__card-title">{{card.title}}</h3>
          <p class="card-list__card-name">{{card.name}}</p>
        </div>
    </li>
  </ul>
</template>

<script>
import {gsap} from "gsap";

export default {
  name: "CardComponet",
  props: {
    cardData: Array,
  },
  mounted() {
    this.cardAnimate();
  },
  methods: {
    cardAnimate() {
      gsap.from(".card-list__card", {
        opacity: 0,
        duration: 0.7,
        stagger: 0.5,
        x: 50,
        ease: "circ.out"
      })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/components/card-list";
</style>
