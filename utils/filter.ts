export const FilterOptions: FilterOption[] = [
  { id: 0, name: 'Genre', value: 'genre' },
  { id: 1, name: 'Year', value: 'year' },
  { id: 2, name: 'Decade', value: 'decade' },
  { id: 3, name: 'Content Rating', value: 'contentRating' },
  { id: 8, name: 'Country', value: 'country' },
];

export type FilterOption = {
  id: number;
  name: string;
  value: string;
};
