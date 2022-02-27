import { MovieDb } from 'moviedb-promise';
import {
  DiscoverMovieResponse,
  DiscoverTvResponse,
  SimpleSeason,
} from 'moviedb-promise/dist/request-types';
export const tmdb = new MovieDb(process.env.TMDB_API_KEY || '');

export async function fetchNowPlayingMovies(
  page: number = 1
): Promise<DiscoverMovieResponse> {
  return await tmdb.upcomingMovies({ page });
}

export async function fetchPopularMovies(
  page: number = 1
): Promise<DiscoverMovieResponse> {
  return await tmdb.moviePopular({ page });
}

export async function fetchPopularTV(): Promise<DiscoverTvResponse> {
  return await tmdb.tvPopular();
}

export async function fetchTopRated(page: number = 1) {
  return await tmdb.movieTopRated({ page });
}

export async function fetchCasts(id: string) {
  const people = await tmdb.movieCredits({ id });
  return people.cast;
}

export async function fetchRelatedMovies(id: string) {
  const movies = await tmdb.movieSimilar({ id });
  return movies.results;
}

export async function searchMedia(query: string) {
  const movies = await tmdb.searchMovie({ query });
  const tv = await tmdb.searchTv({ query });

  const result = {
    movies: movies.results?.slice(0, 3) ?? [],
    tv: tv.results?.slice(0, 3) ?? [],
  };

  return result;
}

export async function fetchRelatedShows(id: string) {
  const shows = await tmdb.tvSimilar({ id });
  return shows.results;
}

export async function fetchSeasonsInfo({
  tvId,
  seasons,
}: {
  tvId: string;
  seasons: SimpleSeason[];
}) {
  const combinedSeasons = await Promise.all(
    seasons.map(async (season) => {
      return await tmdb.seasonInfo({
        id: tvId,
        season_number: season.season_number!,
      });
    })
  );
  return combinedSeasons;
}
