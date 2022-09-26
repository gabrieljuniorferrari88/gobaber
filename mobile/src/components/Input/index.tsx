import { TextInputProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import IconProps from '@expo/vector-icons/Feather'

import * as S from './styles'
import theme from '../../global/styles/theme'
import { useState } from 'react'

interface InputProps extends TextInputProps {
  name: string
  icon: keyof typeof IconProps.glyphMap
}

export function Input({ name, icon, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }
  return (
    <S.Container isFocused={isFocused}>
      <S.Icon
        name={icon}
        size={RFValue(20)}
        color={
          isFocused || isFilled
            ? theme.colors.primary
            : theme.colors.inputPlaceholder
        }
      />
      <S.TextInputs
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        keyboardAppearance="dark"
        placeholderTextColor={theme.colors.inputPlaceholder}
        {...rest}
      />
    </S.Container>
  )
}
