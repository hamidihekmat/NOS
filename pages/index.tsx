import { Box } from '@chakra-ui/react';
import { Deck } from '../components/Deck';
import { fetchRecentMovies } from '../api/plex';

const IndexPage = () => (
  <Box
    width="calc(100vw - 3.75rem)"
    height="calc(100vh - 3.75rem)"
    overflowY="scroll"
  >
    <Deck
      queryKey="recent"
      title="Recently Added"
      fetcher={fetchRecentMovies}
    />
    <Deck
      queryKey="newReleases"
      title="New Releases"
      fetcher={fetchRecentMovies}
    />
    <Deck queryKey="topRated" title="Top Rated" fetcher={fetchRecentMovies} />
  </Box>
);

// Added overflow

export default IndexPage;
