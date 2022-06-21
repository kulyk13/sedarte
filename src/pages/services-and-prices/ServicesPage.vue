<template>
  <section class="services">
    <div class="services-wrap container">
      <BreadCrumbs :title="pageTitle"></BreadCrumbs>
      <h2 class="services__title section-title">Ціни на дизайн інтер'єру - {{ pageTitle }}</h2>
      <div class="services-content">
        <div class="services-content__template">
          <h3 class="services-content__template-title paragraph-title">Приклад дизайн-проекту інтер'єру</h3>
          <iframe
              src="https://drive.google.com/file/d/1xKOz83vB6lmiDjMX6-h7MZS0uLvJvwHV/preview"
              allow="autoplay"
              class="services-content__template-window"
          ></iframe>
        </div>
        <div class="services-content__info">
          <p class="services-content__info-text general-text">
            Дизайн-проект дає можливість передати ідею й концепцію майбутнього інтер’єру або ж екстер’єру. Такий проект дозволяє розглянути й знайти оптимальні способи та шляхи реалізації поставлених завдань. Крім цього, креслення  необхідні для проведення різнопланових будівельних робіт. За допомогою проекту та відповідних ескізів будівельна бригада буде виконувати ремонтні роботи у вашій квартирі, офісі, ресторані, котеджі чи іншому приміщенні.
            <br />
            <br />
            <strong>Design Studio “Sedarte”</strong> розробляє максимально точні проекти, які надають можливість клієнтам побачити ідеально спланований, функціональний і стильний інтер’єр, і креслення для успішного виконання якісного ремонту.
          </p>
          <h3 class="services-content__info-subtitle">Ціни на дизайн інтер’єрів </h3>
          <p class="services-content__info-text general-text">Вартість кожного проекту розраховується індивідуально  й може коштувати від 20$ до 40$ за 1 м.кв. приміщення.</p>
          <h3 class="services-content__info-subtitle">У кошторис входить:</h3>
          <ul class="services-content__estimate services-content__list general-text">
            <li
                v-for="(item, idx) in estimateData"
                :key="idx"
                class="services-content__estimate-item"
            >
              {{ item.itemText }}
            </li>
          </ul>
          <h3 class="services-content__info-subtitle">Підбір матеріалів.</h3>
          <ul class="services-content__materials services-content__list general-text">
            <li
                v-for="(item, idx) in materialsData"
                :key="idx"
                class="services-content__materials-item services-content__list-item"
            >
              {{ item.itemText }}
            </li>
          </ul>
          <h3 class="services-content__info-subtitle">Авторський нагляд.</h3>
          <ul class="services-content__supervision services-content__list general-text">
            <li class="services-content__supervision-item services-content__list-item">Контроль відповідності результату ремонтно-будівельних робіт початковому дизайн-проекту.</li>
            <li class="services-content__supervision-item services-content__list-item">Внесення необхідних змін до проекту.</li>
            <li class="services-content__supervision-item services-content__list-item">Декорування приміщень (килими, картини, штори, тюль, а також інші предмети інтер’єру).</li>
          </ul>
          <h3 class="services-content__info-subtitle">Додаткові послуги*</h3>
          <ul class="services-content__additional services-content__list general-text">
            <li class="services-content__supervision-item services-content__list-item">Дизайнерська розробка деяких елементів інтер’єру  (столярні вироби, вітражі, мозаїка, ковані вироби, художній паркет, меблі і т.п.)</li>
            <li class="services-content__supervision-item services-content__list-item">Розробка дизайну фасаду.</li>
            <li class="services-content__supervision-item services-content__list-item">Вентиляція й кондиціонування.</li>
          </ul>
          <h3 class="services-content__info-subtitle services-content__info-subtitle--last">Ремонтно-будівельні роботи*</h3>
          <ul class="services-content__works services-content__list general-text">
            <li class="services-content__works-item services-content__list-item">Кошторис дизайн-проекту.</li>
            <li class="services-content__works-item services-content__list-item">Усі види ремонтно-будівельних послуг.</li>
          </ul>
          <p class="services-content__info-text general-text">* Додаткові послуги у вартість дизайн-проекту не входять й обговорюються окремо.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs";

export default {
  name: "ServicesPage",
  components: {
    BreadCrumbs
  },
  data() {
    return {
      pageTitle: "Послуги та ціни",
      estimateData: [
        {
          itemText: "Обмірний план приміщення.",
        },
        {
          itemText: "Зонування приміщення, перепланування ( за необхідності – не менше 2-х варіантів).",
        },
        {
          itemText: "Розробка концепції дизайну інтер’єру.",
        },
        {
          itemText: "Візуалізація інтер’єру з елементами 3D-графіки.",
        },
        {
          itemText: "План приміщення.",
        },
        {
          itemText: "План розташування меблів.",
        },
        {
          itemText: "План будівельного демонтажу.",
        },
        {
          itemText: "План будівельного монтажу.",
        },
        {
          itemText: "Обмірний план приміщення після монтажу.",
        },
        {
          itemText: "План підлоги.",
        },
        {
          itemText: "План стелі.",
        },
        {
          itemText: "План-схема розеток.",
        },
        {
          itemText: "План-схема освітлення й вимикачів.",
        },
        {
          itemText: "Плани санвузлів (схеми підключення сантехнічного обладнання та укладання плитки).",
        },
        {
          itemText: "Розгортка стін і окремих ділянок інтер’єру.",
        },
        {
          itemText: "Специфікація оздоблювальних матеріалів.",
        },
      ],
      materialsData: [
        {
          itemText: "Підбір усіх оздоблювальних матеріалів (шпалери, декоративна шпаклівка, покриття для підлоги, керамічна плитка і т.п.).",
        },
        {
          itemText: "Підбір меблів (фабрика, артикул і т.п.) (за необхідності – креслення меблів).",
        },
        {
          itemText: "Підбір сантехніки (фабрика, артикул і т.п.).",
        },
        {
          itemText: "Підбір світильників, бра, люстр (фабрика, артикул і т.п.).",
        },
        {
          itemText: "Підбір декоративних елементів.",
        },
      ],
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/pages/services-page/services-page";
</style>
