import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import * as S from './styles'
import { Form } from '@unform/web'

import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'

export function SignIn() {
  function handleSubmit(data: object): void {
    console.log(data)
  }
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
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
