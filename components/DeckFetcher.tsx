import { useCallback, useState, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Heading, StyledFlex, StyledSkeleton } from './_Deck';
import useSWR from 'swr';
// Util
import { MediaSkeletonSize } from '../utils/skeleton';
// Icons
import { CaretLeft, CaretRight, ArrowCircleRight } from 'phosphor-react';
// Components
import { StyledIconButton } from './Casts';
import { Poster } from './_Poster';
import { PosterTV } from './_PosterTV';
import { PaddedContainer } from './_PaddedContainer';
// Carousel
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import Link from 'next/link';

import {
  DiscoverMovieResponse,
  DiscoverTvResponse,
} from 'moviedb-promise/dist/request-types';

type DeckFetcherProp = {
  title: string;
  queryKey: string;
  type: 'movie' | 'tv';
  fetcher: () => Promise<DiscoverMovieResponse | DiscoverTvResponse>;
};

export const DeckFetcher = ({
  title,
  queryKey,
  type,
  fetcher,
}: DeckFetcherProp) => {
  const { data, error } = useSWR(queryKey, fetcher);

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
        <Link
          // href={type === 'movie' ? `/movies?filter=${queryKey}` : '#'}
          href={{
            pathname: type === 'movie' ? '/movies' : '#',
            query: {
              filter: queryKey,
            },
          }}
          prefetch
        >
          <HStack
            alignItems="center"
            justifyContent="center"
            pt="1.5rem"
            pb="1rem"
            cursor="pointer"
            _hover={{ opacity: 0.8, transition: 'all 400ms' }}
          >
            <Heading
              fontSize="2xl"
              fontWeight="bold"
              href={`/movies/${queryKey}`}
            >
              {title}
            </Heading>
            <ArrowCircleRight size={24} />
          </HStack>
        </Link>

        <HStack spacing="0">
          <StyledIconButton
            onClick={scrollPrev}
            aria-label="previous"
            disabled={!prevBtnEnabled}
            icon={<CaretLeft size={24} color="#ffffff" />}
          />

          <StyledIconButton
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="previous"
            icon={<CaretRight size={24} color="#ffffff" />}
          />
        </HStack>
      </HStack>

      {!data && (
        <StyledFlex overflowX="scroll">
          {MediaSkeletonSize.map((_, index) => (
            <StyledSkeleton
              key={index}
              minW="176px"
              borderRadius="2xl"
              border="1px solid var(--border-color)"
              marginRight="1vw"
              height="264px"
              colorScheme="twitter"
            />
          ))}
        </StyledFlex>
      )}
      {error && <Box>Error</Box>}

      {data && (
        <Box position="relative" className="embla" ref={emblaRef}>
          <StyledFlex>
            {data.results?.map((media) =>
              type === 'movie' ? (
                <Poster media={media} key={media.id} />
              ) : (
                <PosterTV media={media} key={media.id} />
              )
            )}
          </StyledFlex>
        </Box>
      )}
    </PaddedContainer>
  );
};
