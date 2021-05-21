import { MediaContainer } from '../interfaces/plex.interface';

export const fetchRecentMovies = async (): Promise<MediaContainer> => {
  const response = await fetch('http://localhost:3000/library/recent');
  const MediaContainer = await response.json();
  return MediaContainer;
};
