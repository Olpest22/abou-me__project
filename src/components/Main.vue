<template>
    <div class="wrap-main__conteiner">
      <div class="wrap-main__conteiner__content">
        <ContentPage v-for="(page, index) in pages"
                     :key="index"
                     :page="page"
                     v-show="activePageIndex === index" />
      </div>
      <div class="wrap-main__conteiner__panel">
        <PanelButton v-for="(button, index) in pages"
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
      const activePageIndex = ref(0); // для отслеживания активной страницы
      const pages = ref([
        { id: 'about-me', label: 'Обо мне' },
        { id: 'portfolio', label: 'Портфолио' },
        { id: 'skills', label: 'Мои скиллы' },
        { id: 'other', label: 'Разное' }
      ]);
  
      const setActivePage = (index) => {
        activePageIndex.value = index;
      };
  
      // Инициализация анимаций после того, как компонент смонтирован
      onMounted(() => {
        const buttons = document.querySelectorAll('.box');
        const pageElements = document.querySelectorAll('.wrap-main__conteiner__content__page');
        
        // Анимация для боковой панели и контента
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
  
        // Анимация для кнопок без изменения масштаба
        buttons.forEach((button, index) => {
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
  
        // Изначально скрываем все страницы и показываем первую
        hideAllPages();
        showPage(0);
  
        // Устанавливаем flex-grow и flex-basis для кнопок, чтобы они не сжимались
        buttons.forEach((button) => {
          button.style.flexGrow = "1";  // Убедитесь, что кнопки могут расширяться
          button.style.flexBasis = "100%";  // Установите минимальный размер
        });
      });
  
      // Функции для скрытия/показа страниц
      const hideAllPages = () => {
        const pages = document.querySelectorAll('.wrap-main__conteiner__content > div');
        pages.forEach((page) => {
          page.style.display = 'none';
        });
      };
  
      const showPage = (pageIndex) => {
        hideAllPages();
        const pages = document.querySelectorAll('.wrap-main__conteiner__content > div');
        pages[pageIndex].style.display = 'block';
      };
  
      return {
        activePageIndex,
        pages,
        setActivePage
      };
    }
  };
  </script>
  