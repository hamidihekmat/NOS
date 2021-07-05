import { useCallback, useState } from 'react';
import { Box, Text, Flex, Skeleton, HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
// Hooks
import { useSlider } from '../hooks/useSlider';
import { MediaContainer } from '../interfaces/plex.interface';
// Components
import { StyledIconButton } from './Casts';
import { Poster } from './_Poster';
import { PaddedContainer } from './_PaddedContainer';

export const SeasonsDeck = ({
  mediaContainer,
}: {
  mediaContainer: MediaContainer;
}) => {
  const [refState, setRefState] = useState<HTMLDivElement>();
  const ref = useCallback((node) => {
    setRefState(node);
  }, []);
  const { next, previous, showNext, showPrev } = useSlider(refState, 1.5);
  return (
    <PaddedContainer>
      <HStack justifyContent="space-between">
        <HStack
          alignItems="center"
          justifyContent="center"
          pt="1.5rem"
          pb="1rem"
          cursor="pointer"
          _hover={{ opacity: 0.8, transition: 'all 400ms' }}
        >
          <Heading fontSize="2xl" fontWeight="bold">
            Seasons
          </Heading>
        </HStack>

        <HStack spacing="0">
          {showPrev && (
            <StyledIconButton
              onClick={previous}
              aria-label="previous"
              icon={<CaretLeft size={24} color="#ffffff" />}
            />
          )}
          {!showPrev && (
            <StyledIconButton
              cursor="default"
              aria-label="previous"
              icon={<CaretLeft size={24} color="#4b5561" />}
            />
          )}
          {showNext && (
            <StyledIconButton
              onClick={next}
              aria-label="previous"
              icon={<CaretRight size={24} color="#ffffff" />}
            />
          )}
          {!showNext && (
            <StyledIconButton
              cursor="default"
              aria-label="previous"
              icon={<CaretRight size={24} color="#4b5561" />}
            />
          )}
        </HStack>
      </HStack>
      <Box position="relative">
        <StyledFlex overflowX="scroll" ref={ref}>
          {mediaContainer.Metadata.map((media) => (
            <Poster key={media.key} media={media} />
          ))}
        </StyledFlex>
      </Box>
    </PaddedContainer>
  );
};

export const DeckButton = styled(Box)<{ cover: 'right' | 'left' }>`
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
      transform: scale(1);
    }
  }

  svg {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    opacity: 1;
    transform: scale(0.8);
    transition: all 200ms ease-in;
  }
  @media (max-width: 768px) {
    width: 8vw;
  }
`;

export const StyledFlex = styled(Flex)`
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
  @media (max-width: 768px) {
    img {
      width: 145px !important;
      height: 218px !important;
    }
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  @media (max-width: 768px) {
    min-width: 145px;
    height: 218px;
  }
`;

export const Heading = styled(Text)`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SubHeading = styled(Text)`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
