/* eslint-disable jsx-a11y/alt-text */
import { Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import * as S from './styles'
import Icon from '@expo/vector-icons/Feather'

import { InputForm } from '../../components/InputForm'
import { Button } from '../../components/Button'
import theme from '../../global/styles/theme'

import logoImg from '../../assets/logo.png'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório!'),
  email: Yup.string()
    .required('E-mail obrigatório!')
    .email('Digite um e-mail válido!'),
  password: Yup.string()
    .required('Senha obrigatória!')
    .min(6, 'No mínimo 6 dígitos.'),
  // .matches(
  //   /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   'A senha deve conter no mínimo 6 caracteres, uma maiúscula, um número e um caractere especial!',
  // ),
})

export function SignUp() {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function handleCadastrar(form: any) {
    console.log(form)
  }

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

            <S.Title>Crie sua conta</S.Title>
            <InputForm
              name="name"
              control={control}
              iconName="user"
              autoCapitalize="words"
              textContentType="username"
              placeholder="Nome"
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="email"
              control={control}
              iconName="mail"
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
              iconName="lock"
              textContentType="newPassword"
              placeholder="Senha"
              secureTextEntry={true}
              error={errors.password && errors.password.message}
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleCadastrar)}
            />

            <Button title="Entrar" onPress={handleSubmit(handleCadastrar)} />
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.BackToSignIn onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={RFValue(20)} color={theme.colors.shape} />
        <S.BackToSignInText>Voltar para logon</S.BackToSignInText>
      </S.BackToSignIn>
    </>
  )
}
