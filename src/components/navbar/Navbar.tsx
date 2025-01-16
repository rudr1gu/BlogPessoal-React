import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
                            <li><a href="#" className="links-nav logout">
                                    <i className='bx bxs-log-out-circle'></i> Sair
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;