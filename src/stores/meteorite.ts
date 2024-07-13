import { defineStore } from 'pinia';
import data from '@/static/data.json';
import type { Meteorite } from '@/types';

export const useMeteoriteStore = defineStore('meteorite', {
  state: () => ({
    data
  }),
  getters: {
    getMeteoriteData: (state) => state.data,
    totalMass: (state): string => {
      return state.data
        .reduce((acc: number, curr: Meteorite) => {
          return acc + parseInt(curr.mass || 0, 10);
        }, 0)
        .toLocaleString();
    }
  }
});
