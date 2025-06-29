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
          <MenuDropdown
            title="TURMAS"
            options={[
              { label: 'Listar Turmas', onClick: () => navigate('/turmas') },
              { label: 'Criar nova Turma', onClick: () => navigate('/turmas/criar') },
            ]}
          />
          <MenuDropdown
            title="ALUNOS"
            options={[
              { label: 'Listar Alunos', onClick: () => console.log('Listar Alunos') },
              { label: 'Cadastrar Aluno', onClick: () => console.log('Cadastrar') },
            ]}
          />
          <MenuDropdown
            title="CHAMADA"
            options={[
              { label: 'Fazer Chamada', onClick: () => console.log('Chamada') },
            ]}
          />
        </nav>
      </aside>

      <main className="main-content">
        <h2 className="titulo-pagina">TURMAS CADASTRADAS</h2>

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
