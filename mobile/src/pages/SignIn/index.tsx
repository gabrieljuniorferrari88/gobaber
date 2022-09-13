/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Image } from 'react-native'
import * as S from './styles'

import logoImg from '../../../assets/logo.png'

export function SignIn() {
  return (
    <S.Container>
      <Image source={logoImg} />
    </S.Container>
  )
}

export default SignIn
