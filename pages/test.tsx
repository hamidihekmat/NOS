import { Box } from '@chakra-ui/react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { Container } from 'next/app';
import styled from '@emotion/styled';

const TestPage = () => {
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true });

  return (
    <Container>
      <Box
        bg="red"
        h="350px"
        className="embla"
        overflow="hidden"
        ref={emblaRef}
      >
        <Box display="flex" className="embla__container" w="100vw">
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
          <StyledBox pos="relative" className="embla__slide">
            Slide 1
          </StyledBox>
        </Box>
      </Box>
    </Container>
  );
};

const StyledBox = styled(Box)`
  min-width: 300px;
  min-height: 300px;
  position: relative;
  background: pink;
  margin-right: 20px;
`;

export default TestPage;
