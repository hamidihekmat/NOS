import { Deck } from '../components/Deck';
import { Container } from '../components/_Container';
import {
  fetchRecentMovies,
  fetchReleasedMovies,
  fetchTopRatedMovies,
} from '../api/plex';

const IndexPage = () => (
  <Container>
    <Deck
      queryKey="recent"
      title="Recently Added"
      fetcher={fetchRecentMovies}
    />
    <Deck
      queryKey="newReleases"
      title="New Releases"
      fetcher={fetchReleasedMovies}
    />
    <Deck queryKey="topRated" title="Top Rated" fetcher={fetchTopRatedMovies} />
  </Container>
);

// Added overflow

export default IndexPage;
