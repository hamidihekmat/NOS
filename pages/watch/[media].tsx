import { Playlist } from '../../interfaces/player.interface';
import { Player } from '../../components/Player';

const playlist: Playlist = {
  title: 'Friends: The Reunion',
  description: 'Original title: Friends Reunion Special',
  sources: [
    {
      file: 'https://fast.noss.workers.dev/1C0tDndXxMdDxyz6b5trYe0rm4BWI2sss',
      type: 'video/mp4',
      label: '1080p',
      default: true,
    },
    {
      file: 'https://fast.noss.workers.dev/1C0tDndXxMdDxyz6b5trYe0rm4BWI2sss',
      type: 'video/mp4',
      label: '720p',
    },
  ],

  image:
    'https://m.media-amazon.com/images/M/MV5BYjIxZjA1OTEtMDliNi00ZWE0LTkyZjgtMzlhMjVjMzFhYzEwXkEyXkFqcGdeQXVyNDU3OTQ0Mzg@._V1_.jpg',
  tracks: [
    {
      file: 'https://thirsty-keller-bed1cc.netlify.app/api/subtitle?imdb=tt11337862',
      label: 'English',
      kind: 'captions',
    },
  ],
};

function Watch() {
  return <Player playlist={playlist} />;
}

export default Watch;
