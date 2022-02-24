import { Box } from '@chakra-ui/react';
import { PulseLoader } from 'react-spinners';
// SWR
import useSWR from 'swr';
import { fetchSeasons } from '../api/plex';
import { Container } from './_Container';
import { SeasonsDeck } from './_SeasonsDeck';

export const Seasons = ({ id }: { id: string }) => {
  const { data, error } = useSWR(`/library/${id}/children`, () =>
    fetchSeasons(id as string)
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

  return (
    <Container display="flex">
      <SeasonsDeck mediaContainer={data} />
    </Container>
  );
};
