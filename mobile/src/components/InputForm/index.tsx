import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import IconProps from '@expo/vector-icons/Feather'

import * as S from './styles'

import { Input } from '../Input'

interface Props extends TextInputProps {
  control: Control
  name: string
  iconName: keyof typeof IconProps.glyphMap
  error: any
}

export function InputForm({ control, name, iconName, error, ...rest }: Props) {
  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            name={name}
            iconName={iconName}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}
