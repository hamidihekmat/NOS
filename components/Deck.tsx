import { Box, Text, Flex, Img } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchRecentMovies } from '../api/plex';

export const Deck = ({ title }: { title: string }) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    'recent',
    fetchRecentMovies
  );
  return (
    <Box padding="0rem 2rem 0rem 2rem">
      <Text fontSize="2xl" fontWeight="bold" py="1.5rem">
        Recently Added
      </Text>
      {isLoading && <Box>Loading</Box>}
      {isError && <Box>Error</Box>}

      {isSuccess && (
        <Flex overflowX="scroll">
          {data?.Metadata.map((media) => (
            <Box minW="25vh" paddingRight="1rem">
              <Img
                width="250px"
                src={`http://localhost:3000${media.thumb}`}
                alt={media.title}
              />
              <Text isTruncated fontSize="md">
                {media.title}
              </Text>
            </Box>
          ))}
        </Flex>
      )}
    </Box>
  );
};
