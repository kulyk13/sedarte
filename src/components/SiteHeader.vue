<template>
  <header class="header">
    <div class="header-desktop container" >
      <div class="header-top">
        <ul class="header-top__socials socials">
          <li class="header-top__socials-item socials__item">
            <a href="https://www.facebook.com/dssedarte" target="_blank" rel="noopener noreferrer nofollow" class="header-top__socials-link socials__link">
              <IconComponent name="facebook" :size="17" color="#6d6e70" />
            </a>
          </li>
          <li class="header-top__socials-item socials__item">
            <a href="https://www.instagram.com/sedarte_design/" target="_blank" rel="noopener noreferrer nofollow" class="header-top__socials-link socials__link">
              <IconComponent name="instagram" :size="17" color="#6d6e70" />
            </a>
          </li>
          <li class="header-top__socials-item socials__item">
            <a href="https://www.pinterest.com/sedarteua/" rel="noopener noreferrer nofollow" target="_blank" class="header-top__socials-link socials__link">
              <IconComponent name="pinterest" :size="17" color="#6d6e70" />
            </a>
          </li>
          <li class="header-top__socials-item socials__item">
            <a href="https://twitter.com/sedarteua" rel="noopener noreferrer nofollow" target="_blank" class="header-top__socials-link socials__link">
              <IconComponent name="twitter" :size="17" color="#6d6e70" />
            </a>
          </li>
        </ul>
        <ul class="header-top__lang lang">
          <li class="header-top__lang-item lang__item">
            <button
                @click="lang = 'ua'"
                class="header-top__lang-link lang__link"
                :class="{'active' : lang === 'ua'}"
            >
              UA
            </button>
          </li>
          <li class="header-top__lang-item lang__item">
            <button
                @click="lang = 'en'"
                class="header-top__lang-link lang__link"
                :class="{'active' : lang === 'en'}"
            >
              EN
            </button>
          </li>
          <li class="header-top__lang-item lang__item">
            <button
                @click="lang = 'ru'"
                class="header-top__lang-link lang__link"
                :class="{'active' : lang === 'ru'}"
            >
              RU
            </button>
          </li>
        </ul>
      </div>
      <nav class="header-nav nav">
        <router-link
            to="/"
            @click="thisPage = ''"
            class="logo"
        >
          <LogoIcon/>
          <span class="logo__text">Sedarte design</span>
        </router-link>
        <button
            @click="burgerOpen = !burgerOpen"
            class="menu-btn"
            :class="[burgerOpen ? 'close' : '']"
            type="button"
        >
          Меню
        </button>
        <ul
            class="header-nav__menu menu"
            :class="[burgerOpen ? 'open' : '']"
        >
          <li class="header-nav__menu-item menu-item">
            <router-link
                to="/about/"
                @click="thisPage = 'about'"
                class="header-nav__menu-link menu-link link"
                :class="{'active' : thisPage === 'about'}"
            >
              Про нас
            </router-link>
          </li>
          <li class="header-nav__menu-item menu-item">
            <router-link
                to="/services-and-prices/"
                @click="thisPage = 'services-and-prices'"
                class="header-nav__menu-link menu-link link"
                :class="{'active' : thisPage === 'services-and-prices'}"
            >
              Послуги та ціни
            </router-link>
          </li>
          <li class="header-nav__menu-item menu-item">
            <router-link
                to="/portfolio/"
                @click="thisPage = 'portfolio'"
                class="header-nav__menu-link menu-link link"
                :class="{'active' : thisPage === 'portfolio'}"
            >
              Дизайн інтер'єру
            </router-link>
          </li>
          <li class="header-nav__menu-item menu-item">
            <router-link
                to="/styles-page/"
                @click="thisPage = 'styles'"
                class="header-nav__menu-link menu-link link"
                :class="{'active' : thisPage === 'styles'}"
            >
              Стилі
            </router-link>
          </li>
          <li class="header-nav__menu-item menu-item">
            <router-link
                to="/contacts/"
                @click="thisPage = 'contacts'"
                class="header-nav__menu-link menu-link link"
                :class="{'active' : thisPage === 'contacts'}"
            >
              Контакти
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import IconComponent from "./IconComponent.vue";
import LogoIcon from "@/assets/images/svg/LogoIcon";

export default {
  name: "SiteHeader",
  components: {
    LogoIcon,
    IconComponent,
  },
  data() {
    return {
      lang: "ua",
      thisPage: '',
      burgerOpen: false,
    }
  },
}
</script>

<style lang="scss">
@import "../assets/styles/components/site-header";
</style>
