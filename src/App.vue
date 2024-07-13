<template>
  <div class="container flex flex-wrap justify-center">
    <Nav />
    <RouterView class="w-full max-w-screen-lg" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Nav from '@/components/nav-bar.vue';
</script>
