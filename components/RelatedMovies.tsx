import { Box } from '@chakra-ui/react';
import { Deck } from './_Deck';
import { useRouter } from 'next/router';
import { PulseLoader } from 'react-spinners';
// SWR
import useSWR from 'swr';
import { fetchRelatedMovies } from '../api/plex';
import { Container } from './_Container';

export const RelatedMovies = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data, error } = useSWR(router.asPath, () =>
    fetchRelatedMovies(id as string)
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
      {data?.Hub?.map((hub) => (
        <Deck key={hub.hubKey} hub={hub} />
      ))}
      <></>
    </Container>
  );
};
