<template>
  <div class="hc">
    <highcharts :options="options" :contructor-type="chartConstructor" />
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { useNavStore } from '@/stores/nav';

const navStore = useNavStore();

const props = defineProps({
  series: {
    type: Array,
    required: true
  },
  chartType: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  chartConstructor: {
    type: String,
    default: 'chart'
  },
  categories: {
    type: Array,
    required: false
  },
  yAxisTitle: {
    type: String,
    required: false
  }
});

const options = computed(() => {
  return {
    chart: {
      type: props.chartType,
      backgroundColor: 'transparent',
      height: 250
    },
    title: {
      text: props.title
    },
    xAxis: {
      categories: props.categories,
      labels: {
        style: {
          color: navStore.isDark ? '#fff' : '#000'
        }
      }
    },
    yAxis: {
      title: {
        text: props.yAxisTitle,
        style: {
          color: navStore.isDark ? '#fff' : '#000'
        }
      },
      labels: {
        style: {
          color: navStore.isDark ? '#fff' : '#000'
        }
      }
    },
    series: [{ data: props.series, showInLegend: false }]
  };
});

watch(
  () => navStore.getTheme,
  () => {
    // Add or remove dark mode class on the highcharts instance
    // https://www.highcharts.com/docs/chart-design-and-style/style-by-css
    const chart = document.querySelector('.highcharts-container');
    if (chart) {
      if (navStore.isDark) {
        chart.classList.add('highcharts-dark');
      } else {
        chart.classList.remove('highcharts-dark');
      }
    }
  }
);
</script>

<style scoped>
@import 'https://code.highcharts.com/dashboards/css/dashboards.css';
</style>
