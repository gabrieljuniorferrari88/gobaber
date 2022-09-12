import { useCallback, useEffect, useRef } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'
import * as Yup from 'yup'

import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import getValidationErrors from '../../utils/getValidationErrors'

import * as S from './styles'

interface SingInFormData {
  email: string
  password: string
}

export function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()

  const { signIn, user } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().required('Senha obrigatória!'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signIn({
          email: data.email,
          password: data.password,
        })

        navigate('/dashboard')
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        })
      }
    },
    [signIn, addToast, navigate],
  )

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    } else {
      navigate('/')
    }
  }, [user])

  return (
    <S.Container>
      <S.Content>
        <S.AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

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
            <Button type="submit" text="Entrar" />

            <Link to="/forgot">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </S.AnimationContainer>
      </S.Content>
      <S.Background />
    </S.Container>
  )
}

export default SignIn
