import { useCallback, useState, useEffect } from 'react';
import { Box, Text, Flex, Skeleton, HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
// Components
import { StyledIconButton } from './Casts';
import { Poster } from './_Poster';
import { PaddedContainer } from './_PaddedContainer';
// Carousel
import useEmblaCarousel from 'embla-carousel-react';
import { MovieResult } from 'moviedb-promise/dist/request-types';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

export const Deck = ({
  media,
  title,
}: {
  media: MovieResult[];
  title: string;
}) => {
  const wheelGestures = WheelGesturesPlugin();

  const [emblaRef, embla] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      dragFree: true,
      inViewThreshold: 3,
      slidesToScroll: 5,
    },
    [wheelGestures]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

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
            {title}
          </Heading>
        </HStack>

        <HStack spacing="0">
          <StyledIconButton
            onClick={scrollPrev}
            aria-label="previous"
            disabled={!prevBtnEnabled}
            icon={<CaretLeft size={24} color="#ffffff" />}
          />
          <StyledIconButton
            onClick={scrollNext}
            aria-label="next"
            disabled={!nextBtnEnabled}
            icon={<CaretRight size={24} color="#ffffff" />}
          />
        </HStack>
      </HStack>
      <Box position="relative" className="embla" ref={emblaRef}>
        <StyledFlex>
          {media.map((movie) => (
            <Poster key={movie.id} media={movie} />
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
