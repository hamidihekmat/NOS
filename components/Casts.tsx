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
  const [refState, setRefState] = useState<HTMLDivElement>();
  const ref = useCallback((node) => {
    setRefState(node);
  }, []);
  const { next, previous, showNext, showPrev } = useSlider(refState, 2);
  return (
    <Box padding="0rem 1rem 0rem 1rem">
      <HStack justifyContent="space-between">
        <Heading fontSize="2xl" fontWeight="bold" py="1rem">
          Casts
        </Heading>

        <HStack>
          {showPrev && (
            <StyledIconButton
              onClick={previous}
              aria-label="previous"
              icon={<CaretLeft size={24} color="#ffffff" />}
            />
          )}
          {!showPrev && (
            <StyledIconButton
              cursor="default"
              aria-label="previous"
              icon={<CaretLeft size={24} color="#4b5561" />}
            />
          )}
          {showNext && (
            <StyledIconButton
              onClick={next}
              aria-label="previous"
              icon={<CaretRight size={24} color="#ffffff" />}
            />
          )}
          {!showNext && (
            <StyledIconButton
              cursor="default"
              aria-label="previous"
              icon={<CaretRight size={24} color="#4b5561" />}
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
              minW="150px"
              maxW="150px"
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
                fontSize="md"
                pt="1rem"
              >
                {cast.tag}
              </Text>
              <Text
                textAlign="center"
                color="#4b5561"
                isTruncated
                fontWeight="bold"
                fontSize="sm"
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
  min-width: 150px;
  min-height: 150px;
  height: 150px;
  max-width: 150px;
  max-height: 150px;
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    min-width: 140px;
    min-height: 140px;
    max-width: 140px;
    max-height: 140px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  background: none;
  :hover {
    background: none;
  }
`;
