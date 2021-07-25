import { Box, Wrap, WrapItem, Text, HStack, Select } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { BounceLoader } from 'react-spinners';
// SWR
import useSWR from 'swr';
import { fetchEpisodes } from '../api/plex';
// Component
import { PaddedContainer } from './_PaddedContainer';
import { Episode } from './Episode';
// router
import { useRouter } from 'next/router';

export const Episodes = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data, error } = useSWR(`/library/episodes/${id}`, () =>
    fetchEpisodes(id as string)
  );

  const handleSelectChange = (event) => {
    const { value } = event.target;
    router.push(`/show/watch/${value}`);
  };

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
      <HStack>
        <Text fontSize="2xl" fontWeight="bold" py="1.5rem">
          {`${data.size} Episodes`}
        </Text>
        <Box width="1rem" />
        <Select
          placeholder="Select Episode"
          width="10rem"
          onChange={handleSelectChange}
          css={css`
            option {
              background: rgba(51, 51, 51, 0.8);
            }
          `}
        >
          {data.Metadata.map((episode) => (
            <option value={episode.ratingKey}>Episode {episode.index!}</option>
          ))}
        </Select>
      </HStack>

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
