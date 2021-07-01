import create from 'zustand';

type scrollState = {
  scroll: boolean;
  setScroll: (arg: boolean) => void;
};

export const scrollStore = create<scrollState>((set) => ({
  scroll: false,
  setScroll: (arg) => set(() => ({ scroll: arg })),
}));
