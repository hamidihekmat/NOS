import { Box, Text, HStack, Spacer, Badge } from '@chakra-ui/react';
import { LazyImage } from './_LazyImage';
import { MediaContainer } from '../interfaces/plex.interface';
import { Hub } from '../interfaces/plex.interface';
import { formatDuration } from '../utils/duration';
import { scrollStore } from '../store/scrollStore';
import { css } from '@emotion/react';

export const SearchResults = ({ data }: { data: MediaContainer }) => {
  const movies: Hub | undefined = data.Hub.find(
    (metadata) => metadata.title === 'Movies'
  );
  const scroll = scrollStore((state) => state.scroll);

  return (
    <>
      {movies?.Metadata ? (
        movies.Metadata.map((movie) => (
          <Box
            href={`/movies/${movie.ratingKey}`}
            cursor="pointer"
            key={movie.key}
            borderRadius="xl"
            padding=".5rem 1rem"
            _hover={{ background: 'var(--bg-canvas)' }}
            css={css`
              background: ${scroll
                ? `rgba(51, 51, 51, 0.8)`
                : `var(--bg-primary)`};
              backdrop-filter: blur(35px);
              -webkit-font-smoothing: antialiased;
              border: 2px solid transparent;
            `}
          >
            <HStack
              alignItems="flex-start"
              as="a"
              href={`/movies/${movie.ratingKey}`}
            >
              {/* <Badge>Movie</Badge> */}
              <LazyImage
                width="28px"
                minW="42px"
                cursor="pointer"
                display="block"
                src={`${process.env.BACKEND_URL}${movie.thumb}`}
              />
              <Box isTruncated display="flex" flexDir="column">
                <Text isTruncated fontWeight="black">
                  {movie.title}
                </Text>
                <Box display="flex">
                  <Text fontWeight="bold" fontSize="sm">
                    {formatDuration(movie.duration)}
                  </Text>
                  <Badge
                    ml=".5rem"
                    style={{ transform: 'scale(0.8)' }}
                    variant="outline"
                    fontWeight="bold"
                    fontSize="sm"
                    color="var(--badge-1)"
                  >
                    {movie.contentRating ? movie.contentRating : 'NA'}
                  </Badge>
                </Box>
              </Box>

              <Spacer />
              <Text fontSize="sm" fontWeight="black">
                {movie.year}
              </Text>
            </HStack>
          </Box>
        ))
      ) : (
        <Box padding=".5rem 1rem">No search found...</Box>
      )}
    </>
  );
};
