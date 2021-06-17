import { Hub } from '../interfaces/plex.interface';

type SearchData = {
  Hub: Hub;
  size: number;
};

export function formatSearch(data: SearchData) {
  console.log(data);
}
