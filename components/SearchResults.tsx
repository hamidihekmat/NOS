import { Box, Text, HStack } from '@chakra-ui/react';
import { MovieResult, TvResult } from 'moviedb-promise/dist/request-types';

// Components
import { SearchItemMovie } from './SearchItemMovie';
import { SearchItemTV } from './SearchItemTV';

export const SearchResults = ({
  data,
}: {
  data: { movies: MovieResult[]; tv: TvResult[] };
}) => {
  const { movies, tv } = data;

  console.log(movies, tv);

  return (
    <>
      {movies.length && (
        <HStack p=".5rem 1rem" justifyContent="space-between">
          <Text fontWeight="bold">Movies</Text>
          <Text fontWeight="bold" fontSize="md">
            {movies.length}
          </Text>
        </HStack>
      )}
      {movies.length &&
        movies.map((movie) => <SearchItemMovie key={movie.id} media={movie} />)}
      {tv.length && (
        <HStack p=".5rem 1rem" justifyContent="space-between">
          <Text fontWeight="bold">Shows</Text>
          <Text fontWeight="bold" fontSize="md">
            {tv.length}
          </Text>
        </HStack>
      )}
      {tv.length && tv.map((show) => <SearchItemTV media={show} />)}
      {movies.length === 0 && tv.length === 0 && (
        <Box padding=".5rem 1rem">No search found...</Box>
      )}
    </>
  );
};
