import { Img, ImgProps, Box } from '@chakra-ui/react';
import { SyntheticEvent } from 'react';
import styled from '@emotion/styled';
// Component

export const LazyImage = (props: ImgProps) => {
  const onLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const image = e.target as HTMLImageElement;
    image.removeAttribute('data-lazy-src');
  };
  return (
    <StyledBox data->
      <Img as="img" data-lazy-src {...props} onLoad={onLoad} />
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  img {
    opacity: 1;
    transition: all 200ms ease-in-out;
  }

  img[data-lazy-src] {
    opacity: 0;
  }
`;
