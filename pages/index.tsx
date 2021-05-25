import { DeckFetcher } from '../components/DeckFetcher';
import { Container } from '../components/_Container';
import {
  fetchRecentMovies,
  fetchReleasedMovies,
  fetchTopRatedMovies,
} from '../api/plex';

const IndexPage = () => (
  <Container>
    <DeckFetcher
      queryKey="recent"
      title="Recently Added"
      fetcher={fetchRecentMovies}
    />
    <DeckFetcher
      queryKey="newReleases"
      title="New Releases"
      fetcher={fetchReleasedMovies}
    />
    <DeckFetcher
      queryKey="topRated"
      title="Top Rated"
      fetcher={fetchTopRatedMovies}
    />
  </Container>
);

// Added overflow

export default IndexPage;
