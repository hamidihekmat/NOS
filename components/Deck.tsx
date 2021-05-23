import { useCallback, useState } from 'react';
import { Box, Text, Flex, Skeleton, Img, HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
// Util
import { MediaSkeletonSize } from '../utils/skeleton';
// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
// Hooks
import { useSlider } from '../hooks/useSlider';
import { MediaContainer } from '../interfaces/plex.interface';

export const Deck = ({
  title,
  queryKey,
  fetcher,
}: {
  title: string;
  queryKey: string;
  fetcher: () => Promise<MediaContainer>;
}) => {
  const [refState, setRefState] = useState<HTMLDivElement>();
  const ref = useCallback((node) => {
    setRefState(node);
  }, []);
  const { next, previous, showNext, showPrev } = useSlider(refState, 2);
  const { data, isLoading, isError, isSuccess } = useQuery(queryKey, fetcher);
  return (
    <Box padding="0rem 2rem 0rem 2rem">
      <HStack>
        <Text fontSize="2xl" fontWeight="bold" py="1.5rem">
          {title}
        </Text>
        <Text
          fontSize="sm"
          fontWeigh="bold"
          color="var(--bg-secondary)"
          cursor="pointer"
          _hover={{ opacity: 0.8, transition: 'all 400ms' }}
        >
          Explore All
        </Text>
      </HStack>

      {isLoading && (
        <StyledFlex overflowX="scroll">
          {MediaSkeletonSize.map((_, index) => (
            <StyledSkeleton
              key={index}
              minW="25vh"
              marginRight="1vw"
              height="293px"
              colorScheme="twitter"
            />
          ))}
        </StyledFlex>
      )}
      {isError && <Box>Error</Box>}

      {isSuccess && (
        <Box position="relative">
          {showPrev && (
            <DeckButton cover="left" onClick={previous}>
              <CaretLeft size={38} color="#ffffff" />
            </DeckButton>
          )}
          <StyledFlex overflowX="scroll" ref={ref}>
            {data?.Metadata.map((media) => (
              <Box
                key={media.key}
                minW="25vh"
                id="poster-container"
                paddingRight="1vw"
                cursor="pointer"
              >
                {/* 195 x 293 */}

                <MotionImage
                  width="250px"
                  loading="lazy"
                  src={`http://192.168.1.131:4000${media.thumb}`}
                  overflow="hidden"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  alt={media.title}
                />

                <Text isTruncated fontSize="md" pt="1rem">
                  {media.title}
                </Text>
              </Box>
            ))}
          </StyledFlex>
          {showNext && (
            <DeckButton cover="right" onClick={next}>
              <CaretRight size={38} color="#ffffff" />
            </DeckButton>
          )}
        </Box>
      )}
    </Box>
  );
};

const DeckButton = styled(Box)<{ cover: 'right' | 'left' }>`
  position: absolute;
  width: 2.5vw;
  height: 100%;
  z-index: 1;
  ${({ cover }) =>
    cover === 'right' &&
    css`
      right: 0;
      background: -webkit-linear-gradient(
        right,
        var(--bg-canvas) 20%,
        rgba(27, 27, 27, 0)
      ) !important;
    `}
  cursor: pointer;
  top: 0;
  transition: all 200ms ease-in-out;
  background: -webkit-linear-gradient(
    left,
    var(--bg-canvas) 20%,
    rgba(27, 27, 27, 0)
  );
  :hover {
    svg {
      opacity: 1;
      transform: scale(1);
    }
  }
  svg {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    opacity: 0;
    transform: scale(0.8);
    transition: all 200ms ease-in;
  }
  @media (max-width: 768px) {
    width: 5vw;
  }
`;

const StyledFlex = styled(Flex)`
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  @media (max-width: 768px) {
    #poster-container {
      min-width: 30vw;
    }
  }
`;

const StyledSkeleton = styled(Skeleton)`
  @media (max-width: 768px) {
    min-width: 145px;
    height: 218px;
  }
`;

const MotionImage = styled(motion(Img))`
  transition: filter 400ms ease-in-out;
  :hover {
    filter: brightness(0.5);
  }
`;
