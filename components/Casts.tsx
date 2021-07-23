import { Role } from '../interfaces/plex.interface';
import { useCallback, useState, useEffect } from 'react';
import { Box, HStack, IconButton, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Heading, StyledFlex } from './_Deck';
// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
import { LazyImage } from './_LazyImage';
// Components
import { PaddedContainer } from './_PaddedContainer';
// Carousel
import { useEmblaCarousel } from 'embla-carousel/react';

interface Castsprop {
  casts: Role[];
}

export const Casts = (prop: Castsprop) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    draggable: true,
    containScroll: 'trimSnaps',
  });
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
    <PaddedContainer mt="1">
      <HStack justifyContent="space-between">
        <Heading fontSize="2xl" fontWeight="bold" py="1rem">
          Casts
        </Heading>

        <HStack>
          <StyledIconButton
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="previous"
            icon={<CaretLeft size={24} color="#ffffff" />}
          />

          <StyledIconButton
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="next"
            icon={<CaretRight size={24} color="#ffffff" />}
          />
        </HStack>
      </HStack>

      <Box position="relative" className="embla" ref={emblaRef}>
        <StyledFlex>
          {prop.casts.map((cast) => (
            <Box
              // href={`/movies/${media.ratingKey}`}
              key={cast.id}
              minW="177px"
              maxW="185px"
              marginRight="1vw"
              cursor="pointer"
              overflow="hidden"
              boxShadow="2xl"
              borderRadius="2xl"
              css={css`
                height: 264px;
                background: linear-gradient(
                  var(--bg-primary),
                  var(--bg-canvas)
                );
                border: 1px solid var(--border-color);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                @media (max-width: 768px) {
                  height: 218px;
                  min-width: 145px;
                  img {
                    transform: scale(0.8);
                  }
                }
              `}
            >
              {/* 195 x 293 */}

              <StyledLazyImage
                loading="lazy"
                className="img-lazy"
                objectFit="cover"
                style={{ borderRadius: '50%' }}
                src={`${
                  cast.thumb ? cast.thumb : 'https://via.placeholder.com/150'
                }`}
                overflow="hidden"
                alt={cast.tag}
              />

              <Text
                fontWeight="bold"
                textAlign="center"
                fontSize="md"
                pt="1rem"
                isTruncated
              >
                {cast.tag.length > 12
                  ? `${cast.tag.substr(0, 12)}...`
                  : cast.tag}
              </Text>
              <Text
                color="#4b5561"
                textAlign="center"
                fontWeight="bold"
                fontSize="sm"
                isTruncated
              >
                {cast.role.length > 12
                  ? `${cast.role.substr(0, 12)}...`
                  : cast.role}
              </Text>
            </Box>
          ))}
        </StyledFlex>
      </Box>
    </PaddedContainer>
  );
};

const StyledLazyImage = styled(LazyImage)`
  min-width: 150px;
  min-height: 150px;
  height: 150px;
  max-width: 150px;
  max-height: 150px;
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    min-width: 140px;
    min-height: 140px;
    max-width: 140px;
    max-height: 140px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  background: none;
  :hover {
    background: none;
  }
`;
