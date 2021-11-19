import { chakra, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SectionProjectsProps {
  onOpenContactModal: () => void;
}

export function SectionProjects({ onOpenContactModal }: SectionProjectsProps) {
  const { locale } = useRouter();

  const isMobile = useBreakpointValue({
    base: true,
    xl: false,
  });

  const illustrationWidth = useBreakpointValue({
    base: '100%',
    sm: '75%',
    md: '55%',
    lg: '50%',
  });

  return (
    <Flex height="100vh" flexDirection={isMobile ? 'column' : 'row'} justify={isMobile ? 'center' : 'space-between'} align="center" paddingX={isMobile ? '0px' : '80px'}>
      <Image src="/illustrations/empty-projects.svg" alt="Hop logo" w={illustrationWidth} pb={isMobile ? '3rem' : ''} />
      <Flex flexDirection="column" pl={isMobile ? '0px' : '150px'}>
        <Text fontWeight="500" color="blue.100" textAlign={isMobile ? 'center' : 'left'} fontFamily="barlow" fontSize={isMobile ? '1.6rem' : ['1rem', '1.2rem', '1.4rem', '1.6rem', '1.8rem', '2rem']}>

          {locale === 'pt' ? 'Por agora, ainda não temos nenhum projeto ativo. 😕' : 'At now, we dont have a running project. 😕'}
        </Text>
        <Text fontWeight="300" color="blue.100" textAlign={isMobile ? 'center' : 'left'} fontFamily="barlow" fontSize={isMobile ? '1.3rem' : ['1rem', '1.2rem', '1.4rem', '1.6rem', '1.8rem', '2rem']} pt="20px">

          {locale === 'pt' ? 'Mas estamos trabalando nisso!' : 'But we’re work hard on it!'}
          <br />
          {locale === 'pt' ? 'Para tirar sua ideia do papel ou' : 'To take your idea off the paper or'}
          {' '}
          <chakra.button color="green">
            {locale === 'pt' ? 'melhorar' : 'improve'}
          </chakra.button>
          {' '}
          {locale === 'pt' ? 'seu produto, fale com nosso time,' : 'your product, talk with our team,'}
          {' '}
          <chakra.button
            color="green"
            transition="all .3s ease-in-out"
            _hover={{ cursor: 'pointer', transform: 'scale(1.03)' }}
            onClick={onOpenContactModal}
          >
            {locale === 'pt' ? 'entre em contato!' : 'get in touch!'}
          </chakra.button>
        </Text>
      </Flex>
    </Flex>
  );
}
