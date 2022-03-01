import { Player } from '../../../components/Player';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { BounceLoader } from 'react-spinners';
import { Box } from '@chakra-ui/react';
// Next head
import Head from 'next/head';
import { Video } from 'moviedb-promise/dist/request-types';
import { fetchVideoMetadata } from '../../../api/tmdb';

function createPlaylist(video: Video[]) {
  const youtube = video.find((v) => v.type === 'Trailer');

  return youtube?.key;
}

function Watch() {
  const router = useRouter();
  const { media } = router.query;
  const { data, error } = useSWR(
    media,
    () => fetchVideoMetadata(media as string),
    {
      revalidateOnFocus: false,
      refreshInterval: 0,
    }
  );
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
  return (
    <>
      <Head>
        <title>Watch - {data.find((v) => v.type === 'Trailer')?.name!}</title>
      </Head>
      <Player videoId={createPlaylist(data)!} />;
    </>
  );
}

export default Watch;
