import '../style/Pagamentos.css';
import MenuDropdown from '../components/MenuDropdown';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Pagamentos() {
    const importarCSV = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const texto = event.target.result;
    const linhas = texto.split('\n').map(l => l.trim()).filter(Boolean);

    const novosPagamentos = linhas.map((linha, index) => {
      const [aluno, valor, data, status] = linha.split(',');

      return {
        id: pagamentos.length + index + 1,
        aluno,
        valor: parseFloat(valor),
        data,
        status: status === 'pago' ? 'pago' : 'pendente'
      };
    });

    setPagamentos([...pagamentos, ...novosPagamentos]);
    alert('Pagamentos importados com sucesso!');
  };

  reader.readAsText(file);
};

    
  const navigate = useNavigate();

const [pagamentos, setPagamentos] = useState([
  { id: 1, aluno: 'Fulano', valor: 120.00, data: '01/06/2025', status: 'pago' },
  { id: 2, aluno: 'Beltrano', valor: 120.00, data: '01/06/2025', status: 'pendente' },
  { id: 3, aluno: 'Ciclano', valor: 130.00, data: '01/07/2025', status: 'pago' },
  { id: 4, aluno: 'Maria Souza', valor: 120.00, data: '01/07/2025', status: 'pendente' }
]);

const [form, setForm] = useState({
  aluno: '',
  valor: '',
  data: '',
  status: 'pendente'
});

const enviarPagamento = () => {
  if (!form.aluno || !form.valor || !form.data) return;

  const novo = {
    id: pagamentos.length + 1,
    aluno: form.aluno,
    valor: parseFloat(form.valor),
    data: form.data,
    status: form.status
  };

  setPagamentos([...pagamentos, novo]);
  setForm({ aluno: '', valor: '', data: '', status: 'pendente' });
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
          <button className="btn-seta-voltar" onClick={() => navigate('/dashboard')}>←</button>
          <h2 className="titulo">PAGAMENTOS</h2>
        </div>
<div className="novo-pagamento">
  <input placeholder="Aluno" value={form.aluno} onChange={e => setForm({ ...form, aluno: e.target.value })} />
  <input type="number" placeholder="Valor" value={form.valor} onChange={e => setForm({ ...form, valor: e.target.value })} />
  <input type="date" value={form.data} onChange={e => setForm({ ...form, data: e.target.value })} />
  <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
    <option value="pendente">pendente</option>
    <option value="pago">pago</option>
  </select>
  <button className="btn" onClick={enviarPagamento}>Registrar Pagamento</button>
</div>
<div className="importar-csv">
  <label htmlFor="csvPagamentos" className="btn">
    Importar CSV
  </label>
  <input
    id="csvPagamentos"
    type="file"
    accept=".csv"
    style={{ display: 'none' }}
    onChange={importarCSV}
  />
</div>

        <table className="tabela-pagamentos">
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>VALOR</th>
              <th>DATA</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {pagamentos.map((p) => (
              <tr key={p.id}>
                <td>{p.aluno}</td>
                <td>R$ {p.valor.toFixed(2)}</td>
                <td>{p.data}</td>
                <td className={p.status === 'pago' ? 'status-pago' : 'status-pendente'}>
                  {p.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Pagamentos;
