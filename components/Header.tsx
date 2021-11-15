import { Box, Flex, HStack, Button, Text, Image } from '@chakra-ui/react';
import React from 'react';

export function Header() {
  return (
    <Flex bgColor="background" h="100vh" pl="40px" pr="40px">
      <Flex h="90px" w="100%" justify="space-between">
        <HStack align="center" spacing="30px">
          <Box h="40px" w="40px">
            <Image src="/icons/hop.svg" alt="Hop logo" />
          </Box>
          <Text color="blue.100" fontFamily="barlow" fontWeight="300" fontSize="32px">
            Binary Hop
          </Text>
        </HStack>
        <HStack spacing="24px">
          <Button variant="link" fontFamily="barlow" fontWeight="400" _focus={{ outline: 'none' }} fontSize="1.4rem">
            Projects
          </Button>
          <Button variant="link" fontFamily="barlow" fontWeight="400" _focus={{ outline: 'none' }} fontSize="1.4rem">
            Team
          </Button>
          <Button variant="link" fontFamily="barlow" fontWeight="400" _focus={{ outline: 'none' }} fontSize="1.4rem" color="green">
            Contact
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
}
