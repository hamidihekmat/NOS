import { useCallback, useState } from 'react';
import { Box, Text, Flex, Skeleton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { LazyImage } from './_LazyImage';
import { useRouter } from 'next/router';

// Icons
import { CaretLeft, CaretRight } from 'phosphor-react';
// Hooks
import { useSlider } from '../hooks/useSlider';
import { Hub } from '../interfaces/plex.interface';

export const Deck = ({ hub }: { hub: Hub }) => {
  const router = useRouter();
  const [refState, setRefState] = useState<HTMLDivElement>();
  const ref = useCallback((node) => {
    setRefState(node);
  }, []);
  const { next, previous, showNext, showPrev } = useSlider(refState, 2);
  return (
    <Box padding="0rem 3rem 0rem 3rem">
      <Heading fontSize="2xl" fontWeight="bold" py="1.5rem">
        {hub.title}
      </Heading>

      <Box position="relative">
        {showPrev && (
          <DeckButton cover="left" onClick={previous}>
            <CaretLeft size={38} color="#ffffff" />
          </DeckButton>
        )}
        <StyledFlex overflowX="scroll" ref={ref}>
          {hub.Metadata.map((media) => (
            <Box
              as="a"
              href={`/${router.asPath.split('/')[1]}/${media.ratingKey}`}
              key={media.key}
              minW="240px"
              maxW="240px"
              marginRight="1vw"
              height="400px"
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

              <LazyImage
                loading="lazy"
                className="img-lazy"
                width="240px"
                height="360px"
                objectFit="cover"
                src={`${process.env.BACKEND_URL}${media.thumb}`}
                overflow="hidden"
                alt={media.title}
              />

              <Text isTruncated fontSize="md" pt="1rem">
                {media.title}
              </Text>
            </Box>
          ))}
        </StyledFlex>
        {showNext && (
          <DeckButton cover="right" onClick={next}>
            <CaretRight size={38} color="#ffffff" />
          </DeckButton>
        )}
      </Box>
    </Box>
  );
};

export const DeckButton = styled(Box)<{ cover: 'right' | 'left' }>`
  position: absolute;
  width: 2.5vw;
  height: 100%;
  z-index: 1;
  ${({ cover }) =>
    cover === 'right' &&
    css`
      right: 0;
      background: -webkit-linear-gradient(
        right,
        var(--bg-canvas) 20%,
        rgba(27, 27, 27, 0)
      ) !important;
    `}
  cursor: pointer;
  top: 0;
  transition: all 200ms ease-in-out;
  background: -webkit-linear-gradient(
    left,
    var(--bg-canvas) 20%,
    rgba(27, 27, 27, 0)
  );

  :hover {
    svg {
      transform: scale(1);
    }
  }

  svg {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    opacity: 1;
    transform: scale(0.8);
    transition: all 200ms ease-in;
  }
  @media (max-width: 768px) {
    width: 8vw;
  }
`;

export const StyledFlex = styled(Flex)`
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
  @media (max-width: 768px) {
    img {
      width: 145px !important;
      height: 218px !important;
    }
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  @media (max-width: 768px) {
    min-width: 145px;
    height: 218px;
  }
`;

export const Heading = styled(Text)`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SubHeading = styled(Text)`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
