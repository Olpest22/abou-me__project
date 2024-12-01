<template>
    <div class="box" :id="id" @click="handleClick">
      <span class="font_nutito">{{ label }}</span>
    </div>
  </template>
  
<script>
  export default {
    props: {
      id: String,
      label: String
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  