import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 ${RFValue(30)}px
    ${Platform.OS === 'android' ? RFValue(120) : RFValue(40)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: ${RFValue(24)}px 0 ${RFValue(24)}px;
`

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: ${RFValue(24)}px;
`

export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  background: ${({ theme }) => theme.colors.text};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.input};

  padding: ${RFValue(16)}px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CreateAccountButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  margin-left: ${RFValue(16)}px;
`
