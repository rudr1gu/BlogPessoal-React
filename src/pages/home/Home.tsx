import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Home = () => {

  const { nome } = useContext(UserContext);

  return (
    <div className='container'>
      <div>
        <h1>Autenticar Usuário</h1>
        <h2>Seja Bem Vindo(a): <span>{nome}</span></h2>
        <Link to="/login" 
            className="botao"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default Home;