import { Text, Box } from '@chakra-ui/react';
import { Container } from '../components/_Container';
// Loader
import { BounceLoader } from 'react-spinners';
// SWR
import useSWR from 'swr';
import { advanceSearch } from '../api/plex';
// Router
import { useRouter } from 'next/router';
// Interfaces
import { Hub } from '../interfaces/plex.interface';
// Components
import { Deck } from '../components/_Deck';
import { PaddedContainer } from '../components/_PaddedContainer';

const SeachPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const { data, error } = useSWR(query, () => advanceSearch(query as string));
  if (!data) {
    return (
      <Box
        pos="fixed"
        zIndex="99"
        top="50%"
        right="50%"
        transform="translate(-50%)"
      >
        <BounceLoader color="var(--bg-secondary)" size="80px" />
      </Box>
    );
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  const movies: Hub | undefined = data.Hub.find(
    (metadata) => metadata.title === 'Movies'
  );
  const shows: Hub | undefined = data.Hub.find(
    (metadata) => metadata.title === 'Shows'
  );
  return (
    <Container>
      <Text as={PaddedContainer} pt="2rem" fontSize="3xl" fontWeight="bold">
        Search Results
      </Text>
      {movies?.Metadata && <Deck hub={movies} key="advanceSearchMovies" />}
      {shows?.Metadata && <Deck hub={shows} key="advanceSearchShows" />}

      {movies?.size === 0 && shows?.size === 0 && (
        <Box padding=".5rem 1rem">No search found...</Box>
      )}
    </Container>
  );
};

export default SeachPage;
