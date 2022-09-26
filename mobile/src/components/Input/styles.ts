import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import FeatherIcon from '@expo/vector-icons/Feather'

interface Props {
  isFocused: boolean
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${RFValue(50)}px;
  padding: 0 ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.input};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.input};

  border-radius: 10px;
  margin-bottom: ${RFValue(8)}px;

  flex-direction: row;
  align-items: center;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    `};
`
export const Icon = styled(FeatherIcon)`
  margin-right: ${RFValue(16)}px;
`

export const TextInputs = styled(TextInput)`
  flex: 1;

  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`
