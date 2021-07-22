import { BoxProps, Box } from '@chakra-ui/react';
import { Nav } from '../components/Nav';

export const PageWrapper = (props: BoxProps) => {
  return (
    <Box display="flex">
      <Nav />
      {props.children}
    </Box>
  );
};
