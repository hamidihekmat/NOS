import { Box } from '@chakra-ui/react';
import { SeasonsDeck } from './_SeasonsDeck';
import { useRouter } from 'next/router';
import { PulseLoader } from 'react-spinners';
// SWR
import useSWR from 'swr';
import { fetchSeasonsInfo } from '../api/tmdb';
import { SimpleSeason } from 'moviedb-promise/dist/request-types';

export const Seasons = ({
  tvId,
  seasons,
}: {
  tvId: string;
  seasons: SimpleSeason[];
}) => {
  const router = useRouter();
  const { data, error } = useSWR(`${router.asPath}/seasons`, () =>
    fetchSeasonsInfo({ tvId: tvId, seasons })
  );
  if (!data) {
    return (
      <Box
        zIndex="99"
        width="100%"
        display="flex"
        m="3rem"
        alignItems="center"
        justifyContent="center"
      >
        <PulseLoader color="var(--bg-secondary)" size="20px" />
      </Box>
    );
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  return <SeasonsDeck seasons={data!} />;
};
