import { Box, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { BounceLoader } from 'react-spinners';
import { LazyImage } from './_LazyImage';
// SWR
import useSWR from 'swr';
import { fetchEpisodes } from '../api/plex';
import { PaddedContainer } from './_PaddedContainer';

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
        {data.Metadata.map((episode, index) => (
          <WrapItem key={episode.ratingKey}>
            <Box
              as="a"
              href={`/show/watch/${episode.ratingKey}`}
              overflow="hidden"
              maxW="414px"
            >
              <LazyImage
                loading="lazy"
                className="img-lazy"
                width="414px"
                cursor="pointer"
                objectFit="cover"
                maxWidth="414px"
                src={`${process.env.BACKEND_URL}${episode.thumb}`}
                overflow="hidden"
                alt={episode.title}
              />
              <Text
                isTruncated
                fontSize="md"
                fontWeight="bold"
                p="1rem 0rem 0rem 1rem"
              >
                {episode.title}
              </Text>
              <Text
                isTruncated
                fontSize="sm"
                p="0rem 0rem 1rem 1rem"
                color="hsla(0,0%,98%,.45)"
              >
                {`Episode ${index + 1}`}
              </Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </PaddedContainer>
  );
};
