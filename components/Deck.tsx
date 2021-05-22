import { useCallback, useState } from 'react';
import { Box, Text, Flex, Img, Skeleton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
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
      <Text fontSize="2xl" fontWeight="bold" py="1.5rem">
        {title}
      </Text>
      {isLoading && (
        <StyledFlex overflowX="scroll">
          {MediaSkeletonSize.map((_, index) => (
            <Skeleton
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
              <CaretLeft size={38} color="var(--bg-secondary)" />
            </DeckButton>
          )}
          <StyledFlex overflowX="scroll" ref={ref}>
            {data?.Metadata.map((media) => (
              <Box
                key={media.key}
                minW="25vh"
                paddingRight="1vw"
                cursor="pointer"
              >
                {/* 195 x 293 */}
                <Img
                  width="250px"
                  src={`http://localhost:3000${media.thumb}`}
                  overflow="hidden"
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
              <CaretRight size={38} color="var(--bg-secondary)" />
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
  ${({ cover }) =>
    cover === 'right' &&
    css`
      right: 0;
    `}
  cursor: pointer;
  top: 0;
  transition: background 200ms ease-in-out;
  background: rgba(0, 0, 0, 0.6);
  :hover {
    background: rgba(0, 0, 0, 0.7);
    svg {
      opacity: 1;
      transform: scale(1);
    }
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transform: scale(0.8);
    transition: all 200ms ease-in;
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
`;
