import rocket from '../../assets/rocket.svg'
import todo from '../../assets/todo.svg'
import { Main } from './styles'

const Header = () => {
  return (
    <Main>
        <img src={rocket} />
        <img src={todo} />
    </Main>
  )
}

export default Header