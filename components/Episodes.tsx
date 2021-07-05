import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import { Heading } from './_Deck';
import { BounceLoader } from 'react-spinners';
import { LazyImage } from './_LazyImage';
import { css } from '@emotion/react';
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
    <PaddedContainer
      css={css`
        * {
          z-index: 10;
        }
      `}
    >
      <Heading fontSize="2xl" fontWeight="bold" py="1.5rem">
        {`${data.size} Episodes`}
      </Heading>
      <Wrap spacing="5">
        {data.Metadata.map((episode, _) => (
          <WrapItem key={episode.ratingKey}>
            <Box
              as="a"
              href={`/show/watch/${episode.ratingKey}`}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
            >
              <LazyImage
                loading="lazy"
                className="img-lazy"
                width="414px"
                height="232px"
                cursor="pointer"
                objectFit="cover"
                src={`${process.env.BACKEND_URL}${episode.thumb}`}
                overflow="hidden"
                alt={episode.title}
                border="1px solid var(--border-color)"
              />
              {/* <Text isTruncated fontSize="md" fontWeight="bold" pt="1rem">
                {episode.title}
              </Text>
              <Text
                isTruncated
                fontSize="sm"
                pb="1rem"
                color="hsla(0,0%,98%,.45)"
              >
                {`Episode ${index + 1}`}
              </Text> */}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </PaddedContainer>
  );
};
