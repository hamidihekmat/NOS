import { Role } from '../interfaces/plex.interface';
import { useCallback, useState } from 'react';
import { Box, HStack, IconButton, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Heading, StyledFlex } from './_Deck';
import { useSlider } from '../hooks/useSlider';
// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
import { LazyImage } from './_LazyImage';

interface Castsprop {
  casts: Role[];
}

export const Casts = (prop: Castsprop) => {
  console.log(prop.casts);
  const [refState, setRefState] = useState<HTMLDivElement>();
  const ref = useCallback((node) => {
    setRefState(node);
  }, []);
  const { next, previous, showNext, showPrev } = useSlider(refState, 2);
  return (
    <Box padding="0rem 3rem 0rem 3rem">
      <HStack justifyContent="space-between">
        <Heading fontSize="2xl" fontWeight="bold" py="1.5rem">
          Casts
        </Heading>

        <HStack>
          {showPrev && (
            <StyledIconButton
              onClick={previous}
              aria-label="previous"
              icon={<CaretLeft size={38} color="#ffffff" />}
            />
          )}
          {showNext && (
            <StyledIconButton
              onClick={next}
              aria-label="previous"
              icon={<CaretRight size={38} color="#ffffff" />}
            />
          )}
        </HStack>
      </HStack>

      <Box position="relative">
        <StyledFlex overflowX="scroll" ref={ref}>
          {prop.casts.map((cast) => (
            <Box
              as="a"
              // href={`/movies/${media.ratingKey}`}
              key={cast.id}
              minW="220px"
              maxW="220px"
              marginRight="1vw"
              cursor="pointer"
              overflow="hidden"
              css={css`
                @media (max-width: 768px) {
                  min-width: 145px;
                  height: 255px;
                  img {
                    min-width: 145px;
                    height: 218px;
                  }
                }
              `}
            >
              {/* 195 x 293 */}

              <StyledLazyImage
                loading="lazy"
                className="img-lazy"
                objectFit="cover"
                style={{ borderRadius: '50%' }}
                src={`${
                  cast.thumb ? cast.thumb : 'https://via.placeholder.com/150'
                }`}
                overflow="hidden"
                alt={cast.tag}
              />

              <Text
                textAlign="center"
                fontWeight="bold"
                isTruncated
                fontSize="2xl"
                pt="1rem"
              >
                {cast.tag}
              </Text>
              <Text
                textAlign="center"
                color="#4b5561"
                isTruncated
                fontSize="md"
              >
                {cast.role}
              </Text>
            </Box>
          ))}
        </StyledFlex>
      </Box>
    </Box>
  );
};

const StyledLazyImage = styled(LazyImage)`
  min-width: 220px;
  min-height: 220px;
  height: 220px;
  max-width: 220px;
  max-height: 220px;
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    min-width: 140px;
    min-height: 140px;
    max-width: 140px;
    max-height: 140px;
  }
`;

const StyledIconButton = styled(IconButton)`
  background: none;
  :hover {
    background: none;
  }
`;
