import { useState } from 'react';
import { Box, Text, Fade } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { LazyImage } from './_LazyImage';
// interface
import { Metadata } from '../interfaces/plex.interface';
// Icons
import { Play } from 'phosphor-react';

export const Episode = ({
  episode,
  index,
}: {
  episode: Metadata;
  index: string;
}) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Box
      as="a"
      href={`/show/watch/${episode.ratingKey}`}
      overflow="hidden"
      maxW="414px"
      minW="414px"
      onMouseOver={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <Box position="relative" width="414px" height="234px">
        <LazyImage
          loading="lazy"
          className="img-lazy"
          width="414px"
          cursor="pointer"
          objectFit="cover"
          maxWidth="414px"
          boxShadow="2xl"
          border="1px solid var(--border-color)"
          src={`${process.env.BACKEND_URL}${episode.thumb}`}
          overflow="hidden"
          alt={episode.title}
        />
        <Fade in={isShowing}>
          <Box
            width="100%"
            pos="absolute"
            top="0"
            height="100%"
            css={css`
              -webkit-text-stroke: 1px black;
              background: rgba(59, 130, 246, 0.2);
              -webkit-font-smoothing: antialiased;
            `}
          />

          <Play
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translateX(-65%)',
            }}
            size={48}
          />
        </Fade>
      </Box>

      <Text isTruncated fontSize="md" fontWeight="bold" p="1rem 0rem 0rem 1rem">
        {episode.title}
      </Text>
      <Text
        isTruncated
        fontSize="sm"
        p="0rem 0rem 1rem 1rem"
        color="hsla(0,0%,98%,.45)"
      >
        {`Episode ${index + 1}`}
      </Text>
    </Box>
  );
};
