<template>
  <tr class="meteorite-row hover">
    <th>
      <label>
        <input
          v-if="showCheckbox"
          type="checkbox"
          class="checkbox"
          :checked="isChecked"
          @click="meteoriteStore.toggleFavorite(meteorite.id)"
        />
        <font-awesome-icon
          v-else
          :icon="['far', 'circle-xmark']"
          class="cursor-pointer text-lg"
          @click="meteoriteStore.toggleFavorite(meteorite.id)"
        />
      </label>
    </th>
    <th>{{ meteorite.id }}</th>
    <td>{{ meteorite.name }}</td>
    <td>{{ meteorite.mass ? `${meteorite.mass} ${$t('pounds')}` : $t('unknown') }}</td>
    <td>{{ meteorite.year ? new Date(meteorite.year).getFullYear() : $t('unknown') }}</td>
    <td>{{ meteorite.recclass }}</td>
    <td>{{ meteorite.fall }}</td>
  </tr>
</template>

<script lang="ts" setup>
import { computed, Ref } from 'vue';
import { useMeteoriteStore } from '@/stores/meteorite';

const props = defineProps({
  meteorite: {
    type: Object,
    required: true
  },
  showCheckbox: {
    type: Boolean,
    default: true
  }
});

const meteoriteStore = useMeteoriteStore();

const isChecked: Ref<boolean> = computed(() => {
  return meteoriteStore.favorites.includes(props.meteorite.id);
});
</script>
