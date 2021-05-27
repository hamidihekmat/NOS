import { useCallback, useState } from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import {
  DeckButton,
  Heading,
  StyledFlex,
  StyledSkeleton,
  SubHeading,
} from './_Deck';
import { css } from '@emotion/react';
import useSWR from 'swr';
import { LazyImage } from './_LazyImage';
// Util
import { MediaSkeletonSize } from '../utils/skeleton';
// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
// Hooks
import { useSlider } from '../hooks/useSlider';
import { MediaContainer } from '../interfaces/plex.interface';

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
  const { next, previous, showNext, showPrev } = useSlider(refState, 2);
  const { data, error } = useSWR(queryKey, fetcher);
  return (
    <Box padding="0rem 3rem 0rem 3rem">
      <HStack>
        <Heading fontSize="2xl" fontWeight="bold" py="1.5rem">
          {title}
        </Heading>
        <SubHeading
          fontSize="sm"
          fontWeight="bold"
          color="var(--bg-secondary)"
          cursor="pointer"
          _hover={{ opacity: 0.8, transition: 'all 400ms' }}
        >
          Explore All
        </SubHeading>
      </HStack>

      {!data && (
        <StyledFlex overflowX="scroll">
          {MediaSkeletonSize.map((_, index) => (
            <StyledSkeleton
              key={index}
              minW="240px"
              marginRight="1vw"
              height="360px"
              colorScheme="twitter"
            />
          ))}
        </StyledFlex>
      )}
      {error && <Box>Error</Box>}

      {data && (
        <Box position="relative">
          {showPrev && (
            <DeckButton cover="left" onClick={previous}>
              <CaretLeft size={38} color="#ffffff" />
            </DeckButton>
          )}
          <StyledFlex overflowX="scroll" ref={ref}>
            {data?.Metadata.map((media) => (
              <Box
                as="a"
                href={`/movies/${media.ratingKey}`}
                key={media.key}
                minW="240px"
                maxW="240px"
                marginRight="1vw"
                height="400px"
                cursor="pointer"
                overflow="hidden"
                css={css`
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
                  className="img-lazy"
                  width="240px"
                  height="360px"
                  objectFit="cover"
                  src={`${process.env.BACKEND_URL}${media.thumb}`}
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
              <CaretRight size={38} color="#ffffff" />
            </DeckButton>
          )}
        </Box>
      )}
    </Box>
  );
};
