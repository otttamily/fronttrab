import React, { useState } from 'react';
import '../style/Chamada.css';
import MenuDropdown from '../components/MenuDropdown';

function Chamada() {
  const [presencas, setPresencas] = useState({});

  const alunos = [
    { id: 1, nome: 'Fulano de Não Sei o Que' },
    { id: 2, nome: 'Beltrano Silva' },
    { id: 3, nome: 'Ciclano Costa' },
    { id: 4, nome: 'Maria de Souza' }
  ];

  const marcar = (id, status) => {
    setPresencas((prev) => ({ ...prev, [id]: status }));
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
        <div className="chamada-topo">
          <h2 className="titulo">CHAMADA - Turma X</h2>
          <button className="btn-importar">Importar Chamada</button>
        </div>

        <table className="tabela-chamada">
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PRESENTE</th>
              <th>FALTA</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                <td>
                  <button
                    className={`botao-status ${presencas[aluno.id] === 'presente' ? 'ativo' : ''}`}
                    onClick={() => marcar(aluno.id, 'presente')}
                  >
                    ✔️
                  </button>
                </td>
                <td>
                  <button
                    className={`botao-status ${presencas[aluno.id] === 'falta' ? 'ativo falta' : ''}`}
                    onClick={() => marcar(aluno.id, 'falta')}
                  >
                    ❌
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

export default Chamada;
