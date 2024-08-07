
// import Rocket  from "../../assets/rocket.svg"
// import Todo from '../../assets/todo.svg'
// import { BoxForm, Header, Input, Main } from "./styles"

import { ButtonContent } from "../../components/button/style"
import Header from "../../components/header/Header"
import { InputContent } from "../../components/input/style"
import { BoxInput, Section } from "./styles"
import { PlusCircle } from "phosphor-react"

const Home = () => {
  return (
    <div>
      <Header/>

      <Section>
        <BoxInput>
          <InputContent
            placeholder="Adicione uma nova tarefa"
          />
          <ButtonContent>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
          </ButtonContent>
        </BoxInput>
      </Section>
    </div>
  )
}

export default Home


{/* <Main>
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

</Main> */}