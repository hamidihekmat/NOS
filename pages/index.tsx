import { DeckFetcher } from '../components/DeckFetcher';
import { Container } from '../components/_Container';
import {
  fetchRecentMovies,
  fetchRecentShows,
  fetchReleasedMovies,
  fetchTopRatedMovies,
} from '../api/plex';

const IndexPage = () => (
  <Container>
    <DeckFetcher
      queryKey="newReleases"
      title="New Releases"
      fetcher={fetchReleasedMovies}
    />
    <DeckFetcher
      queryKey="recent"
      title="Recently Added in Movies"
      fetcher={fetchRecentMovies}
    />
    <DeckFetcher
      queryKey="recentShows"
      title="Recently Added in Shows"
      fetcher={fetchRecentShows}
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
