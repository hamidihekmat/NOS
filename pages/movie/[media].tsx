import {
  Box,
  HStack,
  Text,
  VStack,
  Badge,
  IconButton,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { fetchMediaById } from '../../api/plex';
import { BounceLoader } from 'react-spinners';
import { Container } from '../../components/_Container';
// Icons
import { Heart, Play, Plus } from 'phosphor-react';
// SWR
import useSWR from 'swr';
import { LazyImage } from '../../components/_LazyImage';
import { Button } from '@chakra-ui/button';
// Util
import { formatDuration } from '../../utils/duration';

const Media = () => {
  const router = useRouter();
  const { media } = router.query;
  const { data, error } = useSWR(media, () => fetchMediaById(media as string));
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
    <Container>
      {data &&
        data.Metadata.map((media) => (
          <HStack
            key={media.key}
            width="100%"
            spacing="10"
            alignItems="flex-start"
            p="2rem"
          >
            <LazyImage
              width="370px"
              height="555px"
              minW="250px"
              cursor="pointer"
              src={`${process.env.BACKEND_URL}${media.thumb}`}
            />
            <VStack alignItems="flex-start">
              <Text fontSize="3xl" fontWeight="bold">
                {media.title}
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                {media.year}
              </Text>

              <HStack spacing={5} color="hsla(0,0%,98%,.45)">
                <Text fontWeight="bold" fontSize="md">
                  {formatDuration(media.duration)}
                </Text>
                <Badge fontWeight="bold" fontSize="sm">
                  {media.contentRating}
                </Badge>
                {/* Rating #1
                Rating #2 */}
              </HStack>
              <HStack py="2rem" spacing="3">
                <Button
                  background="var(--bg-secondary)"
                  leftIcon={<Play size={32} />}
                  fontWeight="bold"
                >
                  PLAY
                </Button>
                <IconButton
                  aria-label="Like"
                  background="var(--border-color)"
                  icon={<Heart size={32} />}
                />
                <IconButton
                  aria-label="Add To Watch List"
                  background="var(--border-color)"
                  icon={<Plus size={32} />}
                />
              </HStack>
              <Box maxW="50vw">
                <Text fontSize="xl" fontWeight="medium">
                  {media.summary}
                </Text>
              </Box>
              <List width="30vw" pt="2rem" spacing={3}>
                {media.Director && (
                  <ListItem display="flex" fontWeight="bold">
                    <Text
                      color="hsla(0,0%,98%,.45)"
                      flex={1}
                      whiteSpace="nowrap"
                    >
                      DIRECTED BY
                    </Text>
                    <Box flex={2}>
                      {media.Director.map((director, index) => (
                        <Text as="span" key={director.id}>
                          {index !== media.Director.length - 1
                            ? `${director.tag}, `
                            : director.tag}
                        </Text>
                      ))}
                    </Box>
                  </ListItem>
                )}

                {media.Writer && (
                  <ListItem display="flex" fontWeight="bold">
                    <Text
                      color="hsla(0,0%,98%,.45)"
                      flex="1"
                      whiteSpace="nowrap"
                    >
                      WRITTEN BY
                    </Text>
                    <Box flex={2}>
                      {media.Writer.map((writer, index) => (
                        <Text as="span" key={writer.id}>
                          {index !== media.Writer.length - 1
                            ? `${writer.tag}, `
                            : writer.tag}
                        </Text>
                      ))}
                    </Box>
                  </ListItem>
                )}

                {media.studio && (
                  <ListItem display="flex" fontWeight="bold">
                    <Text
                      color="hsla(0,0%,98%,.45)"
                      flex="1"
                      whiteSpace="nowrap"
                    >
                      STUDIO
                    </Text>
                    <Box flex={2}>
                      <Text as="span">{media.studio}</Text>
                    </Box>
                  </ListItem>
                )}
                {media.Genre && (
                  <ListItem display="flex" fontWeight="bold">
                    <Text
                      color="hsla(0,0%,98%,.45)"
                      flex="1"
                      whiteSpace="nowrap"
                    >
                      GENRE
                    </Text>
                    <Box flex={2}>
                      {media.Genre.map((genre, index) => (
                        <Text as="span" key={genre.id}>
                          {index !== media.Genre.length - 1
                            ? `${genre.tag}, `
                            : genre.tag}
                        </Text>
                      ))}
                    </Box>
                  </ListItem>
                )}
              </List>
            </VStack>
          </HStack>
        ))}
    </Container>
  );
};

export default Media;
