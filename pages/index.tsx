import { Box, Text } from '@chakra-ui/react';
import { Deck } from '../components/Deck';

const IndexPage = () => (
  <Box>
    <Text fontSize="6xl">This is a text</Text>
    <Text fontSize="5xl">This is a text</Text>
    <Text fontSize="4xl">This is a text</Text>
    <Text fontSize="3xl">This is a text</Text>
    <Text fontSize="2xl">This is a text</Text>
    <Text fontSize="xl">This is a text</Text>
    <Deck />
  </Box>
);

export default IndexPage;
