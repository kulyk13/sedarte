<template>
  <footer class="footer">
    <div class="footer-wrap container">
      <div class="footer-main">
        <div class="footer-contacts">
          <router-link to="/contacts/" class="footer-contacts__title footer__title">Контакти</router-link>
          <ul class="footer-contacts__list">
            <li class="footer-contacts__list-item">
              <a href="tel:+380442216809" class="footer-contacts__link">
                +38 044 221 68 09
              </a>
            </li>
            <li class="footer-contacts__list-item">
              <a href="mailto:info@sedarte.com.ua" class="footer-contacts__link">
                info@sedarte.com.ua
              </a>
            </li>
            <li class="footer-contacts__list-item">
              Україна, Київ, <br /> вул. Микільсько-Слобідська, 1А
            </li>
          </ul>
        </div>
        <div class="footer-services">
          <router-link to="/" class="footer__services-title footer__title">Послуги</router-link>
          <ul class="footer-services__list">
            <li class="footer-services__list-item">
              <router-link to="/" class="footer-services__link link">
                Дизайнерський ремонт
              </router-link>
            </li>
            <li class="footer-services__list-item">
              <router-link to="/" class="footer-services__link link">
                Дизайнерський ремонт квартири
              </router-link>
            </li>
            <li class="footer-services__list-item">
              <router-link to="/" class="footer-services__link link">
                Дизайн інтер'єру котеджів
              </router-link>
            </li>
            <li class="footer-services__list-item">
              <router-link to="/" class="footer-services__link link">
                Дизайн інтер'єру Квартир
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-info">
        <ul class="footer-info__list">
          <li class="footer-info__list-item">
            <router-link to="/contacts/" class="footer-info__link">© Sedarte design</router-link>
          </li>
          <li class="footer-info__list-item">
            створюємо дизайн інтер'єру з 2011
          </li>
          <li class="footer-info__list-item">
            <router-link to="/" class="footer-info__link link">Карта сайту</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter"
}
</script>

<style lang="scss">
@import "../assets/styles/components/site-footer";
</style>
