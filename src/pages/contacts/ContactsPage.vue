<template>
  <section class="contacts">
    <div class="contacts-wrap container">
      <BreadCrumbs :title="pageTitle"></BreadCrumbs>
      <h2 class="contacts__title section-title">{{ pageTitle }}</h2>
      <div class="contacts__content">
        <div class="contacts-space"></div>
        <div class="contacts-info">
          <img src="../../assets/images/webp/qrcode.webp" alt="qrcode" class="contacts-info__img" width="50" height="50">
          <ul class="contacts-info__list">
            <li class="contacts-info__list-item">
              <IconComponent name="call" :size="15" color="#6d6e70" />
              <a href="tel:+380442216809" class="contacts-info__list-link">+38 044 221 68 09</a>
            </li>
            <li class="contacts-info__list-item">
              <IconComponent name="call" :size="15" color="#6d6e70" />
              <a href="tel:+380445411782" class="contacts-info__list-link">+38 044 541 17 82</a>
            </li>
            <li class="contacts-info__list-item">
              <IconComponent name="mail" :size="15" color="#6d6e70" />
              <a href="mailto:info@sedarte.com.ua" class="contacts-info__list-link">info@sedarte.com.ua</a>
            </li>
            <li class="contacts-info__list-item">
              Україна, Київ, вул. Микільсько-Слобідська, 1А
            </li>
          </ul>
          <form class="contacts-form" action="#" method="post">
            <h3 class="contacts-form__title paragraph-title">Зворотній зв'язок</h3>
            <input type="text" placeholder="Ваше ім'я" class="contacts-form__input" >
            <input type="text" placeholder="Email" class="contacts-form__input" >
            <textarea name="message" id="messageField" placeholder="Ваше повідомлення" cols="40" rows="10" class="contacts-form__textarea"></textarea>
            <button id="buttonSubmit" name="buttonSubmit" type="submit" class="contacts-form__btn">Надіслати</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs";
import IconComponent from "@/components/IconComponent";

export default {
  name: "ContactsPage",
  components: {
    BreadCrumbs,
    IconComponent
  },
  data() {
    return {
      pageTitle: "Контакти",
    }
  },
}
</script>

<style lang="scss">
@import "../../assets/styles/pages/contacts-page/contacts-page";
</style>
