import React from 'react';
import '../style/VisualizarAlunoIndividual.css';
import MenuDropdown from '../components/MenuDropdown';

function VisualizarAlunoIndividual() {
  const aluno = {
    nome: 'Fulano de Tal',
    nascimento: '2008-03-10',
    telefone: '(47) 99999-8888',
    mae: 'Maria das Dores',
    pai: 'José das Couves',
    plano: 'Sim',
    recomendacao: 'Não',
    deficiencia: 'Não',
    doenca: 'Asma leve',
    alergia: 'Amendoim',
    medicacao: 'Aerolin',
    dor: 'Não',
    desmaio: 'Sim',
    tontura: 'Não'
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
        <h2 className="titulo">DADOS DO ALUNO</h2>

        <div className="form-box">
          <div className="linha">
            <input disabled value={aluno.nome} />
            <input disabled type="date" value={aluno.nascimento} />
            <input disabled value={aluno.telefone} />
          </div>
          <div className="linha">
            <input disabled value={aluno.mae} />
            <input disabled value={aluno.pai} />
          </div>
        </div>

        <h3 className="subtitulo">Frequência</h3>
        <div className="form-box frequency-box">
          <input disabled value="Data da Presença: 24/06/2025" />
          <button className="btn">Gerar Frequência</button>
        </div>

        <h3 className="subtitulo">Extrato Financeiro</h3>
        <div className="form-box finance-box">
          <input disabled value="Data de Pagamento em Aberto: 24/06/2025" />
          <button className="btn">Anexar Extrato</button>
          <div className="responsavel">Responsável financeiro: Fulano de Não Sei das Quantas</div>
        </div>

        <button className="btn-finalizar">FINALIZAR</button>
      </main>
    </div>
  );
}

export default VisualizarAlunoIndividual;
