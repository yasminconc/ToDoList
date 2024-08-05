
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes'
import Router from './router/Router'
import { GlobalStyle } from './styles/global'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App