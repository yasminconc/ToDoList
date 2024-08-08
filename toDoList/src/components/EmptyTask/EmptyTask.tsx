import clipboard from '../../assets/Clipboard.svg'

const EmptyTask = () => {
  return (
    <div>
        <img src={clipboard}/>
        <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
        </p>
    </div>
  )
}

export default EmptyTask