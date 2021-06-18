import { Playlist } from '../interfaces/player.interface';
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
  return await response.json();
};

export const fetchPlaylist = async (id: string): Promise<Playlist> => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/library/watch/${id}`
  );
  return await response.json();
};

export const searchMedia = async (query: string): Promise<MediaContainer> => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/library/search?` +
      new URLSearchParams({
        query,
      })
  );
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Attach extra info to the error object.
    throw error;
  }

  return await response.json();
};

export const fetchSeasons = async (id: string) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/library/metadata/${id}/children`
  );
  return await response.json();
};
