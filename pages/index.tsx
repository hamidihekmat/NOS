import { DeckFetcher } from '../components/DeckFetcher';
import { Container } from '../components/_Container';

import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchPopularTV,
  fetchTopRated,
} from '../api/tmdb';

const IndexPage = () => (
  <Container>
    <DeckFetcher
      queryKey="now-playing"
      title="Now Playing"
      type="movie"
      fetcher={fetchNowPlayingMovies}
    />
    <DeckFetcher
      queryKey="popular-movies"
      title="Popular Movies"
      type="movie"
      fetcher={fetchPopularMovies}
    />
    <DeckFetcher
      queryKey="top-rated"
      title="Top Rated Movies"
      type="movie"
      fetcher={fetchTopRated}
    />
    <DeckFetcher
      queryKey="popular-shows"
      title="Trending Shows"
      type="tv"
      fetcher={fetchPopularTV}
    />
  </Container>
);

// Added overflow

export default IndexPage;
