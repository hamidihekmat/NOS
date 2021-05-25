import { Box } from '@chakra-ui/react';
import { Deck } from './_Deck';
import { useRouter } from 'next/router';
import { BounceLoader } from 'react-spinners';
// SWR
import useSWR from 'swr';
import { fetchRelatedMovies } from '../api/plex';
import { Container } from 'next/app';

export const RelatedMovies = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data, error } = useSWR(router.asPath, () =>
    fetchRelatedMovies(id as string)
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
      {data.Hub.map((hub) => (
        <Deck key={hub.hubKey} hub={hub} />
      ))}
    </Container>
  );
};
