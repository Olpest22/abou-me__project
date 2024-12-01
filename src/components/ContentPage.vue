<template>
    <div class="wrap-main__conteiner__content__page">
      <div class="wrap-main__conteiner__content__page-content">
        <span class="font_nutito">{{ page.label }}</span>
        <a v-if="page.id === 'portfolio'" href="https://github.com/Olpest22">github</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      page: Object
    }
  };
  </script>
  