
import Rocket  from "../../assets/rocket.svg"
import Todo from '../../assets/todo.svg'
import { BoxForm, Header, Input, Main } from "./styles"

const Home = () => {
  return (
    <Main>
      <Header>
        <img src={Rocket}/>
        <img src={Todo}/>
      </Header>

      <BoxForm>
        <Input
          placeholder="Adicione uma nova tarefa"
        />

        <button>
          Criar
        </button>

      </BoxForm>

    </Main>
  )
}

export default Home