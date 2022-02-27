import { Box, HStack, Text, Spacer, Badge } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { LazyImage } from './_LazyImage';
import { MovieResult } from 'moviedb-promise/dist/request-types';

export const SearchItemMovie = ({ media }: { media: MovieResult }) => {
  return (
    <Box
      href={`/movie/${media.id}`}
      cursor="pointer"
      borderRadius="xl"
      padding=".5rem 1rem"
      css={css`
        :hover {
          background: var(--bg-canvas-opacity);
          backdrop-filter: blur(35px);
          -webkit-backdrop-filter: blur(35px);
          transition: all ease 300ms;
        }
      `}
    >
      <HStack alignItems="flex-start" as="a" href={`/movie/${media.id}`}>
        <LazyImage
          width="28px"
          minW="42px"
          cursor="pointer"
          display="block"
          src={`${process.env.TMDB_IMAGES}${media.poster_path}`}
        />
        <Box isTruncated display="flex" flexDir="column">
          <Text isTruncated fontWeight="black">
            {media.title}
          </Text>
          <Box display="flex">
            <Text fontWeight="bold" fontSize="sm">
              {media.original_language?.toUpperCase()}
            </Text>
            {media.vote_average && (
              <HStack ml="1rem">
                <Badge fontSize="xs" bg="#072541" borderRadius="sm">
                  TMDB
                </Badge>
                <Text color="white" fontSize="sm" fontWeight="black">
                  {media.vote_average === 0 ? 'NA' : media.vote_average}
                </Text>
              </HStack>
            )}
          </Box>
        </Box>
        <Spacer />
        <Text fontSize="sm" fontWeight="black">
          {new Date(Date.parse(media.release_date!)).getFullYear()}
        </Text>
      </HStack>
    </Box>
  );
};
