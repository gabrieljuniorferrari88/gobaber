/* eslint-disable no-unused-vars */
import { useCallback, useRef } from 'react'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { Link, useNavigate } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'

import * as S from './styles'
import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'
import { useToast } from '../../hooks/toast'

interface SignUpFormData {
  name: string
  email: string
  password: string
}

export function SignUp() {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório!'),
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos.'),
          // .matches(
          //   /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          //   'A senha deve conter no mínimo 6 caracteres, uma maiúscula, um número e um caractere especial!',
          // ),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await api.post('/users', data)

        navigate('/')

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso!',
          description: 'Você já pode fazer seu login',
        })
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        })
      }
    },
    [addToast, navigate],
  )

  return (
    <S.Container>
      <S.Background />

      <S.Content>
        <S.AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit" text="Cadastrar" />
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </S.AnimationContainer>
      </S.Content>
    </S.Container>
  )
}

export default SignUp
