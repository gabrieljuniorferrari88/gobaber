import { FiAlertCircle, FiXCircle } from 'react-icons/fi'
import * as S from './styles'

export function ToastContainer() {
  return (
    <S.Container>
      <S.Toast type="info" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não Foi possível fazer login na aplicação.</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não Foi possível fazer login na aplicação.</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>
    </S.Container>
  )
}

export default ToastContainer
