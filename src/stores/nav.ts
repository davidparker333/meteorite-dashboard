import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    activeView: '',
    theme: localStorage.getItem('theme') || 'light'
  }),
  getters: {
    getActiveView: (state) => state.activeView,
    getTheme: (state) => state.theme,
    isDark: (state) => state.theme === 'dark'
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
