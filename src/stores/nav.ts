import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    activeView: '',
    theme: localStorage.getItem('theme') || 'light'
  }),
  getters: {
    getActiveView: (state): string => state.activeView,
    getTheme: (state): string => state.theme,
    isDark: (state): boolean => state.theme === 'dark'
  },
  actions: {
    setActiveView(view: string) {
      this.activeView = view;
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
});
