import { chakra, Flex, Text, Image } from '@chakra-ui/react';

export function SectionProjects() {
  return (
    <Flex height="110vh" justify="space-between" align="center">
      <Image src="/illustrations/empty-projects.svg" alt="Hop logo" height="450px" />
      <Flex flexDirection="column" pl="150px">
        <Text fontWeight="500" color="blue.100" fontFamily="barlow" fontSize="40px">
          At now, we dont have a running project. 😕
        </Text>
        <Text fontWeight="300" color="blue.100" fontFamily="barlow" fontSize="24px" pt="20px">
          But we’re work hard on it!
          <br />
          To take your idea off the paper or
          {' '}
          <chakra.button color="green">improve</chakra.button>
          {' '}
          your product, talk with our team,
          {' '}
          <chakra.button color="green">get in touch!</chakra.button>
        </Text>
      </Flex>
    </Flex>
  );
}
