import { Playlist } from '../../interfaces/player.interface';
import { Player } from '../../components/Player';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { BounceLoader } from 'react-spinners';
import { Box } from '@chakra-ui/react';
import { fetchPlaylist } from '../../api/plex';

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
  const router = useRouter();
  const { media } = router.query;
  const { data, error } = useSWR(media, () => fetchPlaylist(media as string), {
    revalidateOnFocus: false,
    refreshInterval: 0,
  });
  if (!data) {
    return (
      <Box pos="fixed" top="50%" right="50%" transform="translate(-50%)">
        <BounceLoader color="var(--bg-secondary)" size="80px" />
      </Box>
    );
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  return <Player playlist={data} />;
}

export default Watch;
