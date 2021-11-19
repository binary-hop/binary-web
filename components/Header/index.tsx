import { Box, Flex, HStack, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import * as Scroll from 'react-scroll';
import { HeaderButton } from './HeaderButton';
import { LanguageToggle } from './LanguageToggle';
import { HeaderProps } from './types';

const { Link } = Scroll;

export function Header({ onOpenContactModal }: HeaderProps) {
  const { locale } = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      bgColor="background"
      h="10vh"
      w="100%"
      paddingX={isWideVersion ? '40px' : '20px'}
      justify="space-between"
      position="fixed"
      boxShadow="md"
    >
      <HStack align="center" spacing="30px">
        <Link to="main" smooth duration={400}>
          <Box h={isWideVersion ? '30px' : '25px'} w={isWideVersion ? '30px' : '25px'} transition="all .3s ease-in-out" _hover={{ cursor: 'pointer', transform: 'scale(1.05)' }}>
            <Image src="/icons/hop.svg" alt="Hop logo" />
          </Box>
        </Link>
        {isWideVersion && (
        <Link to="main" smooth duration={400}>
          <Text color="blue.100" fontFamily="barlow" fontWeight="300" fontSize="22px" transition="all .3s ease-in-out" _hover={{ cursor: 'pointer', transform: 'scale(1.05)' }}>
            Binary Hop
          </Text>
        </Link>
        )}
      </HStack>
      <HStack spacing="24px">
        <Link to="projects" smooth duration={400}>
          <HeaderButton name={locale === 'pt' ? 'Projetos' : 'Projects'} />
        </Link>
        <Link to="team" smooth duration={400}>
          <HeaderButton name={locale === 'pt' ? 'Time' : 'Team'} />
        </Link>
        <HeaderButton name={locale === 'pt' ? 'Contatos' : 'Contacts'} color="green" onClick={onOpenContactModal} />
        <LanguageToggle />
      </HStack>
    </Flex>
  );
}
