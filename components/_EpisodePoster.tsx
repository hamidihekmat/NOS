import { useState } from 'react';
import { Box, Text, VStack, Fade, HStack, Badge } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { LazyImage } from './_LazyImage';
// interfaces
import { Metadata } from '../interfaces/plex.interface';

export const EpisodePoster = ({ media }: { media: Metadata }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Box
      as="a"
      href={`/show/watch/${media.ratingKey}`}
      key={media.key}
      minW="176px"
      pos="relative"
      marginRight="1vw"
      cursor="pointer"
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
        src={`${process.env.BACKEND_URL}${media.grandparentThumb}`}
        borderRadius="xl"
        alt={media.title}
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
        bg="#0b9361"
      >
        {media.type.toUpperCase()} {media.index}
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
              {media.originallyAvailableAt &&
                media.originallyAvailableAt.split('-')[0]}
            </Text>
            {media.audienceRating && (
              <HStack>
                <Badge fontSize="xs" bg="#E1B615" borderRadius="sm">
                  IMDB
                </Badge>
                <Text color="white" fontSize="sm" fontWeight="black">
                  {media.audienceRating}
                </Text>
              </HStack>
            )}
          </HStack>

          <Text color="white" fontWeight="black" fontSize="lg">
            {media.title.length > 18
              ? `${media.title.substr(0, 18)}...`
              : media.title}
          </Text>
          <Text fontSize="xs" fontWeight="black">
            {media.summary.length > 50
              ? `${media.summary.substr(0, 50)}...`
              : media.summary}
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
