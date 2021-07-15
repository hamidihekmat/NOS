import { Box, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { BounceLoader } from 'react-spinners';
// SWR
import useSWR from 'swr';
import { fetchEpisodes } from '../api/plex';
// Component
import { PaddedContainer } from './_PaddedContainer';
import { Episode } from './Episode';

export const Episodes = ({ id }: { id: string }) => {
  const { data, error } = useSWR(`/library/episodes/${id}`, () =>
    fetchEpisodes(id as string)
  );
  console.log(data);
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
    <PaddedContainer>
      <Text fontSize="2xl" fontWeight="bold" py="1.5rem">
        {`${data.size} Episodes`}
      </Text>
      <Wrap spacing="5">
        {data.Metadata.map((episode) => (
          <WrapItem key={episode.ratingKey}>
            <Episode episode={episode} index={episode.index!} />
          </WrapItem>
        ))}
      </Wrap>
    </PaddedContainer>
  );
};
