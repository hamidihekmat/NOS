import { MediaContainer } from '../interfaces/plex.interface';

export const fetchRecentMovies = async (): Promise<MediaContainer> => {
  const response = await fetch(`http://192.168.1.131:4000/library/recent`);
  return await response.json();
};
