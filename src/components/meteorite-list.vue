<template>
  <div class="meteorite-list">
    <div class="search-bar flex justify-center px-3 pb-5">
      <input
        type="text"
        class="search-input input input-bordered w-full"
        :placeholder="$t('search')"
        v-model="meteoriteStore.searchQuery"
      />
    </div>
    <MeteoriteTable
      :interaction-column-title="$tc('favorites', 1)"
      :no-results="meteoriteStore.noResults"
      :meteorites="meteoriteStore.currentPage"
      :no-result-message="$t('noResults')"
    />
    <div class="table-pagination join grid grid-cols-2 mt-4">
      <button
        class="join-item btn btn-outline"
        :class="{ 'btn-disabled': meteoriteStore.page === 1 || meteoriteStore.noResults }"
        @click="meteoriteStore.previousPage()"
      >
        {{ $t('previousPage') }}
      </button>
      <button
        class="join-item btn btn-outline"
        :class="{
          'btn-disabled':
            meteoriteStore.totalPages === meteoriteStore.page || meteoriteStore.noResults
        }"
        @click="meteoriteStore.nextPage()"
      >
        {{ $t('nextPage') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMeteoriteStore } from '@/stores/meteorite';
import MeteoriteTable from '@/components/meteorite-table.vue';

const meteoriteStore = useMeteoriteStore();
</script>
