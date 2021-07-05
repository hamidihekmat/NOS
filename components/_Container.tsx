import { Box, BoxProps } from '@chakra-ui/layout';
import { scrollStore } from '../store/scrollStore';
import { css } from '@emotion/react';

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
      css={css`
        min-height: -webkit-fill-available;
        @media (max-width: 768px) {
          width: 100vw;
        }
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};
