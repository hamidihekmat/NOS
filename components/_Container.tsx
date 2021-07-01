import { Box, BoxProps } from '@chakra-ui/layout';
import { scrollStore } from '../store/scrollStore';

export const Container = (props: BoxProps) => {
  const setScroll = scrollStore((state) => state.setScroll);
  const handleScroll = (event) => {
    const { scrollTop } = event.target;
    if (scrollTop === 0) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };
  return (
    <Box
      width="calc(100vw - 3.75rem)"
      height="100vh"
      pt="3.75rem"
      overflowY="scroll"
      overflowX="hidden"
      onScroll={(event) => handleScroll(event)}
      {...props}
    >
      {props.children}
    </Box>
  );
};
