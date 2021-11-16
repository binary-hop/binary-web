import { Box, Flex, HStack, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import * as Scroll from 'react-scroll';
import { HeaderButton } from './HeaderButton';
import { HeaderProps } from './types';

const { Link } = Scroll;

export function Header({ onOpenContactModal }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      bgColor="background"
      h="10vh"
      w="100%"
      paddingX="40px"
      justify="space-between"
      position="fixed"
      boxShadow="md"
    >
      <HStack align="center" spacing="30px">
        <Link to="main" smooth duration={400}>
          <Box h="30px" w="30px" _hover={{ cursor: 'pointer' }}>
            <Image src="/icons/hop.svg" alt="Hop logo" />
          </Box>
        </Link>
        {isWideVersion && (
        <Link to="main" smooth duration={400}>
          <Text color="blue.100" fontFamily="barlow" fontWeight="300" fontSize="28px" _hover={{ cursor: 'pointer' }}>
            Binary Hop
          </Text>
        </Link>
      )}
      </HStack>
      <HStack spacing="24px">
        <Link to="projects" smooth duration={400}>
          <HeaderButton name="Projects" />
        </Link>
        <Link to="team" smooth duration={400}>
          <HeaderButton name="Team" />
        </Link>
        <HeaderButton name="Contact" color="green" onClick={onOpenContactModal} />
      </HStack>
    </Flex>
  );
}