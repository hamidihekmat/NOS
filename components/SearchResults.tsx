import { Box, Badge, Text, HStack, Tooltip, Spacer } from '@chakra-ui/react';
import { MediaContainer } from '../interfaces/plex.interface';
import { Hub } from '../interfaces/plex.interface';
export const SearchResults = ({ data }: { data: MediaContainer }) => {
  const movies: Hub | undefined = data.Hub.find(
    (metadata) => metadata.title === 'Movies'
  );

  return (
    <>
      {movies?.Metadata ? (
        movies.Metadata.map((movie) => (
          <Box
            href={`/movies/${movie.ratingKey}`}
            cursor="pointer"
            key={movie.key}
            padding=".5rem 1rem"
          >
            <HStack
              alignItems="center"
              as="a"
              href={`/movies/${movie.ratingKey}`}
            >
              <Badge>Movie</Badge>
              <Tooltip
                label={`${movie.title} ${movie.year}`}
                aria-label={movie.title}
              >
                <Text isTruncated fontWeight="bold">
                  {movie.title}
                </Text>
              </Tooltip>
              <Spacer />
              <Text color="hsla(0,0%,98%,.45)" fontSize="sm" fontWeight="bold">
                {movie.year}
              </Text>
            </HStack>
          </Box>
        ))
      ) : (
        <div>No search found...</div>
      )}
    </>
  );
};
