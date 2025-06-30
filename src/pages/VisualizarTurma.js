import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/VisualizarTurma.css';
import MenuDropdown from '../components/MenuDropdown';

function VisualizarTurma() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [novoAluno, setNovoAluno] = useState('');
  const [alunos, setAlunos] = useState(['Fulano', 'Beltrano', 'Ciclano']);

  const adicionarAluno = () => {
    const nome = novoAluno.trim();
    if (nome && !alunos.includes(nome)) {
      setAlunos([...alunos, nome]);
      setNovoAluno('');
    }
  };

  const excluirAluno = (nome) => {
    setAlunos(alunos.filter((a) => a !== nome));
  };

  const turma = {
    id,
    nome: `Turma ${id}`,
    modalidade: 'Futsal',
    horario: '18:30',
    dias: 'Seg/Qui',
    professor: 'João Silva',
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
          <button className="btn-seta-voltar" onClick={() => navigate('/turmas')}>
            ←
          </button>
          <h2 className="titulo">DETALHES DA TURMA</h2>
        </div>

        <div className="detalhes-turma">
          <p><strong>Nome:</strong> {turma.nome}</p>
          <p><strong>Modalidade:</strong> {turma.modalidade}</p>
          <p><strong>Horário:</strong> {turma.horario}</p>
          <p><strong>Dias:</strong> {turma.dias}</p>
          <p><strong>Professor:</strong> {turma.professor}</p>

          <h3>Alunos da Turma</h3>
          <div className="alunos-box">
            {alunos.map((aluno, index) => (
              <div key={index} className="aluno-item">
                {aluno}
                <button onClick={() => excluirAluno(aluno)}>✖</button>
              </div>
            ))}

            <div className="adicionar-aluno">
              <input
                type="text"
                value={novoAluno}
                onChange={(e) => setNovoAluno(e.target.value)}
                placeholder="Novo aluno..."
              />
              <button onClick={adicionarAluno}>Adicionar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default VisualizarTurma;
