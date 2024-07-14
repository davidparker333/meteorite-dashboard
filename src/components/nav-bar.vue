<template>
  <div class="navbar flex justify-between">
    <div class="active-page text-4xl">{{ $t(`views.${navStore.getActiveView}`) }}</div>
    <div class="theme-toggle">
      <font-awesome-icon :icon="['far', 'lightbulb']" class="mr-2" />
      <input
        type="checkbox"
        class="toggle"
        data-toggle-theme="light,dark"
        data-act-class="ACTIVECLASS"
        :checked="navStore.isDark"
        @click="navStore.toggleTheme()"
      />
      <font-awesome-icon :icon="['far', 'moon']" class="ml-2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';
import { useNavStore } from '@/stores/nav';

const navStore = useNavStore();

onMounted(() => {
  // Initialize theme
  themeChange(false);
  const theme = localStorage.getItem('theme');
  if (!theme) {
    // First time user - set the default
    localStorage.setItem('theme', 'dark');
    navStore.theme = 'dark';
  }
});
</script>
