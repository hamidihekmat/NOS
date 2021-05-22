import { useRef } from 'react';
import { Box, Text, Flex, Img } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import { fetchRecentMovies } from '../api/plex';
// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
// Hooks
import { useSlider } from '../hooks/useSlider';

export const Deck = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const { next, previous, showNext, showPrev } = useSlider(ref, 2);
  const { data, isLoading, isError, isSuccess } = useQuery(
    'recent',
    fetchRecentMovies
  );
  return (
    <Box padding="0rem 2rem 0rem 2rem">
      <Text fontSize="2xl" fontWeight="bold" py="1.5rem">
        {title}
      </Text>
      {isLoading && <Box>Loading</Box>}
      {isError && <Box>Error</Box>}

      {isSuccess && (
        <Box position="relative">
          {showPrev && (
            <DeckButton cover="left" onClick={previous}>
              <CaretLeft size={38} />
            </DeckButton>
          )}
          <Flex overflowX="scroll" ref={ref}>
            {data?.Metadata.map((media) => (
              <Box key={media.key} minW="25vh" paddingRight="1vw">
                <Img
                  width="250px"
                  src={`http://localhost:3000${media.thumb}`}
                  alt={media.title}
                />
                <Text isTruncated fontSize="md">
                  {media.title}
                </Text>
              </Box>
            ))}
          </Flex>
          {showNext && (
            <DeckButton cover="right" onClick={next}>
              <CaretRight size={38} />
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
  height: 92.5%;
  cursor: pointer;
  top: 0;
  transition: background 200ms ease-in-out;
  ${({ cover }) =>
    cover === 'right' &&
    css`
      right: 0;
    `}
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
