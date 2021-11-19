import { Button } from '@chakra-ui/react';
import { HeaderButtonProps } from './types';

export const HeaderButton = ({ name, onClick, color = 'blue.100' }: HeaderButtonProps) => {
  const buttonProps = {
    variant: 'ghost',
    color,
    fontFamily: 'barlow',
    fontWeight: '400',
    fontSize: '1.2rem',
    onClick,
    transition: 'all .3s ease-in-out',
    _hover: { textDecoration: 'none', cursor: 'pointer', transform: 'scale(1.05)' },
    size: 'sm',
    px: '0.3rem',
  };

  if (name === 'Contact') {
    return (
      <Button _active={{ bgColor: 'transparent' }} {...buttonProps} bgColor="background" _focus={{ outline: 'none' }}>
        {name}
      </Button>
    );
  }

  return (
    <Button _active={{ bgColor: 'transparent' }} {...buttonProps}>
      {name}
    </Button>
  );
};
