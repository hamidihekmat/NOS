import { Box, VStack, HStack, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { DeckButton, Heading, StyledFlex } from './Deck';
import { BounceLoader } from 'react-spinners';
import { useCallback, useState } from 'react';
import { useSlider } from '../hooks/useSlider';
// SWR
import useSWR from 'swr';
import { fetchRelatedMovies } from '../api/plex';

// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
import { LazyImage } from './_LazyImage';

export const RelatedMovies = ({ id }: { id: string }) => {
  const router = useRouter();
  const [refState, setRefState] = useState<HTMLDivElement>();
  const ref = useCallback((node) => {
    setRefState(node);
  }, []);
  const { next, previous, showNext, showPrev } = useSlider(refState, 2);
  const { data, error } = useSWR(router.asPath, () =>
    fetchRelatedMovies(id as string)
  );
  if (!data) {
    return (
      <Box pos="fixed" top="50%" right="50%" transform="translate(-50%)">
        <BounceLoader color="var(--bg-secondary)" size="80px" />
      </Box>
    );
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <VStack alignItems="flex-start" overflow="hidden">
      {data.Hub.map((hub) => (
        <Box key={hub.hubKey} padding="0rem 3rem 0rem 3rem">
          <HStack>
            <Heading fontSize="2xl" fontWeight="bold" py="1.5rem">
              {hub.title}
            </Heading>
          </HStack>

          <Box position="relative">
            {showPrev && (
              <DeckButton cover="left" onClick={previous}>
                <CaretLeft size={38} color="#ffffff" />
              </DeckButton>
            )}
            <StyledFlex width="90vw" overflowY="scroll" ref={ref}>
              {hub.Metadata.map((media) => (
                <Box
                  as="a"
                  href={`/movie/${media.ratingKey}`}
                  key={media.key}
                  minW="240px"
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
                    {media.title.length > 20
                      ? `${media.title.slice(0, 15)}...`
                      : media.title}
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
        </Box>
      ))}
    </VStack>
  );
};
