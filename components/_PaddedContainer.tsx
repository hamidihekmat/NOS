import { BoxProps, Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

export const PaddedContainer = (props: BoxProps) => {
  return (
    <Box
      padding="0rem 1rem 0rem 2rem"
      css={css`
        @media (max-width: 768px) {
          padding: 0rem 1rem 0rem 1rem;
        }
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};
