import { useCallback, useRef } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import * as Yup from 'yup'

import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import getValidationErrors from '../../utils/getValidationErrors'

import * as S from './styles'

export function SignIn() {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
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
    } catch (err: any) {
      console.log(err)

      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  }, [])
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit" text="Entrar" />

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </S.Content>
      <S.Background />
    </S.Container>
  )
}

export default SignIn
