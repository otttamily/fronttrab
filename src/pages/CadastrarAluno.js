import React, { useState } from 'react';
import '../style/CadastrarAluno.css';
import MenuDropdown from '../components/MenuDropdown';
import { useNavigate } from 'react-router-dom';

function CadastrarAluno() {
    const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    mae: '',
    pai: '',
    nascimento: '',
    cpf: '',
    telefone: '',
    endereco: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', form);
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
        <h2 className="titulo">CADASTRAR NOVO ALUNO</h2>
        </div>

        <form className="form-aluno" onSubmit={handleSubmit}>
          <div className="grid-dados">
            <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome do Aluno" />
            <input name="mae" value={form.mae} onChange={handleChange} placeholder="Nome da Mãe" />
            <input name="pai" value={form.pai} onChange={handleChange} placeholder="Nome do Pai" />
            <input name="nascimento" type="date" value={form.nascimento} onChange={handleChange} />
            <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="CPF do Aluno" />
            <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="Telefone" />
            
            <input name="endereco" value={form.endereco} onChange={handleChange} placeholder="Endereço" />
          </div>

          <button type="submit" className="btn-finalizar">FINALIZAR</button>
        </form>
      </main>
    </div>
  );
}

export default CadastrarAluno;
