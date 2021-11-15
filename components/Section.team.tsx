/* eslint-disable jsx-a11y/anchor-is-valid */
import { chakra, Flex, Image, Text, VStack, HStack, Box, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

export function SectionTeam() {
  const isSmall = useBreakpointValue({
    base: true,
    xl: false,
  });

  const isMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex height="85vh" flexDirection="column" justify="space-between" align="center">
      <VStack spacing="10px" w="100%" align="flex-start" position="relative">
        <Box w="100%">
          <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize="3.5rem" textAlign="center">
            Our team
          </Text>
          <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize="20px" textAlign="center">
            People are the answer to
            {' '}
            <chakra.span color="green">solve</chakra.span>
            {' '}
            your problems!
          </Text>
        </Box>
        <HStack
          height="50vh"
          overflowX="scroll"
          scrol
          w="100%"
          spacing={isSmall ? '0px' : '80px'}
          justify={isSmall ? '' : 'center'}
          css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
        >
          <Box minW={isSmall ? '100%' : '12vw'}>
            <Image src="/team/andre.castelo.jpeg" alt="André Castelo" h="150px" minW="150px" borderRadius="50%" objectFit="cover" marginX="auto" />
            <Text fontWeight="600" color="blue.100" fontFamily="barlow" fontSize="24px" minW="150px" textAlign="center" pt="20px">
              André Castelo
            </Text>
            <Text fontWeight="500" color="green" fontFamily="barlow" fontSize="16px" textAlign="center" pt="0px">
              CEO & CTO
            </Text>
            <HStack w="100%" spacing="10px" justifyContent="center" minH="60px" pt="25px">
              <Link passHref href="https://github.com/mycatdoitbetter">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/github.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link>
              <Link passHref href="https://www.linkedin.com/in/andre-santi12/">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/linkedin.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link>
              <Link passHref href="https://instagram.com/mycattakeapicbetter">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/instagram.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link>
            </HStack>
          </Box>
          <Box minW={isSmall ? '100%' : '12vw'}>
            <Image src="/team/vinicius.alexandre.jpeg" alt="Vinícius Alexandre" h="150px" minW="150px" borderRadius="50%" objectFit="cover" marginX="auto" />
            <Text fontWeight="600" color="blue.100" fontFamily="barlow" fontSize="24px" minW="150px" textAlign="center" pt="20px">
              Vinícius Alexandre
            </Text>
            <Text fontWeight="500" color="green" fontFamily="barlow" fontSize="16px" textAlign="center" pt="0px">
              Software Developer
            </Text>
            <HStack w="100%" spacing="10px" justifyContent="center" minH="60px" pt="25px">
              {/* <Link passHref href="https://github.com/mycatdoitbetter">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/github.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link> */}
              <Link passHref href="https://www.linkedin.com/in/vin%C3%ADcius-alexandre-a5b09321a/">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/linkedin.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link>
              {/* <Link passHref href="https://instagram.com/mycattakeapicbetter">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/instagram.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link> */}
            </HStack>
          </Box>
          <Box minW={isSmall ? '100%' : '12vw'}>
            <Image src="/team/john.drumond.jpeg" alt="Johnathan Drumond" h="150px" minW="150px" borderRadius="50%" objectFit="cover" marginX="auto" />
            <Text fontWeight="600" color="blue.100" fontFamily="barlow" fontSize="24px" minW="150px" textAlign="center" pt="20px">
              Johnathan Drumond
            </Text>
            <Text fontWeight="500" color="green" fontFamily="barlow" fontSize="16px" textAlign="center" pt="0px">
              Software and IoT Developer
            </Text>
            <HStack w="100%" spacing="10px" justifyContent="center" minH="60px" pt="25px">
              <Link passHref href="https://www.linkedin.com/in/jonathan-drumond-b74796129/">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/linkedin.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link>
            </HStack>
          </Box>
          <Box minW={isSmall ? '100%' : '12vw'}>
            <Image src="/team/giovana.silva.jpeg" alt="Giovana Silva" h="150px" minW="150px" borderRadius="50%" objectFit="cover" marginX="auto" />
            <Text fontWeight="600" color="blue.100" fontFamily="barlow" fontSize="24px" minW="150px" textAlign="center" pt="20px">
              Giovana Silva
            </Text>
            <Text fontWeight="500" color="green" fontFamily="barlow" fontSize="16px" textAlign="center" pt="0px">
              CMO & Designer
            </Text>
            <HStack w="100%" spacing="10px" justifyContent="center" minH="60px" pt="25px">
              {/* <Link passHref href="https://github.com/mycatdoitbetter">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/github.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link> */}
              <Link passHref href="https://www.linkedin.com/in/giovanaoliveira17/">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/linkedin.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link>
              {/* <Link passHref href="https://instagram.com/mycattakeapicbetter">
                <a target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/instagram.svg" alt="Github" h="27px" w="27px" />
                </a>
              </Link> */}
            </HStack>
          </Box>
        </HStack>
        {isSmall && <Image src="/icons/arrow-right.svg" h="35px" w="35px" position="absolute" right="0" top="50%" />}
      </VStack>
      <Flex flexDirection={isMobile ? 'row' : 'column'} justify="space-between" height="8vh" w="100%">
        <HStack spacing="20px" justify={isSmall ? 'center' : ''}>
          <Link passHref href="https://www.linkedin.com/in/andre-santi12/">
            <a target="_blank" rel="noopener noreferrer">
              <HStack alignItems="center">
                <Image src="/icons/linkedin.svg" alt="Github" h="25px" w="25px" />
                <Text color="blue.100" fontWeight="300" fontFamily="barlow">Binary Hop</Text>
              </HStack>
            </a>
          </Link>
          <Link passHref href="https://instagram.com/mycattakeapicbetter">
            <a target="_blank" rel="noopener noreferrer">
              <HStack>
                <Image src="/icons/instagram.svg" alt="Github" h="25px" w="25px" />
                <Text color="blue.100" fontWeight="300" fontFamily="barlow">@b8.software</Text>
              </HStack>
            </a>
          </Link>
        </HStack>
        <HStack justify={isSmall ? 'center' : ''} pb={isSmall ? '10px' : '20px'}>
          <Text color="blue.100" fontWeight="300" fontFamily="barlow">Developed by b8.software</Text>
          <Image src="/icons/green-hop.svg" alt="Github" h="27px" w="27px" />
        </HStack>
      </Flex>
    </Flex>
  );
}
