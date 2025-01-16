import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const Navbar = () => {
    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext);

    const logout = () => {
        handleLogout();
        alert('O Usuário foi deslogado com sucesso!');
        navigate('/');
    }

    return (
        <>
            <nav className="w-full flex justify-center py-4 bg-sky-700 text-white">
                <div className="container flex justify-between text-lg">
                    <h1><Link to="/home">Blog Pessoal - Rudr1gu</Link> <i className='bx bx-code-alt'></i></h1>
                    <div>
                        <ul className="flex gap-5">
                            <li><a href="#" className="links-nav">
                                    <i className='bx bxs-notepad'></i> Postagens
                                </a>
                            </li>
                            <li><a href="#" className="links-nav ">
                                    <i className='bx bxs-comment-detail'></i> Temas
                                </a>
                            </li>
                            <li><a href="#" className="links-nav ">
                                    <i className='bx bxs-comment-add'></i> Cadastrar Tema
                            </a>
                            </li>
                            <li><a href="#" className="links-nav ">
                                    <i className='bx bxs-user-rectangle' ></i> Perfil
                                </a>
                            </li>
                            <li><Link to='' onClick={logout} className="links-nav logout">
                                    <i className='bx bxs-log-out-circle'></i> Sair
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;