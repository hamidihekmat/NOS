import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BounceLoader } from 'react-spinners';
// SWR
import useSWR from 'swr';
import { fetchSeasons } from '../api/plex';
import { Container } from 'next/app';
import { SeasonsDeck } from './_SeasonsDeck';

export const Seasons = ({ id }: { id: string }) => {
  const { data, error } = useSWR(`/library/${id}/children`, () =>
    fetchSeasons(id as string)
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
    <Container display="flex">
      <SeasonsDeck mediaContainer={data} />
    </Container>
  );
};
