<template>
  <div class="wrap-main__conteiner">
    <div class="wrap-main__conteiner__content">
      <!-- Контент для каждой страницы -->
      <ContentPage
        v-for="(page, index) in pages"
        :key="index"
        :page="page"
        v-show="activePageIndex === index" />
    </div>

    <div class="wrap-main__conteiner__panel">
      <!-- Кнопки для переключения страниц -->
      <PanelButton
        v-for="(button, index) in pages"
        :key="index"
        :label="button.label"
        :id="button.id"
        @click="setActivePage(index)" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import ContentPage from './ContentPage.vue';
import PanelButton from './PanelButton.vue';
import gsap from 'gsap';

export default {
  components: {
    ContentPage,
    PanelButton
  },
  setup() {
    const activePageIndex = ref(0); // Для отслеживания активной страницы
    const pages = ref([
      { id: 'about-me', label: 'Обо мне' },
      { id: 'portfolio', label: 'Портфолио' },
      { id: 'skills', label: 'Мои скиллы' },
      { id: 'other', label: 'Разное' }
    ]);

    const setActivePage = (index) => {
      activePageIndex.value = index;
    };

    onMounted(() => {
      // Инициализация анимаций
      const buttons = document.querySelectorAll('.panel-button'); // Используйте правильный класс кнопок
      const pageElements = document.querySelectorAll('.wrap-main__conteiner__content__page');

      // Анимации для боковой панели и контента
      gsap.from('.wrap-main__conteiner__panel', {
        duration: 1,
        z: 100,
        opacity: 0,
        ease: 'power2.out',
        delay: 1.5
      });

      gsap.from('.wrap-main__conteiner__content', {
        duration: 1,
        z: 100,
        opacity: 0,
        ease: 'power2.out',
        delay: 1.5
      });

      // Анимация для кнопок
      buttons.forEach((button) => {
        gsap.from(button, {
          duration: 0.5,
          opacity: 0.5,
          stagger: 1,
          delay: 1
        });
      });

      // Анимация для текста
      gsap.from('.font_nutito', {
        duration: 1,
        y: 20,
        z: -10,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
      });

      // Наклон кнопок при наведении
      const ANGLE = 0.7;
      pageElements.forEach((page) => {
        page.addEventListener('mouseout', () => {
          page.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
          page.style.transition = `all 10s ease`;
        });

        page.addEventListener('mousemove', (e) => {
          const w = page.clientWidth;
          const h = page.clientHeight;
          const y = (e.offsetX - w * 0.5) / w * ANGLE;
          const x = -(e.offsetY - h * 0.5) / h * ANGLE;

          page.style.transform = `perspective(400px) rotateX(${x}deg) rotateY(${y}deg)`;
          page.style.transition = `none`;
        });
      });
    });

    return {
      activePageIndex,
      pages,
      setActivePage
    };
  }
};
</script>

<style scoped>
/* Добавьте стили для .panel-button, если они еще не добавлены */
.panel-button {
  flex-grow: 1;  /* Убедитесь, что кнопки могут расширяться */
  flex-basis: 100%;  /* Установите минимальный размер */
}
</style>
