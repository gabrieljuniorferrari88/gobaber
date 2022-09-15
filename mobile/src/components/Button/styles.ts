import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-top: ${RFValue(6)}px;

  align-items: center;
  justify-content: center;
  padding: ${RFValue(14)}px; ;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`
