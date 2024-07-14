import { defineStore } from 'pinia';
import data from '@/static/data.json';
import type Meteorite from '@/types/meteorite';

export const useMeteoriteStore = defineStore('meteorite', {
  state: () => ({
    data,
    page: 1,
    perPage: 15,
    searchQuery: '',
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
  }),
  getters: {
    totalMass: (state): string => {
      return state.data
        .reduce((acc: number, curr: Meteorite) => {
          return acc + parseInt(curr.mass || '0', 10);
        }, 0)
        .toLocaleString();
    },
    totalPages(state): number {
      return Math.ceil(this.filteredResults.length / state.perPage);
    },
    filteredResults(state): Meteorite[] {
      return state.searchQuery
        ? state.data.filter(
            (meteorite: Meteorite) =>
              meteorite.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
              meteorite.id.toString().includes(state.searchQuery)
          )
        : state.data;
    },
    currentPage(state): Meteorite[] {
      return this.filteredResults?.length < state.perPage
        ? this.filteredResults
        : this.filteredResults?.slice((state.page - 1) * state.perPage, state.page * state.perPage);
    },
    noResults(): boolean {
      return this.currentPage.length === 0;
    },
    noFavorites(state): boolean {
      return state.favorites.length === 0;
    },
    filteredFavorites(state): Meteorite[] {
      return state.data.filter((meteorite: Meteorite) => state.favorites.includes(meteorite.id));
    }
  },
  actions: {
    nextPage() {
      this.page++;
    },
    previousPage() {
      this.page--;
    },
    addFavorite(id: number) {
      if (!this.favorites.includes(id)) {
        this.favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      }
    },
    removeFavorite(id: number) {
      this.favorites = this.favorites.filter((favorite: number) => favorite !== id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    toggleFavorite(id: number) {
      if (this.favorites.includes(id)) {
        this.removeFavorite(id);
      } else {
        this.addFavorite(id);
      }
    }
  }
});
