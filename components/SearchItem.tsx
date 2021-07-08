import { Box, HStack, Text, Spacer, Badge } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Metadata } from '../interfaces/plex.interface';
import { LazyImage } from './_LazyImage';
import { formatDuration } from '../utils/duration';

export const SearchItem = ({ media }: { media: Metadata }) => {
  return (
    <Box
      href={`/${media.type}/${media.ratingKey}`}
      cursor="pointer"
      key={media.key}
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
      <HStack
        alignItems="flex-start"
        as="a"
        href={`/${media.type}/${media.ratingKey}`}
      >
        {/* <Badge>Movie</Badge> */}
        <LazyImage
          width="28px"
          minW="42px"
          cursor="pointer"
          display="block"
          src={`${process.env.BACKEND_URL}${media.thumb}`}
        />
        <Box isTruncated display="flex" flexDir="column">
          <Text isTruncated fontWeight="black">
            {media.title}
          </Text>
          <Box display="flex">
            <Text fontWeight="bold" fontSize="sm">
              {formatDuration(media.duration)}
            </Text>
            <Badge
              ml=".5rem"
              style={{ transform: 'scale(0.8)' }}
              variant="outline"
              fontWeight="bold"
              fontSize="sm"
              color="var(--badge-1)"
            >
              {media.contentRating ? media.contentRating : 'NA'}
            </Badge>
          </Box>
        </Box>

        <Spacer />
        <Text fontSize="sm" fontWeight="black">
          {media.year}
        </Text>
      </HStack>
    </Box>
  );
};
