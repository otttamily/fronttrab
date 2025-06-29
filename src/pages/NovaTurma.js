import React, { useState } from 'react';
import '../style/NovaTurma.css';
import MenuDropdown from '../components/MenuDropdown';
import { useNavigate } from 'react-router-dom';


function NovaTurma() {
  const navigate = useNavigate();
  const [aluno, setAluno] = useState('');
  const [alunosSelecionados, setAlunosSelecionados] = useState([]);

  const adicionarAluno = () => {
    if (aluno && !alunosSelecionados.includes(aluno)) {
      setAlunosSelecionados([...alunosSelecionados, aluno]);
      setAluno('');
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <h3>JOGA JUNTO</h3>
          <span>ADMINISTRADOR</span>
        </div>
        <nav className="menu">
          <MenuDropdown title="TURMAS" options={[]} />
          <MenuDropdown title="ALUNOS" options={[]} />
          <MenuDropdown title="CHAMADA" options={[]} />
        </nav>
      </aside>

      <main className="main-content">
        <div className="titulo-box">
        <button className="btn-seta-voltar" onClick={() => navigate('/dashboard')}>
          ←
        </button>
        <h2 className="titulo">CRIAR NOVA TURMA</h2>
        </div>


        <div className="formulario-turma">
          <div className="campo">
            <label>Modalidade</label>
            <select><option>Futsal</option></select>
          </div>
          <div className="campo">
            <label>Dia</label>
            <select><option>Seg/Qui</option></select>
          </div>
          <div className="campo">
            <label>Hora</label>
            <select><option>18:30</option></select>
          </div>
          <div className="campo">
            <label>Professor</label>
            <select><option>Fulano</option></select>
          </div>
          <div className="campo">
            <label>Adicionar Aluno</label>
            <input
              type="text"
              placeholder="Digite o nome do aluno"
              value={aluno}
              onChange={(e) => setAluno(e.target.value)}
            />
            <button className="btn-adicionar" onClick={adicionarAluno}>Adicionar</button>
          </div>

          <div className="lista-alunos">
            {alunosSelecionados.map((nome, idx) => (
              <div key={idx} className="aluno-item">{nome}</div>
            ))}
          </div>

          <button className="btn-finalizar">FINALIZAR</button>
        </div>
      </main>
    </div>
  );
}

export default NovaTurma;
