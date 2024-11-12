// pagina de rotas

// design da pagina
import './App.css'

// bagulho de fazer as rotas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importando paginas
import Home from './paginas/home';
import Cadastro from './paginas/cadastro';
import Login from './paginas/login';
import EditarTreinamento from './paginas/editarTreino';
import Treinamento from './paginas/treino';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editar/treinamento" element={<EditarTreinamento />} />
        <Route path="/treinamento" element={<Treinamento />} />
      </Routes>
    </Router>

  )
}

export default App