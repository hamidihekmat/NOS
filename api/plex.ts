import { MediaContainer } from '../interfaces/plex.interface';

export const fetchRecentMovies = async (): Promise<MediaContainer> => {
  const response = await fetch(`${process.env.BACKEND_URL}/library/recent`);
  return await response.json();
};

export const fetchReleasedMovies = async (): Promise<MediaContainer> => {
  const response = await fetch(`${process.env.BACKEND_URL}/library/released`);
  return await response.json();
};

export const fetchTopRatedMovies = async (): Promise<MediaContainer> => {
  const response = await fetch(`${process.env.BACKEND_URL}/library/rating`);
  return await response.json();
};

export const fetchMediaById = async (id: string): Promise<MediaContainer> => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/library/metadata/${id}`
  );
  return await response.json();
};

export const fetchRelatedMovies = async (
  id: string
): Promise<MediaContainer> => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/library/related/${id}`
  );
  console.log(`${process.env.BACKEND_URL}/library/related/${id}`);
  return await response.json();
};
