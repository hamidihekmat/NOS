import create from 'zustand';
import { persist } from 'zustand/middleware';

type Filter = {
  name: string;
  key: string;
};

type Options = {
  order: string;
  filter: Filter;
  sort: string;
};

type OptionsState = {
  options: Options;
  setOptions: (options: Options) => void;
};

export const optionsStore = create<OptionsState>(
  persist(
    (set, _) => ({
      options: {
        order: '',
        filter: { name: '', key: '' },
        sort: '',
      },
      setOptions: (options: Options) => set(() => ({ options })),
    }),
    {
      name: 'options-storage',
    }
  )
);
