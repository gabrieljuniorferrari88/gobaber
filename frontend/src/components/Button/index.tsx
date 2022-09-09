import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...rest }: Props) {
  return (
    <S.Container>
      <S.Button {...rest}>{text}</S.Button>
    </S.Container>
  )
}

export default Button
