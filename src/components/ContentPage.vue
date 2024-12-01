<template>
  <div class="wrap-main__conteiner__content__page">
    <div class="wrap-main__conteiner__content__page-content">
      <span class='font_comfortaa text_shader big'>{{ page.label }}</span>
      <div class="flex" v-if="page.id === 'about-me'">
        <p class="font_comfortaa text_shader">Я Frontend-разрабочик из прекрастного города Владивосток</p>
        <p class="font_comfortaa text_shader">Мои главные качества </p>
        <p class="font_comfortaa text_shader">Ответственность Самостоятельность Внимательность Таймменеджмент Коммуникабельность</p>
      </div>
      <div class="flex" v-if="page.id === 'portfolio'">
        <p class="font_comfortaa text_shader">Разработка коммерческого проекта Petcher на должности Frontend-разработчика 7 месяцев.</p>
        <p class="font_comfortaa text_shader">Разработка различных SPA под ключ</p>
        <a class="font_comfortaa text_shader link" href="https://github.com/Olpest22">github</a>
      </div>
      
      <p class="font_nutito--white" v-if="page.id === 'skills'">
        <span class="font_comfortaa text_shader border">HTML</span>
        <span class="font_comfortaa text_shader border">JS</span>
        <span class="font_comfortaa text_shader border">CSS</span>
        <span class="font_comfortaa text_shader border">Семантика</span>
        <span class="font_comfortaa text_shader border">Node.js</span>
        <span class="font_comfortaa text_shader border">Адаптивность</span>
        <span class="font_comfortaa text_shader border">Figma</span>
        <span class="font_comfortaa text_shader border">BEM</span>
        <span class="font_comfortaa text_shader border">Vue.js</span>
        <span class="font_comfortaa text_shader border">Pixel Perfect</span>
        <span class="font_comfortaa text_shader border">GSAP</span>
        <span class="font_comfortaa text_shader border">Vue-Router</span>
        <span class="font_comfortaa text_shader border">Express.js</span>
        <span class="font_comfortaa text_shader border">Express-hbs</span>
        <span class="font_comfortaa text_shader border">Tilda</span>
        <span class="font_comfortaa text_shader border">Express-handlebars</span>
      </p>

      <div v-if="page.id === 'other'">
          <a class="font_comfortaa text_shader link" href="https://t.me/Olpestt">Telegram</a>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    page: Object
  },
  mounted() {
    if (this.page.id === 'skills') {
      gsap.to(".font_nutito--white span", {
        z: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      });
    }
  }
};
</script>

