import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
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
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: ${RFValue(64)}px 0 ${RFValue(24)}px;
`

export const BackToSignIn = styled.TouchableOpacity`
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

export const BackToSignInText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  margin-left: ${RFValue(16)}px;
`
