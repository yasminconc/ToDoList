import clipboard from '../../assets/Clipboard.svg'
import { Main } from './style'

const EmptyTask = () => {
  return (
    <Main>
        <img src={clipboard}/>
        <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
        </p>
    </Main>
  )
}

export default EmptyTask