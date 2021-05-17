import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  IconButton,
  Text,
  Box,
  HStack,
} from '@chakra-ui/react';
import { StyledVStack } from './Nav';
// Icons
import { List } from 'phosphor-react';
import { HomeIcon } from '../SVG/_HomeIcon';
import { MoviesIcon } from '../SVG/_MoviesIcon';
import { TVIcon } from '../SVG/_TVIcon';

export const NavDrawer = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <Drawer onClose={onClose} placement="left" isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg="var(--bg-primary)">
        <DrawerHeader>
          <Box display="flex" px="1rem">
            <IconButton
              aria-label="Home"
              onClick={onClose}
              bg="transparent"
              _hover={{ background: 'transparent' }}
              _focus={{ background: 'transparent' }}
              _active={{ background: 'transparent' }}
              transform="translateX(-1.5rem)"
              icon={<List color="var(--primary-color)" size={32} />}
            />

            <Text
              transform="translateX(-0.5rem)"
              color="var(--primary-color)"
              fontSize="2xl"
              fontWeight="bold"
            >
              NOS
            </Text>
          </Box>
        </DrawerHeader>
        <DrawerBody>
          <StyledVStack spacing="3">
            <HStack width="100%">
              <IconButton
                aria-label="Home"
                bg="transparent"
                _hover={{ background: 'transparent' }}
                icon={<HomeIcon color="var(--primary-color)" size={32} />}
              />
              <Text fontWeight="bold" fontSize="xl">
                Home
              </Text>
            </HStack>
            <HStack width="100%">
              <IconButton
                bg="transparent"
                aria-label="Movies"
                _hover={{ background: 'transparent' }}
                icon={<MoviesIcon color="var(--primary-color)" size={32} />}
              />
              <Text fontWeight="bold" fontSize="xl">
                Movies
              </Text>
            </HStack>
            <HStack width="100%">
              <IconButton
                bg="transparent"
                aria-label="Movies"
                icon={<MoviesIcon color="var(--primary-color)" size={32} />}
              />
              <Text fontWeight="bold" fontSize="xl">
                Shows
              </Text>
            </HStack>
          </StyledVStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
