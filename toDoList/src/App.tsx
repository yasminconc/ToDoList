
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes'
import Router from './router/Router'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App