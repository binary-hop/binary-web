export interface HeaderProps {
  onOpenContactModal: () => void;
}

export interface HeaderButtonProps {
  name: string;
  onClick?: () => void;
  color?: 'blue.100' | 'green'
}
