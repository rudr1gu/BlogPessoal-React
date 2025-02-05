import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ReactNode, useContext } from 'react';
import ToastAlerta from '../../utils/ToastAlerta';

const Navbar = () => {
    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    const logout = () => {
        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/');
    }

    let component: ReactNode;

    if (usuario.token !== '') {

        component = (
            <nav className="w-full flex justify-center py-4 bg-sky-700 text-white">
                <div className="container flex justify-between text-lg">
                    <h1><Link to="/home">Blog Pessoal - Rudr1gu</Link> <i className='bx bx-code-alt'></i></h1>
                    <div>
                        <ul className="flex gap-5">
                            <li><Link to="/postagens" className="links-nav">
                                <i className='bx bxs-notepad'></i> Postagens
                            </Link>
                            </li>
                            <li><Link to="/tema" className="links-nav ">
                                <i className='bx bxs-comment-detail'></i> Temas
                            </Link>
                            </li>
                            <li><Link to="cadastrartema" className="links-nav ">
                                <i className='bx bxs-comment-add'></i> Cadastrar Tema
                            </Link>
                            </li>
                            <li><Link to="/perfil" className="links-nav ">
                                <i className='bx bxs-user-rectangle' ></i> Perfil
                            </Link>
                            </li>
                            <li><Link to='' onClick={logout} className="links-nav logout">
                                <i className='bx bxs-log-out-circle'></i> Sair
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }

    return (
        <>
            {component}
        </>
    );
};

export default Navbar;