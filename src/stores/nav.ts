import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    activeView: ''
  }),
  getters: {
    getActiveView: (state) => state.activeView
  },
  actions: {
    setActiveView(view: string) {
      this.activeView = view;
    }
  }
});
