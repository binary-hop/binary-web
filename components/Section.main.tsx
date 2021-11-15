import { chakra, Flex, Text, Image } from '@chakra-ui/react';

export function SectionMain() {
  return (
    <Flex height="110vh" justify="space-between" align="center">
      <Flex flexDirection="column">
        <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize="90px">
          We're
          {' '}
          <chakra.span color="blue.900">new</chakra.span>
          ,
        </Text>
        <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize="90px">
          we're
          {' '}
          <chakra.span color="blue.900">young</chakra.span>
          ,
        </Text>
        <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize="90px">
          we're
          {' '}
          <chakra.span color="green">tech</chakra.span>
          .
        </Text>
      </Flex>
      <Image src="/illustrations/initial.svg" alt="Hop logo" height="450px" />
    </Flex>
  );
}
