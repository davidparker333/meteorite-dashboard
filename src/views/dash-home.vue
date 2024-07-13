<template>
  <div class="dashboard mt-12 flex flex-wrap">
    <Card :title="$t('summary')" class="w-72 h-80">
      <div class="card-content-wrapper flex">
        <div class="flex flex-wrap">
          <div class="flex flex-col w-full pb-8">
            <div class="text-2xl">{{ $t('totalMeteorites') }}</div>
            <div class="text-4xl">{{ meteoriteStore.data.length }}</div>
          </div>
          <div class="flex flex-col w-full">
            <div class="text-2xl">{{ $t('totalMass') }}</div>
            <div class="text-4xl">{{ meteoriteStore.totalMass }} {{ $t('pounds') }}</div>
          </div>
        </div>
      </div>
    </Card>
    <Card class="flex-grow h-80">
      <div class="meteorite-chart">
        <BasicChart
          chart-type="bar"
          :series="chartData"
          :y-axis-title="$t('numOfMeteorites')"
          :categories="chartCategories"
        />
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, Ref } from 'vue';
import { useNavStore } from '@/stores/nav';
import { useMeteoriteStore } from '@/stores/meteorite';
import Card from '@/components/card.vue';
import BasicChart from '@/components/basic-chart.vue';
import type Meteorite from '@/types/meteorite';

interface ChartData {
  name: string;
  y: number;
}

const navStore = useNavStore();
const meteoriteStore = useMeteoriteStore();

const chartData: Ref<ChartData[]> = computed(() => {
  /**
   * Count meteorites by decade
   * @returns {Array} - Array of objects with decade and count for use in Highcharts
   */
  const decadeCounts = meteoriteStore.data.reduce((acc: Object, meteorite: Meteorite) => {
    const year = new Date(meteorite.year).getFullYear();
    // Only grab meteorites from the modern-ish era
    if (year >= 1900) {
      const decade = Math.floor(year / 10) * 10;
      // Init the decade if not present, otherwise increment
      acc[decade] = (acc[decade] || 0) + 1;
    }
    return acc;
  }, {});

  // Format for Highcharts
  return Object.keys(decadeCounts)
    .map((decade) => ({
      name: `${decade}s`,
      y: decadeCounts[decade]
    }))
    .sort((a, b) => parseInt(a.name) - parseInt(b.name)); // Sort by decade
});

const chartCategories = computed(() => {
  return chartData.value.map((decade) => decade.name);
});

onMounted(() => {
  navStore.setActiveView('dashboard');
});
</script>
