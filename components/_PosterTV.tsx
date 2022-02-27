import { useState } from 'react';
import { Box, Text, VStack, Fade, HStack, Badge } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { LazyImage } from './_LazyImage';
// interfaces

import { TvResult } from 'moviedb-promise/dist/request-types';

export const PosterTV = ({ media }: { media: TvResult }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Box
      as="a"
      href={`/show/${media.id}`}
      key={media.id}
      pos="relative"
      minW="176px"
      marginRight="1vw"
      cursor="pointer"
      zIndex="0"
      overflow="hidden"
      onMouseOver={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
      css={css`
        :hover {
          img {
            filter: brightness(0.5);
          }
        }

        @media (max-width: 768px) {
          min-width: 145px;
          height: 255px;
          img {
            min-width: 145px;
            height: 218px;
          }
        }
      `}
    >
      {/* 195 x 293 */}

      <LazyImage
        loading="lazy"
        boxShadow="xl"
        className="img-lazy"
        width="176x"
        border="1px solid var(--border-color)"
        height="264px"
        src={`${process.env.TMDB_IMAGES}${media.poster_path}`}
        borderRadius="xl"
        alt={media.name}
      />

      <Box
        top="0"
        margin=".5rem"
        fontSize="xs"
        position="absolute"
        padding=".2rem .4rem"
        borderRadius="2xl"
        fontWeight="bold"
        zIndex="2"
        bg={'var(--badge-2)'}
      >
        TV Show
      </Box>
      {/* Details */}
      <Fade in={isShowing}>
        <VStack
          alignItems="flex-start"
          spacing="0"
          top="45%"
          transform="transateY(-50%)"
          padding="5px"
          pos="absolute"
          pointerEvents="none"
          zIndex="2"
          css={css`
            @media (max-width: 768px) {
              display: none;
            }
          `}
        >
          <HStack justifyContent="space-between" width="100%">
            <Text color="white" fontSize="md" fontWeight="black">
              {new Date(Date.parse(media.first_air_date!)).getFullYear()}
            </Text>
            {media.popularity && (
              <HStack>
                <Badge
                  fontSize="xs"
                  color="white"
                  bg="#072541"
                  borderRadius="sm"
                >
                  TMDB
                </Badge>
                <Text color="white" fontSize="sm" fontWeight="black">
                  {media.vote_average === 0 ? 'NA' : media.vote_average}
                </Text>
              </HStack>
            )}
          </HStack>

          <Text color="white" fontWeight="black" fontSize="lg">
            {media.name && media.name.length > 18
              ? `${media.name.substr(0, 18)}...`
              : media.name}
          </Text>
          <Text fontSize="xs" fontWeight="black">
            {media.overview && media.overview.length > 50
              ? `${media.overview.substr(0, 50)}...`
              : media.overview}
          </Text>
        </VStack>
      </Fade>
      <Fade in={isShowing}>
        <Box
          width="100%"
          pos="absolute"
          top="0"
          height="100%"
          borderRadius="2xl"
          css={css`
            -webkit-text-stroke: 1px black;
            background: rgba(59, 130, 246, 0.2);
            -webkit-font-smoothing: antialiased;
            @media (max-width: 768px) {
              min-width: 145px;
              height: 218px;
            }
          `}
        />
      </Fade>
    </Box>
  );
};
