<template>
  <div class="card bg-base-200 shadow-xl m-2">
    <div
      class="card-title pl-4 pt-4 sticky top-0 bg-base-200 bg-opacity-100 w-full z-50"
      v-if="title"
    >
      {{ title }}
    </div>
    <div class="card-body px-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: false
  }
});
</script>
