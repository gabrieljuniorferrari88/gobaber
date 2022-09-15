import { TextInputProps } from 'react-native'
import IconProps from '@expo/vector-icons/Feather'

import * as S from './styles'
import theme from '../../global/styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'

interface InputProps extends TextInputProps {
  name: string
  iconName: keyof typeof IconProps.glyphMap
}

export function Input({ name, iconName, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.Icon
        name={iconName}
        size={RFValue(20)}
        color={theme.colors.inputPlaceholder}
      />
      <S.TextInputs
        keyboardAppearance="dark"
        placeholderTextColor={theme.colors.inputPlaceholder}
        {...rest}
      />
    </S.Container>
  )
}

// import { TextInputProps } from 'react-native';
// import { Container } from './styles';

// type Props = TextInputProps;

// export function Input({ ...rest }: Props) {
//   return <Container {...rest} />;
// }
