import { useEffect, useState } from 'react';
import { Text, Button, VStack } from '@chakra-ui/react';
import { CaretDown, CaretUp } from 'phosphor-react';

export const ShowMore = ({ text }: { text: string }) => {
  const [truncate, setTruncate] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (text.length > 115) {
      setShow(true);
      setTruncate(true);
    }
  }, []);
  return (
    <>
      {truncate ? (
        <>
          {show ? (
            <VStack alignItems="flex-start">
              <Text letterSpacing="wide" fontSize="lg" fontWeight="bold">
                {`${text.substring(0, 115)}...`}
              </Text>
              <Button
                bg="none"
                p="0"
                size="sm"
                rightIcon={<CaretDown size={18} />}
                onClick={() => setShow(false)}
                color="hsla(0,0%,98%,.45)"
                fontWeight="bold"
                _hover={{ background: 'none' }}
              >
                READ MORE
              </Button>
            </VStack>
          ) : (
            <VStack alignItems="flex-start">
              <Text letterSpacing="wide" fontSize="lg" fontWeight="bold">
                {text}
              </Text>
              <Button
                bg="none"
                p="0"
                size="sm"
                rightIcon={<CaretUp size={18} />}
                onClick={() => setShow(true)}
                color="hsla(0,0%,98%,.45)"
                fontWeight="bold"
                _hover={{ background: 'none' }}
              >
                READ LESS
              </Button>
            </VStack>
          )}
        </>
      ) : (
        <Text letterSpacing="wide" fontSize="lg" fontWeight="bold">
          {text}
        </Text>
      )}
    </>
  );
};
