import React from 'react';
import '../style/Turmas.css';
import MenuDropdown from '../components/MenuDropdown';
import { useNavigate } from 'react-router-dom'; 

function Turmas() {
  const navigate = useNavigate();

  const turmas = [
    {
      id: 1,
      nome: 'Turma 1',
      modalidade: 'Futsal',
      horario: '18:30',
      dias: 'Seg/Qui',
      professor: 'João Silva',
      alunos: 12,
    },
    {
      id: 2,
      nome: 'Turma 2',
      modalidade: 'Futsal',
      horario: '19:30',
      dias: 'Ter/Sex',
      professor: 'Maria Souza',
      alunos: 12,
    },
  ];

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
        <h2 className="titulo-pagina">TURMAS CADASTRADAS</h2>
        </div>

        <div className="turmas-grid">
          {turmas.map((turma) => (
            <div key={turma.id} className="card-turma">
              <div className="cabecalho-card">
                <h3>{turma.nome}</h3>
                <MenuDropdown
                  title=""
                  options={[
                    
                    { label: 'Excluir Turma', onClick: () => console.log('Excluir', turma.nome) },
                  ]}
                />
              </div>

              <div className="conteudo-card">
                <p><strong>Modalidade:</strong> {turma.modalidade}</p>
                <p><strong>Horário:</strong> {turma.horario}</p>
                <p><strong>Dias:</strong> {turma.dias}</p>
                <p><strong>Professor:</strong> {turma.professor}</p>
                <p><strong>Alunos:</strong> {turma.alunos}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Turmas;
