import { Text, HStack } from '@chakra-ui/react';
import { Container } from '../components/_Container';
// Components
import { FilterMovies } from '../components/FilterMovies';
import { Heading } from '../components/_Deck';
import { SortMovies } from '../components/SortMovies';
const MoviesPage = () => {
  return (
    <Container padding="0rem 3rem 0rem 3rem">
      <Heading fontSize="2xl" fontWeight="bold" py="1.5rem">
        Movies
      </Heading>
      <HStack>
        <FilterMovies />
        <SortMovies />
      </HStack>
      <Text fontSize="6xl">This is a text</Text>
      <Text fontSize="5xl">This is a text</Text>
      <Text fontSize="4xl">This is a text</Text>
      <Text fontSize="3xl">This is a text</Text>
      <Text fontSize="2xl">This is a text</Text>
      <Text fontSize="xl">This is a text</Text>
      <Text fontSize="6xl">This is a text</Text>
      <Text fontSize="5xl">This is a text</Text>
      <Text fontSize="4xl">This is a text</Text>
      <Text fontSize="3xl">This is a text</Text>
      <Text fontSize="2xl">This is a text</Text>
    </Container>
  );
};

export default MoviesPage;
