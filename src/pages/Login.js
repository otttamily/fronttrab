import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Exemplo: comparação com localStorage ou simulação de login
    // Aqui você pode integrar com seu backend futuramente
    if (nome === 'admin@teste.com' && senha === '123') {
      navigate('/dashboard');
    } else {
      alert('E-mail ou senha incorretos');
    }
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleLogin}>
        <input placeholder="nome..." value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder="senha..." type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">ENTRAR</button>
        <p>não tem cadastro? <Link to="/cadastro">cadastre-se!</Link></p>
      </form>
    </div>
  );
}

export default Login;
