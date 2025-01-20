import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

const Login = () =>{

    const navigate = useNavigate();
    const{ usuario, handleLogin, isLoading } = useContext(AuthContext);

    const[usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if(usuario.token){
            navigate('/home')
        }
    }, [usuario])

    const atualizarEstado = (event: ChangeEvent<HTMLInputElement>) => {
        setUsuarioLogin({
            ...usuarioLogin,
            [event.target.name]: event.target.value
        })
    }

    const login =  (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login} >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full input">
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            required
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <label htmlFor="usuario"><i className='bx bxs-id-card'></i> Usuário</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            required
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <label htmlFor="senha"><i className='bx bx-key' ></i> Senha</label>
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-sky-400 flex justify-center
                                   hover:bg-sky-900 text-white w-1/2 py-2">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>
                        }
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className='text-sky-500 hover:text-sky-900' >Cadastre-se</Link>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </section>
        </>
    );
};

export default Login;