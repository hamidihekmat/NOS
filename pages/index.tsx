import { Box } from '@chakra-ui/react';
import { Deck } from '../components/Deck';

const IndexPage = () => (
  <Box
    width="calc(100vw - 3.75rem)"
    height="calc(100vh - 3.75rem)"
    overflowY="scroll"
  >
    <Deck title="Recently Added" />
    <Deck title="New Releases" />
    <Deck title="Top Rated" />
  </Box>
);

// Added overflow

export default IndexPage;
