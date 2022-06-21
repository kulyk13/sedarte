<template>
  <section class="about">
    <div class="about-wrap container">
      <BreadCrumbs :title="pageTitle"></BreadCrumbs>
      <h2 class="about__title section-title">Дизайн студія Київ - {{ pageTitle }}</h2>
      <CardList :card-data="cardData"></CardList>
      <div class="about-info">
        <h3 class="about-info__title paragraph-title">Дизайн-студія інтер’єрів. Коротко про нас.</h3>
        <p class="about-info__text general-text">
          Ми – люди мистецтва,  і це пробуджує в нас творчий дух, бажання змінювати світ за законами краси й гармонії. Сама назва нашої компанії є підтвердженням цього, адже SEDARTE (у перекладі з латині) означає Мистецтво. Тому ми досконало володіємо відповідними вміннями, талантом, майстерністю проектування та декорування приміщень різноманітних будівель.
          <br />
          <br />
          Фахівці Design Studio «SEDARTE» допоможуть вам створити комфортний, зручний, стильний й естетично ергономічний простір будь-якого приміщення. Ми займаємося проектами від початку, тобто розробки ескізу майбутнього інтер’єру, до завершення всіх будівельних і оздоблювальних робіт, порадимо й підберемо (відповідно до вибраного вами стилю) меблі, техніку, види сантехніки та елементи декору. Усі наші проекти сучасні і стильні й вирізняються індивідуальністю та креативністю.
          <br />
          <br />
          Отож, якщо вам потрібен якісний та оригінальний дизайн інтер’єру, ви зайшли на правильний сайт. Ми з радістю допоможемо втілити всі ваші мрії  в реальність!
        </p>
        <h4 class="about-info__subtitle">Ознайомтеся з вартістю дизайну інтер’єрів та послугами, які надає наша студія.</h4>
        <router-link to="/services-and-prices/" class="btn about-info__btn">
          <span></span>
          Послуги та ціни
          <span></span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import CardList from "@/components/CardList";

export default {
  name: "AboutPage",
  components: {
    CardList,
    BreadCrumbs
  },
  data() {
    return {
      pageTitle: "Про нас",
      cardData: [
        {
          "img": require('../../assets/images/jpg/Jylia-min.jpg'),
          "name": "Юля",
          "title": "дизайнер",
        },
        {
          "img": require('../../assets/images/jpg/kristinka-min.jpg'),
          "name": "Христина",
          "title": "дизайнер",
        },
        {
          "img": require('../../assets/images/jpg/Tania-min.jpg'),
          "name": "Таня",
          "title": "дизайнер",
        },
        {
          "img": require('../../assets/images/jpg/marta.jpg'),
          "name": "Марта",
          "title": "архітектор/дизайнер",
        },
        {
          "img": require('../../assets/images/jpg/maxim.jpg'),
          "name": "Максим",
          "title": "програміст",
        },
        {
          "img": require('../../assets/images/jpg/Ola-min.jpg'),
          "name": "Оля",
          "title": "менеджер",
        },
      ],
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/pages/about-page/about-page";
</style>
