// import { useJWPlayer } from '../hooks/usePlayer';
import ReactJWPlayer from 'react-jw-player';
import styled from '@emotion/styled';
import { Playlist } from '../interfaces/player.interface';
import { Container } from './_Container';
import { IconButton } from '@chakra-ui/button';
import { useState } from 'react';
import { useRouter } from 'next/router';
// Icons
import { ArrowLeft } from 'phosphor-react';
// import { useJWPlayer } from '../hooks/usePlayer';

export const Player = ({ playlist }: { playlist: Playlist }) => {
  const router = useRouter();
  // const [onReady] = useJWPlayer(playlist);
  const [playing, setPlaying] = useState(false);
  const onPlay = () => {
    setPlaying(true);
  };
  return (
    <Container position="relative" overflow="hidden">
      {playing && (
        <BackButton
          aria-label="back"
          position="absolute"
          onClick={() => router.back()}
          top="15%"
          zIndex={99}
          left="3%"
          icon={<ArrowLeft color="#f0f6fc" size={38} />}
        />
      )}

      <StyledJWPlayer
        playerId="player"
        onPlay={onPlay}
        // onReady={onReady}
        playerScript="https://content.jwplatform.com/libraries/jvJ1Gu3c.js"
        playlist={[playlist]}
        // onReady={onReady}
      />
    </Container>
  );
};

const BackButton = styled(IconButton)`
  background: none;
  transition: transform 300ms ease-in;
  :hover {
    transform: scale(1.2);
    background: none;
  }
`;

const StyledJWPlayer = styled(ReactJWPlayer)`
  #player {
    height: calc(100vh - 3.75rem);
    min-height: calc(100vh - 3.75rem);
    max-height: calc(100vh - 3.75rem);
    width: 100%;
    min-width: 100%;
    /* min-width: calc(100vw - 100px);
    max-width: calc(100vw - 100px);
    margin-left: 100px; */
    background: #151515;
  }

  /* .jw-captions {
    color: white !important;
  }

  .vtt {
    font-family: 'Netflix Sans', sans-serif !important;
    font-weight: 700 !important;
    text-shadow: rgba(0, 0, 0, 1) 0em 0em 0.2em !important;
    position: fixed;
    bottom: 15% !important;
    line-height: normal;
    white-space: pre-wrap !important;
    text-align: center !important;
    left: 50%;
    transform: translate(-50%);
    z-index: 2147483647;
    background-color: transparent !important;
    color: #ffff;
    font-size: 2vw;
    position: absolute;
  }

  .jw-text-track-container .jw-reset {
    display: none;
  }

  .jw-title-primary {
    font-family: 'Netflix Sans', sans-serif !important;
    font-weight: 900 !important;
    text-shadow: rgba(0, 0, 0, 1) 0em 0em 0.2em !important;
    font-size: 1.8vw !important;
    margin: 0 2vw !important;
    margin-top: 1.2vw !important;
  }

  .jw-title-secondary {
    font-family: 'Netflix Sans', sans-serif !important;
    font-weight: 700 !important;
    text-shadow: rgba(0, 0, 0, 1) 0em 0em 0.2em !important;
    opacity: 0.8;
    margin: 0 2vw !important;
    white-space: pre-wrap !important;
    font-size: 1.2vw !important;
    line-height: normal !important;
  }
  .jw-preview {
    filter: brightness(0.8);
  }
  #movie-title {
    font-family: 'Netflix Sans', sans-serif !important;
    color: white !important;
    white-space: nowrap !important;
    padding: 1vw 1.5vw;
    font-size: 1em;
    opacity: 0.9;
    margin-bottom: 3px;
  }

  video::-webkit-media-text-track-container {
    display: none;
  } */
`;
