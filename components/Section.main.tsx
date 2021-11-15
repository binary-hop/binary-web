import { chakra, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react';

export function SectionMain() {
  const isMobile = useBreakpointValue({
    base: true,
    xl: false,
  });

  return (
    <Flex height="110vh" flexDirection={isMobile ? 'column' : 'row'} justify={isMobile ? 'center' : 'space-between'} align="center" paddingX={isMobile ? '20px' : '80px'}>
      <Flex flexDirection="column" mb={isMobile ? '2rem' : '0'}>
        <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize={isMobile ? '3rem' : ['2rem', '2.5rem', '3rem', '4rem', '5rem', '7rem']}>
          We&apos;re
          {' '}
          <chakra.span color="blue.900">new</chakra.span>
          ,
        </Text>
        <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize={isMobile ? '3rem' : ['2rem', '2.5rem', '3rem', '4rem', '5rem', '7rem']}>
          we&apos;re
          {' '}
          <chakra.span color="blue.900">young</chakra.span>
          ,
        </Text>
        <Text fontWeight="400" color="blue.100" fontFamily="barlow" fontSize={isMobile ? '3rem' : ['2rem', '2.5rem', '3rem', '4rem', '5rem', '7rem']}>
          we&apos;re
          {' '}
          <chakra.span color="green">tech</chakra.span>
          .
        </Text>
      </Flex>
      <Image src="/illustrations/initial.svg" alt="Illustration" w={isMobile ? '60%' : ['40%', '50%']} />
    </Flex>
  );
}
