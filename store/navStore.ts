import create from 'zustand';

type NavState = {
  nav: boolean;
  toggle: () => void;
};

export const navStore = create<NavState>((set) => ({
  nav: false,
  toggle: () => set((state) => ({ nav: !state.nav })),
}));
