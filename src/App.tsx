import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CreditosPage from './assets/Pages/Creditos'
import FazemosPage from './assets/Pages/Fazemos'
import Home from './assets/Pages/Home'
import OndePage from './assets/Pages/Onde'
import ProjetoPage from './assets/Pages/Projeto'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projeto' element={<ProjetoPage />} />
        <Route path='/fazemos' element={<FazemosPage />} />
        <Route path='/onde' element={<OndePage />} />
        <Route path='/creditos' element={<CreditosPage />} />

      </Routes>
    </Router>
  )
}

export default App
