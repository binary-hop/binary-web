import { chakra, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react';

export function SectionMain() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  const illustrationWidth = useBreakpointValue({
    base: '100%',
    sm: '75%',
    md: '55%',
    lg: '50%',
  });

  return (
    <Flex height="110vh" flexDirection={isMobile ? 'column' : 'row'} justify={isMobile ? 'center' : 'space-between'} align="center" paddingX={isMobile ? '0px' : '80px'}>
      <Flex flexDirection="column" mb={isMobile ? '3rem' : '0'}>
        <Text lineHeight={isMobile ? 1 : 1.3} fontWeight="400" color="blue.100" fontFamily="barlow" textAlign={isMobile ? 'center' : 'left'} fontSize={isMobile ? '3rem' : ['2rem', '2.5rem', '3rem', '4rem', '5rem', '7rem']}>
          We&apos;re
          {' '}
          <chakra.span color="blue.900">new</chakra.span>
          ,
        </Text>
        <Text lineHeight={isMobile ? 1 : 1.3} fontWeight="400" color="blue.100" fontFamily="barlow" textAlign={isMobile ? 'center' : 'left'} fontSize={isMobile ? '3rem' : ['2rem', '2.5rem', '3rem', '4rem', '5rem', '7rem']}>
          we&apos;re
          {' '}
          <chakra.span color="blue.900">young</chakra.span>
          ,
        </Text>
        <Text lineHeight={isMobile ? 1 : 1.3} fontWeight="400" color="blue.100" fontFamily="barlow" textAlign={isMobile ? 'center' : 'left'} fontSize={isMobile ? '3rem' : ['2rem', '2.5rem', '3rem', '4rem', '5rem', '7rem']}>
          we&apos;re
          {' '}
          <chakra.span color="green">tech</chakra.span>
          .
        </Text>
      </Flex>
      <Image src="/illustrations/initial.svg" alt="Illustration" pl={!isMobile ? '50px' : 0} w={illustrationWidth} />
    </Flex>
  );
}
