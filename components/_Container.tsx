import { Box, BoxProps } from '@chakra-ui/layout';

export const Container = (props: BoxProps) => {
  return (
    <Box
      width="calc(100vw - 3.75rem)"
      height="calc(100vh - 3.75rem)"
      overflowY="scroll"
      {...props}
    >
      {props.children}
    </Box>
  );
};
