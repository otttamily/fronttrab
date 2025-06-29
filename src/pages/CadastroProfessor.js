import { useState } from 'react';
import { Link } from 'react-router-dom';

function CadastroProfessor() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    senha: ''
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:8080/professores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      alert('Professor cadastrado com sucesso!');
    })
    .catch(err => {
      console.error('Erro no cadastro:', err);
      alert('Erro ao cadastrar');
    });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="card">
        <input name="nome" placeholder="Nome..." onChange={handleChange} />
        <input name="email" placeholder="e-mail..." onChange={handleChange} />
        <input name="cpf" placeholder="cpf..." onChange={handleChange} />
        <input name="telefone" placeholder="Telefone..." onChange={handleChange} />
        <input name="senha" placeholder="senha..." type="password" onChange={handleChange} />
        <button type="submit">CADASTRAR PROFESSOR</button>
        <p>
        Já tem uma conta? <Link to="/" className="link-login">Faça login aqui</Link>
        </p>
      </form>

    </div>
  );
}

export default CadastroProfessor;