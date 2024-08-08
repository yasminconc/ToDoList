import { AsideLeft, AsideRigth, Main } from "./style"


const TasksCreated = () => {
  return (
    <Main>
        <AsideRigth>
            <p>Tarefas criadas</p>
            <span>0</span>
        </AsideRigth>
        <AsideLeft>
            <p>Concluídas</p>
            <span>0</span>
        </AsideLeft>
    </Main>
  )
}

export default TasksCreated