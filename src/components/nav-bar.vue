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
        :checked="isDarkMode"
      />
      <font-awesome-icon :icon="['far', 'moon']" class="ml-2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue';
import { themeChange } from 'theme-change';
import { useNavStore } from '@/stores/nav';

const navStore = useNavStore();
const isDarkMode: Ref = ref(false);

onMounted(() => {
  // Initialize theme
  themeChange(false);
  isDarkMode.value = localStorage.getItem('theme') === 'dark';
});
</script>
