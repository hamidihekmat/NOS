import { useState } from 'react';
import { Box, Text, VStack, Fade, HStack, Badge } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { LazyImage } from './_LazyImage';
// interfaces

import { TvSeasonResponse } from 'moviedb-promise/dist/request-types';

export const PosterSeasons = ({ season }: { season: TvSeasonResponse }) => {
  const [isShowing, setIsShowing] = useState(false);
  console.log(season);
  return (
    <Box
      as="a"
      // href={`/show/season/${season.id}`}
      key={season.id}
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
        loading="eager"
        boxShadow="xl"
        className="img-lazy"
        width="176x"
        border="1px solid var(--border-color)"
        height="264px"
        src={`${process.env.TMDB_IMAGES}${season.poster_path}`}
        borderRadius="xl"
        alt={season.name}
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
        bg="var(--badge-2)"
      >
        Season
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
              {new Date(Date.parse(season.air_date!)).getFullYear()}
            </Text>
            {season.episodes && (
              <HStack>
                <Badge
                  fontSize="xs"
                  color="white"
                  bg="#072541"
                  borderRadius="sm"
                >
                  EPISODES
                </Badge>
                <Text color="white" fontSize="sm" fontWeight="black">
                  {season.episodes.length}
                </Text>
              </HStack>
            )}
          </HStack>

          <Text color="white" fontWeight="black" fontSize="lg">
            {season.name && season.name.length > 18
              ? `${season.name.substr(0, 18)}...`
              : season.name}
          </Text>
          <Text fontSize="xs" fontWeight="black">
            {season.overview && season.overview.length > 50
              ? `${season.overview.substr(0, 50)}...`
              : season.overview}
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
