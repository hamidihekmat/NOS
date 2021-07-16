import { IconButton } from '@chakra-ui/react';
import { css } from '@emotion/react';
// Icons
import { DiscordLogo } from 'phosphor-react';

export const Discord = () => {
  return (
    <IconButton
      as="a"
      href="https://discord.com/invite/cZqjQ3t9Yu"
      target="_blank"
      css={css`
        position: fixed;
        bottom: 5%;
        left: 93%;
        width: 3.7rem;
        height: 3.7rem;
        z-index: 9999999;
        backdrop-filter: blur(35px);
        border: 2px solid transparent;
        transition: all ease 300ms;
        :hover {
          transform: rotate(360deg);
        }
        @media (max-width: 768px) {
          bottom: 10%;
          left: 80%;
        }
      `}
      borderRadius="100%"
      _hover={{ opacity: 1 }}
      _active={{ opacity: 1 }}
      aria-label="Discord Community"
      bg="#404EED"
      icon={<DiscordLogo size={40} />}
    />
  );
};
