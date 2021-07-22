import { Player } from '../../../components/Player';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { BounceLoader } from 'react-spinners';
import { Box } from '@chakra-ui/react';
import { fetchPlaylist } from '../../../api/plex';
// Next head
import Head from 'next/head';

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
  return (
    <>
      <Head>
        <title>Watch - {data.title}</title>
      </Head>
      <Player playlist={data} />;
    </>
  );
}

export default Watch;
