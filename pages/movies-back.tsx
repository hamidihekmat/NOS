import { useEffect } from 'react';
import { HStack } from '@chakra-ui/react';
import { Container } from '../components/_Container';
// Next
// Components
import { FilterMovies } from '../components/FilterMovies';
import { Heading } from '../components/_Deck';
import { SortMovies } from '../components/SortMovies';
// store
import { optionsStore } from '../store/moviesOptions';

const MoviesPage = () => {
  const options = optionsStore((state) => state.options);
  useEffect(() => {
    console.log(options);
  }, [options]);
  return (
    <Container padding="0rem 3rem 0rem 3rem">
      <Heading fontSize="2xl" fontWeight="bold" py="1.5rem">
        Movies
      </Heading>
      <HStack>
        <FilterMovies />
        <SortMovies />
      </HStack>
    </Container>
  );
};

export default MoviesPage;
