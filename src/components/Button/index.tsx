import { ButtonHTMLAttributes } from 'react';

import { ButtonBase } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  label: string;
}

export function Button({ outlined = false, label, ...rest }: ButtonProps) {
  return (
    <ButtonBase {...rest} outlined={outlined} >
      {label}
    </ButtonBase>
  )
}