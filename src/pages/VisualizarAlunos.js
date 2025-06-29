import React from 'react';
import '../style/VisualizarAlunos.css';
import MenuDropdown from '../components/MenuDropdown';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function VisualizarAlunos() {
  const navigate = useNavigate();
  const alunos = [
    { id: 1, nome: 'Fulano', turma: 'Turma 1', modalidade: 'Futebol', dia: 'Seg/Qui' },
    { id: 2, nome: 'Ciclano', turma: 'Turma 1', modalidade: 'Futebol', dia: 'Seg/Qui' },
    { id: 3, nome: 'Beltrano', turma: 'Turma 1', modalidade: 'Futebol', dia: 'Seg/Qui' }
  ];
  


  const excluirAluno = (aluno) => {
    console.log('Excluir', aluno);
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
        <h2 className="titulo">VER ALUNOS</h2>

        <table className="tabela-alunos">
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>TURMA</th>
              <th>MODALIDADE</th>
              <th>DIA</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td onClick={() => navigate(`/alunos/1`)} className="aluno-nome">{aluno.nome}</td>

                <td>{aluno.turma}</td>
                <td>{aluno.modalidade}</td>
                <td>{aluno.dia}</td>
                <td>
                  <button className="btn-trash" onClick={() => excluirAluno(aluno.nome)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default VisualizarAlunos;
