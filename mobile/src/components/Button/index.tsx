import * as S from './styles'

interface Props {
  title: string
  onPress: () => void
}

export function Button({ title, onPress, ...rest }: Props) {
  return (
    <S.Container onPress={onPress} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
