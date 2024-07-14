<template>
  <table v-if="!noResults" class="meteorite-table table">
    <thead>
      <tr>
        <th>
          <label>
            {{ interactionColumnTitle }}
          </label>
        </th>
        <th>{{ $t('id') }}</th>
        <th>{{ $t('name') }}</th>
        <th>{{ $t('mass') }}</th>
        <th>{{ $t('year') }}</th>
        <th>{{ $t('recclass') }}</th>
        <th>{{ $t('fell') }}</th>
      </tr>
    </thead>
    <tbody>
      <MeteoriteRow
        v-for="meteorite in meteorites"
        :key="meteorite.id"
        :meteorite="meteorite"
        :show-checkbox="showCheckbox"
      />
    </tbody>
  </table>
  <div v-else class="no-results-message my-14 w-full text-center">
    {{ noResultMessage }}
  </div>
</template>

<script lang="ts" setup>
import type { Meteorite } from '@/types/meteorite';
import MeteoriteRow from '@/components/meteorite-row.vue';

defineProps({
  interactionColumnTitle: {
    type: String,
    required: true
  },
  meteorites: {
    type: Array as () => Meteorite[],
    required: true
  },
  noResults: {
    type: Boolean,
    required: true
  },
  noResultMessage: {
    type: String,
    required: true
  },
  showCheckbox: {
    type: Boolean,
    default: true
  }
});
</script>
