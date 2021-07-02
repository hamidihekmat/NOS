import { useCallback, useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Heading, StyledFlex, StyledSkeleton } from './_Deck';
import useSWR from 'swr';
// Util
import { MediaSkeletonSize } from '../utils/skeleton';
// Icons
import { CaretLeft, CaretRight, ArrowCircleRight } from 'phosphor-react';
// Hooks
import { useSlider } from '../hooks/useSlider';
import { MediaContainer } from '../interfaces/plex.interface';

// Dependencies
import { StyledIconButton } from './Casts';
import { Poster } from './_Poster';

export const DeckFetcher = ({
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
  const { next, previous, showNext, showPrev } = useSlider(refState, 1.5);
  const { data, error } = useSWR(queryKey, fetcher);
  return (
    <Box padding="0rem 1rem 0rem 1rem">
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
          <ArrowCircleRight size={24} />
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
        <Box position="relative">
          <StyledFlex overflowX="scroll" ref={ref}>
            {data?.Metadata.map((media) => (
              <Poster media={media} key={media.key} />
            ))}
          </StyledFlex>
        </Box>
      )}
    </Box>
  );
};
