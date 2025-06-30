import React, { useState } from 'react';
import '../style/Chamada.css';
import MenuDropdown from '../components/MenuDropdown';
import { useNavigate } from 'react-router-dom';

function Chamada() {
    const handleImportarCSV = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const texto = event.target.result;
    const linhas = texto.split('\n');

    const novasPresencas = {};

    linhas.forEach((linha) => {
      const [idStr, status] = linha.trim().split(',');
      const id = parseInt(idStr);
      if (id && (status === 'presente' || status === 'falta')) {
        novasPresencas[id] = status;
      }
    });

    setPresencas(novasPresencas);
  };

  reader.readAsText(file);
};

    const navigate = useNavigate();
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
        <div className="titulo-box">
            <button className="btn-seta-voltar" onClick={() => navigate('/dashboard')}>
            ←
            </button>
            <h2 className="titulo">CHAMADA - Turma X</h2>
        </div>
        <label htmlFor="csvUpload" className="btn-importar">
  Importar Chamada
</label>
<input
  id="csvUpload"
  type="file"
  accept=".csv"
  style={{ display: 'none' }}
  onChange={handleImportarCSV}
/>

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
