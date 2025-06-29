import React from 'react';
import '../style/Dashboard.css';
import turmasIcon from '../assets/group-chat.png';
import alunosIcon from '../assets/user.png';
import chamadaIcon from '../assets/lista-de-controle (1).png';
import MenuDropdown from '../components/MenuDropdown';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const navigate = useNavigate();
    
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
      { label: 'Listar Alunos', onClick: () => navigate('/alunos') },
      { label: 'Cadastrar Aluno', onClick: () => navigate('/alunos/cadastrar') }

    ]}
  />

  <MenuDropdown
    title="CHAMADA"
    options={[
      { label: 'Fazer Chamada', onClick: () => navigate('/chamada') },
    ]}
  />
</nav>

      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="menu-icon">☰</button>
          <h2>INÍCIO</h2>
        </header>
        <section className="quick-access">
  <div
    className="icon-card"
    onClick={() => navigate('/turmas')}
    style={{ cursor: 'pointer' }}
  >
    <img src={turmasIcon} alt="Turmas" className="icon-img" />
    TURMAS
  </div>

  <div
    className="icon-card"
    onClick={() => navigate('/alunos')}
    style={{ cursor: 'pointer' }}
  >
    <img src={alunosIcon} alt="Alunos" className="icon-img" />
    ALUNOS
  </div>
  

  <div
    className="icon-card"
    onClick={() => navigate('/chamada')}
    style={{ cursor: 'pointer' }}
  >
    <img src={chamadaIcon} alt="Chamada" className="icon-img" />
    CHAMADA
  </div>
</section>


      </main>
    </div>
  );
}

export default Dashboard;
