import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CadastroProfessor from './pages/CadastroProfessor';
import Dashboard from './pages/Dashboard';
import Turmas from './pages/Turmas';
import NovaTurma from './pages/NovaTurma'; 
import CadastrarAluno from './pages/CadastrarAluno';
import VisualizarAlunos from './pages/VisualizarAlunos';
import VisualizarAlunoIndividual from './pages/VisualizarAlunoIndividual';
import Chamada from './pages/Chamada';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CadastroProfessor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/turmas" element={<Turmas />} />
        <Route path="/turmas/criar" element={<NovaTurma />} />
        <Route path="/alunos/cadastrar" element={<CadastrarAluno />} />
        <Route path="/alunos" element={<VisualizarAlunos />} />
        <Route path="/alunos/:id" element={<VisualizarAlunoIndividual />} />
        <Route path="/chamada" element={<Chamada />} />
      </Routes>
    </Router>
  );
}

export default App;
