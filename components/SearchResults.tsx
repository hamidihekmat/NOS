import { Box, Text, HStack } from '@chakra-ui/react';
import { MediaContainer } from '../interfaces/plex.interface';
import { Hub } from '../interfaces/plex.interface';
// Components
import { SearchItem } from './SearchItem';

export const SearchResults = ({ data }: { data: MediaContainer }) => {
  console.log(data);
  const movies: Hub | undefined = data.Hub.find(
    (metadata) => metadata.title === 'Movies'
  );
  const shows: Hub | undefined = data.Hub.find(
    (metadata) => metadata.title === 'Shows'
  );

  return (
    <>
      {movies?.Metadata && (
        <HStack p=".5rem 1rem" justifyContent="space-between">
          <Text fontWeight="bold">Movies</Text>
          <Text fontWeight="bold" fontSize="md">
            {movies?.Metadata?.length}
          </Text>
        </HStack>
      )}
      {movies?.Metadata &&
        movies.Metadata.map((movie) => <SearchItem media={movie} />)}
      {shows?.Metadata && (
        <HStack p=".5rem 1rem" justifyContent="space-between">
          <Text fontWeight="bold">Shows</Text>
          <Text fontWeight="bold" fontSize="md">
            {shows?.Metadata.length}
          </Text>
        </HStack>
      )}
      {shows?.Metadata &&
        shows?.Metadata.map((show) => <SearchItem media={show} />)}
      {movies?.size === 0 && shows?.size === 0 && (
        <Box padding=".5rem 1rem">No search found...</Box>
      )}
    </>
  );
};
