<template>
  <section class="styles">
    <div class="styles-wrap container">
      <BreadCrumbs :title="pageTitle"></BreadCrumbs>
      <h2 class="styles__title section-title">Стилі дизайну в інтер'єрі</h2>
      <DesignCardList :card-data="cardData"></DesignCardList>
    </div>
  </section>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs";
import DesignCardList from "@/components/DesignCardList";

export default {
  name: "StylesPage",
  components: {
    BreadCrumbs,
    DesignCardList,
  },
  data() {
    return {
      pageTitle: "Стилі",
      cardData: [
        {
          "img": require('../../assets/images/jpg/avangard.jpg'),
          "title": "Авангард",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/ampir.jpg'),
          "title": "Ампір",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/antychnyi.jpg'),
          "title": "Античний стиль",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/artdeco.jpg'),
          "title": "Арт-Деко",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/african.jpg'),
          "title": "Африканський стиль",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/barocco.jpg'),
          "title": "Бароко",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/bidermeir.jpg'),
          "title": "Бідермейєр",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/victorian.jpg'),
          "title": "Вікторіанський стиль",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/gothic.jpg'),
          "title": "Готичний стиль",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/granzh.jpg'),
          "title": "Гранж",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/kantri.jpg'),
          "title": "Кантрі",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/kitch.jpg'),
          "title": "Кітч",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/klasytsuzm.jpg'),
          "title": "Класицизм",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/kolonialnyi.jpg'),
          "title": "Колоніальний стиль",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/konstruktivizm.jpg'),
          "title": "Конструктивізм",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/konteporari.jpg'),
          "title": "Контемпорарі",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/loft.jpg'),
          "title": "Лофт",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/meksikanskiy.jpg'),
          "title": "Мексиканський",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/minimalizm.jpg'),
          "title": "Мінімалізм",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/modern.jpg'),
          "title": "Модерн",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/orientalizm.jpg'),
          "title": "Орієнталізм",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/popart.jpg'),
          "title": "Поп-Арт",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/rokoko.jpg'),
          "title": "Рококо",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/skandinavskii.jpg'),
          "title": "Скандинавський",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/hitech.jpg'),
          "title": "Хай-тек",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/shebishik.jpg'),
          "title": "Шеббі-шик",
          "link": "/",
        },
        {
          "img": require('../../assets/images/jpg/elektika.jpg'),
          "title": "Еклектика",
          "link": "/",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "../../assets/styles/pages/styles-page/styles-page";
</style>
