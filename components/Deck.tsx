import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchRecentMovies } from '../api/plex';

export const Deck = () => {
  const { data } = useQuery('recent', fetchRecentMovies);
  console.log(data);
  return <Box>Deck Component</Box>;
};
