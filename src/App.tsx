
import './App.css'
import Header from './assets/components/Header'
import Corpo from './assets/components/Corpo'
import Rodape from './assets/components/Rodape'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Projeto from './assets/pages/Projeto/Projeto'
import Credito from './assets/pages/Credito/Credito'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Credito' element={<Credito />} />
      </Routes>
    </Router>
  ) 
}

export default App
