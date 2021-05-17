import { Box, Text } from '@chakra-ui/react';
import { Profile } from './Profile';
import { Search } from './Search';

export const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      height="3.75rem"
      bg="var(--bg-primary)"
      justifyContent="space-between"
      color="#FFFFFF"
      px="1rem"
    >
      <Text color="var(--font-color)" fontSize="2xl" fontWeight="bold">
        NOS
      </Text>

      <Search />
      <Profile />
    </Box>
  );
};
