import { ToastMessage } from '../../hooks/toast'
import * as S from './styles'
import Toast from './Toast'

interface ToastContainerProps {
  messages: ToastMessage[]
}

export function ToastContainer({ messages }: ToastContainerProps) {
  return (
    <S.Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </S.Container>
  )
}

export default ToastContainer
