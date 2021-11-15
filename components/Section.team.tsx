/* eslint-disable jsx-a11y/anchor-is-valid */
import { chakra, Flex, Image, Text, VStack, HStack, Box } from '@chakra-ui/react';
import Link from 'next/link';

export function SectionTeam() {
  return (
    <Flex height="100vh" justify="space-between" align="center">
      <VStack spacing="50px" w="100%" align="flex-start">
        <Box>
          <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize="30px">
            Our team
          </Text>
          <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize="20px">
            People are the answer to
            {' '}
            <chakra.span color="green">solve</chakra.span>
            {' '}
            your problems!
          </Text>
        </Box>

        <HStack height="50vh" w="100%" spacing="80px" justify="center">
          <Box minW="12vw">
            <Image src="/team/andre.castelo.jpeg" alt="André Castelo" h="150px" w="150px" borderRadius="50%" objectFit="cover" marginX="auto" />
            <Text fontWeight="600" color="blue.100" fontFamily="barlow" fontSize="24px" textAlign="center" pt="20px">
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
          <Box minW="15vw">
            <Image src="/team/vinicius.alexandre.jpeg" alt="Vinícius Alexandre" h="150px" w="150px" borderRadius="50%" objectFit="cover" marginX="auto" />
            <Text fontWeight="600" color="blue.100" fontFamily="barlow" fontSize="24px" textAlign="center" pt="20px">
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
              </Link> */}
            </HStack>
          </Box>
          <Box minW="12vw">
            <Image src="/team/john.drumond.jpeg" alt="Johnathan Drumond" h="150px" w="150px" borderRadius="50%" objectFit="cover" marginX="auto" />
            <Text fontWeight="600" color="blue.100" fontFamily="barlow" fontSize="24px" textAlign="center" pt="20px">
              Johnathan Drumond
            </Text>
            <Text fontWeight="500" color="green" fontFamily="barlow" fontSize="16px" textAlign="center" pt="0px">
              Software and IoT Developer
            </Text>
            <HStack w="100%" spacing="10px" justifyContent="center" minH="60px" pt="25px">
              {/* <Link passHref href="https://github.com/mycatdoitbetter">
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
              </Link> */}
            </HStack>
          </Box>
          <Box minW="12vw">
            <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="Giovana Silva" h="150px" w="150px" borderRadius="50%" objectFit="cover" marginX="auto" />
            <Text fontWeight="600" color="blue.100" fontFamily="barlow" fontSize="24px" textAlign="center" pt="20px">
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
              </Link> */}
            </HStack>
          </Box>
        </HStack>

      </VStack>
    </Flex>
  );
}
