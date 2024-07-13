<template>
  <div class="hc">
    <highcharts :options="options" :contructor-type="chartConstructor" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

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
      type: props.chartType
    },
    title: {
      text: props.title
    },
    xAxis: {
      categories: props.categories
    },
    yAxis: {
      title: {
        text: props.yAxisTitle
      }
    },
    series: [{ data: props.series }]
  };
});
</script>
