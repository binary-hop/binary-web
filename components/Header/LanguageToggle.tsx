import Link from 'next/link';
import { Button, Text, Icon, useBreakpointValue } from '@chakra-ui/react';
import { RiGlobalLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

export const LanguageToggle = () => {
  const { locale, asPath } = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const buttonProps = {
    variant: 'ghost',
    color: 'blue.100',
    fontFamily: 'barlow',
    fontWeight: '400',
    fontSize: '1.2rem',
    transition: 'all .3s ease-in-out',
    _hover: { outline: 'none', cursor: 'pointer', transform: 'scale(1.05)' },
    _focus: { outline: 'none' },
    size: 'xs',
    px: '0',
  };

  return (
    <Link
      href={asPath}
      locale={locale === 'pt' ? 'en' : 'pt'}
    >
      <Button
        _active={{ bgColor: 'transparent' }}
        {...buttonProps}
        rightIcon={<Icon pt="3px" as={RiGlobalLine} w="6" h="6" />}
      >
        {isWideVersion && (
        <>
          <Text px="0.7rem" color={locale === 'en' ? 'blue.900' : 'blue.100'}>English</Text>
          <Text fontSize="0.8rem" px="0.3rem">|</Text>
          <Text px="0.7rem" color={locale === 'pt' ? 'blue.900' : 'blue.100'}>Português</Text>
        </>
      )}
      </Button>
    </Link>
);
};
