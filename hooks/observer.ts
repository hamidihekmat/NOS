import { MovieResult } from 'moviedb-promise/dist/request-types';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRated,
} from '../api/tmdb';

type SlugType =
  | 'now-playing'
  | 'top-rated'
  | 'trending-movies'
  | 'popular-movies'
  | 'popular-shows';

export function useObserver(slug: SlugType) {
  console.log(slug);
  const [ref, setRef] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(0);
  const [movieResult, setMovieResult] = useState<MovieResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { data, error } = useSWR(`movie/${slug}${page}`, () =>
    slug === 'now-playing'
      ? fetchNowPlayingMovies(page)
      : slug === 'popular-movies'
      ? fetchPopularMovies(page)
      : slug === 'top-rated'
      ? fetchTopRated(page)
      : fetchNowPlayingMovies(page)
  );

  useEffect(() => {
    if (data) {
      setLoading(true);
      setMovieResult((prev) => [...prev, ...data.results!]);
      setPageSize(() => data.total_pages!);
      setLoading(false);
    }
  }, [data]);

  const nextPage = () => {
    if (page < pageSize) {
      setPage((page) => page + 1);
    }
  };
  useEffect(() => {
    if (!ref) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nextPage();
        }
      },
      {
        threshold: 1,
      }
    );
    observer.observe(ref);
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  return { setRef, movieResult, error, loading };
}
