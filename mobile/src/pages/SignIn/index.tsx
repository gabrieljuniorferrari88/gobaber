/* eslint-disable jsx-a11y/alt-text */
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import getValidationErrors from '../../utils/getValidationErrors'
// import { api } from '../../services/api'

import Icon from '@expo/vector-icons/Feather'
import { Button } from '../../components/Button'
import { InputForm } from '../../components/InputForm'
import logoImg from '../../assets/logo.png'
import theme from '../../global/styles/theme'
import * as S from './styles'
import { useCallback } from 'react'

import { useAuth } from '../../hooks/auth'
// import { FieldValues } from 'react-hook-form/dist/types'

// export type FieldValues = Record<string, any>

// interface SignInFormData extends FieldValues {
//   email: string
//   password: string
// }

export function SignIn() {
  const navigation = useNavigation()

  const { signIn } = useAuth()

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório!')
      .email('Digite um e-mail válido!'),
    password: Yup.string().required('Senha obrigatória!'),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSignIn = useCallback(
    async (data: any) => {
      try {
        // console.log(data)
        await signIn({
          email: data.email,
          password: data.password,
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          console.log(errors)

          return
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        )
      }
    },
    [signIn],
  )

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <S.Container>
            <Image source={logoImg} />

            <S.Title>Faça seu logon</S.Title>

            <InputForm
              name="email"
              control={control}
              icon="mail"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="E-mail"
              error={errors.email && errors.email.message}
            />

            <InputForm
              name="password"
              control={control}
              icon="lock"
              placeholder="Senha"
              secureTextEntry={true}
              error={errors.password && errors.password.message}
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleSignIn)}
            />

            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />

            <S.ForgotPassword onPress={() => {}}>
              <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
            </S.ForgotPassword>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={RFValue(20)} color={theme.colors.primary} />
        <S.CreateAccountButtonText>Criar uma conta</S.CreateAccountButtonText>
      </S.CreateAccountButton>
    </>
  )
}
