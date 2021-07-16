import { Text, VStack } from '@chakra-ui/react';
import { Container } from '../components/_Container';
import { Warning } from 'phosphor-react';

const ShowPage = () => {
  return (
    <Container pos="relative">
      <VStack pos="absolute" top="50%" left="50%" transform="translate(-50%)">
        <Warning size={68} />
        <Text fontSize="lg" fontWeight="black">
          Under Construction...
        </Text>
      </VStack>
    </Container>
  );
};

export default ShowPage;
