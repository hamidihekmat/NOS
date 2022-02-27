import {
  Box,
  HStack,
  Text,
  VStack,
  Badge,
  IconButton,
  List,
  ListItem,
  useMediaQuery,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { BounceLoader } from 'react-spinners';
import { Container } from '../../components/_Container';

// Icons
import { Heart, Plus, Play } from 'phosphor-react';
// SWR
import useSWR from 'swr';
import { LazyImage } from '../../components/_LazyImage';
import { Button } from '@chakra-ui/button';
// Util
import { formatDuration } from '../../utils/duration';
import { ShowMore } from '../../components/_ShowMore';
// Next head
import Head from 'next/head';
import { MovieResponse } from 'moviedb-promise/dist/request-types';
import { tmdb } from '../../api/tmdb';
import { Casts } from '../../components/Casts';
import { RelatedTitles } from '../../components/RelatedTitles';

const Media = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  const { media } = router.query;
  const { data: movie, error } = useSWR<MovieResponse>(media, () =>
    tmdb.movieInfo({ id: +media })
  );
  if (!movie) {
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
    <>
      <Head>
        <title>Movie - {movie.title}</title>
      </Head>
      <Container pos="relative">
        <HStack
          width="100%"
          p={isMobile ? '1rem' : '2rem'}
          spacing={isMobile ? '5' : '10'}
          alignItems="flex-start"
          css={css`
            * {
              z-index: 10;
            }
            @media (max-width: 768px) {
              padding: 0;
            }
          `}
        >
          {/* OVERLAY */}
          <LazyImage
            width="160px"
            minW="300px"
            cursor="pointer"
            border="1px solid var(--border-color)"
            boxShadow="2xl"
            borderRadius="xl"
            src={`${process.env.TMDB_IMAGES_ORIGINAL}${movie.poster_path}`}
            css={css`
              @media (max-width: 1080px) {
                height: 382.25px;
                width: 250px;
                min-width: 250px;
                max-height: 375px;
                min-height: 375px;
              }
              @media (max-width: 768px) {
                display: none;
              }
            `}
          />
          <VStack alignItems="flex-start">
            <Text fontSize="3xl" fontWeight="bold">
              {movie.title}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {new Date(Date.parse(movie.release_date!)).getFullYear()}
            </Text>

            <HStack spacing={5} color="hsla(0,0%,98%,.45)">
              <Text fontWeight="bold" fontSize="md">
                {formatDuration(movie.runtime!)}
              </Text>
              <HStack ml="1rem">
                <Badge fontSize="sm" bg="#072541" borderRadius="sm">
                  TMDB
                </Badge>
                <Text
                  fontSize="md"
                  color="var(--font-color)"
                  fontWeight="black"
                >
                  {movie.vote_average}
                </Text>
              </HStack>
            </HStack>

            <HStack py="2rem" spacing="3">
              <Button
                as="a"
                // href={`/${media.type}/watch/${media.ratingKey}`}
                background="var(--button-1)"
                leftIcon={<Play color="#ffffff" size={30} />}
                _hover={{ opacity: '85%' }}
                fontWeight="bold"
              >
                PLAY
              </Button>
              <IconButton
                aria-label="Like"
                _hover={{ opacity: '85%' }}
                background="var(--border-color)"
                icon={<Heart size={32} />}
              />
              <IconButton
                aria-label="Add To Watch List"
                _hover={{ opacity: '85%' }}
                background="var(--border-color)"
                icon={<Plus size={32} />}
              />
            </HStack>
            <Box minW="350px" maxW="850px">
              <ShowMore text={movie.overview ?? ''} />
            </Box>
            <List minW="370px" pt="2rem" spacing={3}>
              {movie.production_companies && (
                <ListItem display="flex" fontWeight="bold">
                  <Text color="hsla(0,0%,98%,.45)" flex={1} whiteSpace="nowrap">
                    PRODUCTION
                  </Text>
                  <Box px="1rem" />
                  <Box flex={2}>
                    {movie.production_companies.map((production, index) => (
                      <Text as="span" key={production.id}>
                        {index !== movie.production_companies!.length - 1
                          ? `${production.name}, `
                          : production.name}
                      </Text>
                    ))}
                  </Box>
                </ListItem>
              )}
              <ListItem display="flex" fontWeight="bold">
                <Text color="hsla(0,0%,98%,.45)" flex="1" whiteSpace="nowrap">
                  BUDGET
                </Text>
                <Box px="1rem" />
                <Box flex={2}>
                  <Text as="span">
                    {movie.budget
                      ? new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(movie.budget)
                      : 'NA'}
                  </Text>
                </Box>
              </ListItem>
              <ListItem display="flex" fontWeight="bold">
                <Text color="hsla(0,0%,98%,.45)" flex="1" whiteSpace="nowrap">
                  LANGUAGE
                </Text>
                <Box px="1rem" />
                <Box flex={2}>
                  <Text as="span">
                    {movie.original_language?.toUpperCase()}
                  </Text>
                </Box>
              </ListItem>
              {movie.genres && (
                <ListItem display="flex" fontWeight="bold">
                  <Text color="hsla(0,0%,98%,.45)" flex="1" whiteSpace="nowrap">
                    GENRE
                  </Text>
                  <Box px="1rem" />
                  <Box flex={2}>
                    {movie.genres.map((genre, index) => (
                      <Text as="span" key={genre.id}>
                        {index != movie.genres!.length - 1
                          ? `${genre.name}, `
                          : genre.name}
                      </Text>
                    ))}
                  </Box>
                </ListItem>
              )}
            </List>
          </VStack>
        </HStack>

        <Casts id={movie.id?.toString()!} />
        <RelatedTitles title="Similar Movies" id={movie.id!.toString()} />

        <Box
          position="fixed"
          width="100%"
          css={css`
            pointer-events: none;
          `}
          height="90vh"
          top="0"
        >
          <Box position="relative" width="100%" height="100%">
            <LazyImage
              src={`${process.env.TMDB_IMAGES_ORIGINAL}${movie.backdrop_path}`}
              css={css`
                object-fit: cover;
                object-position: top;
                filter: brightness(0.45);
              `}
              pos="absolute"
              width="100%"
              height="100%"
            />
            <Box
              position="absolute"
              width="100%"
              height="100%"
              css={css`
                background: linear-gradient(
                  rgba(18, 24, 39, 0),
                  rgba(18, 24, 39, 1)
                );
              `}
            />
            <Box
              position="absolute"
              width="100%"
              height="40%"
              css={css`
                background: linear-gradient(
                  rgba(18, 24, 39, 1),
                  rgba(18, 24, 39, 0)
                );
              `}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Media;
