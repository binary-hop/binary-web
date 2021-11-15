import { chakra, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react';

interface SectionProjectsProps {
  onOpenContactModal: () => void;
}

export function SectionProjects({ onOpenContactModal }: SectionProjectsProps) {
  const isMobile = useBreakpointValue({
    base: true,
    xl: false,
  });

  return (
    <Flex height="100vh" flexDirection={isMobile ? 'column' : 'row'} justify={isMobile ? 'center' : 'space-between'} align="center" paddingX={isMobile ? '20px' : '80px'}>
      <Image src="/illustrations/empty-projects.svg" alt="Hop logo" w={isMobile ? '60%' : ['40%', '50%']} pb={isMobile ? '3rem' : ''} />
      <Flex flexDirection="column" pl={isMobile ? '0px' : '150px'}>
        <Text fontWeight="500" color="blue.100" textAlign={isMobile ? 'center' : 'left'} fontFamily="barlow" fontSize={isMobile ? '1.6rem' : ['1rem', '1.2rem', '1.4rem', '1.6rem', '1.8rem', '2rem']}>
          At now, we dont have a running project. 😕
        </Text>
        <Text fontWeight="300" color="blue.100" textAlign={isMobile ? 'center' : 'left'} fontFamily="barlow" fontSize={isMobile ? '1.3rem' : ['1rem', '1.2rem', '1.4rem', '1.6rem', '1.8rem', '2rem']} pt="20px">
          But we’re work hard on it!
          <br />
          To take your idea off the paper or
          {' '}
          <chakra.button color="green">improve</chakra.button>
          {' '}
          your product, talk with our team,
          {' '}
          <chakra.button color="green" onClick={onOpenContactModal}>get in touch</chakra.button>
          !
        </Text>
      </Flex>
    </Flex>
  );
}
