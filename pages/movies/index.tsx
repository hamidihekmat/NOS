import { Box, Wrap, WrapItem, Heading, HStack } from '@chakra-ui/react';
import { PulseLoader } from 'react-spinners';
import { MemoPoster } from '../../components/_Poster';
import { Container } from '../../components/_Container';
import { PaddedContainer } from '../../components/_PaddedContainer';
import { SlugType, useObserver } from '../../hooks/observer';

import { useRouter } from 'next/router';

const selections = [
  'now-playing',
  'top-rated',
  'trending-movies',
  'popular-movies',
];

const MoviePage = () => {
  const router = useRouter();

  const filter = router.query['filter'] as string;

  if (!selections.includes(filter)) {
    typeof window !== 'undefined' && router.push('/');
  }

  const { setRef, movieResult, error, loading } = useObserver(
    filter as SlugType
  );

  if (loading) {
    return (
      <Box
        zIndex="99"
        width="100%"
        display="flex"
        m="3rem"
        alignItems="center"
        justifyContent="center"
      >
        <PulseLoader color="var(--bg-secondary)" size="20px" />
      </Box>
    );
  }

  if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <Container position={'relative'}>
      <PaddedContainer>
        <HStack
          alignItems="center"
          justifyContent="flex-start"
          pt="1.5rem"
          pb="1rem"
          cursor="pointer"
          _hover={{ opacity: 0.8, transition: 'all 400ms' }}
        >
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            textTransform={'capitalize'}
          >
            {filter && filter.split('-').join(' ')}
          </Heading>
        </HStack>

        <Wrap spacing="5">
          {movieResult.map((media, index) =>
            index === movieResult.length! - 1 ? (
              <WrapItem key={media.id} ref={setRef}>
                <MemoPoster media={media} />
              </WrapItem>
            ) : (
              <WrapItem key={media.id}>
                <MemoPoster media={media} />
              </WrapItem>
            )
          )}
        </Wrap>
      </PaddedContainer>
    </Container>
  );
};

export default MoviePage;
