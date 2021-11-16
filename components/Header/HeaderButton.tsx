import { Button } from '@chakra-ui/react';
import { HeaderButtonProps } from './types';

export const HeaderButton = ({ name, onClick, color = 'blue.100' }: HeaderButtonProps) => (
  <Button
    variant="link"
    color={color}
    fontFamily="barlow"
    fontWeight="400"
    _focus={{ outline: 'none' }}
    fontSize="1.4rem"
    onClick={onClick}
  >
    {name}
  </Button>
);
