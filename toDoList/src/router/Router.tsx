
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';

function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default router