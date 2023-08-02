import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

let store = (set) => ({
  user: null,
  sessionid: null,
  configuration: null,
  system: null,
  customization: [],
  setUser: (user) => {
    set(() => ({
      user
    }));
  },
  setSession: (sessionid) => {
    set(() => ({
      sessionid
    }));
  },
  setConfiguration: (config) => {
    set(() => ({
      configuration: config
    }));
  },
  setSystem: (config) => {
    set(() => ({
      system: config
    }));
  },
  setCustomization: (config) => {
    set(() => ({
      customization: config
    }));
  }
});

store = persist(store, { name: 'store' });
store = devtools(store);

export const useStore = create(store);
