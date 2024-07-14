<template>
  <div class="favorite-meteorites">
    <MeteoriteTable
      :interaction-column-title="$t('remove')"
      :no-results="meteoriteStore.noFavorites"
      :meteorites="meteoriteStore.filteredFavorites"
      :no-result-message="$t('noFavorites')"
      :show-checkbox="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMeteoriteStore } from '@/stores/meteorite';
import MeteoriteTable from '@/components/meteorite-table.vue';

const meteoriteStore = useMeteoriteStore();
</script>
