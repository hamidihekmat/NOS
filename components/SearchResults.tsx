import { Box, Badge, Text, HStack, Tooltip, Spacer } from '@chakra-ui/react';
import { LazyImage } from './_LazyImage';
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
            _hover={{ background: 'var(--bg-secondary)' }}
          >
            <Tooltip
              label={`${movie.title} ${movie.year}`}
              aria-label={movie.title}
            >
              <HStack
                alignItems="flex-start"
                as="a"
                href={`/movies/${movie.ratingKey}`}
              >
                <Badge>Movie</Badge>
                <LazyImage
                  width="28px"
                  minW="42px"
                  cursor="pointer"
                  display="block"
                  src={`${process.env.BACKEND_URL}${movie.thumb}`}
                />
                <Text isTruncated fontWeight="bold">
                  {movie.title}
                </Text>

                <Spacer />
                <Text
                  color="hsla(0,0%,98%,.45)"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  {movie.year}
                </Text>
              </HStack>
            </Tooltip>
          </Box>
        ))
      ) : (
        <Box padding=".5rem 1rem">No search found...</Box>
      )}
    </>
  );
};
