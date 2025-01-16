import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import { ChangeEvent, useEffect, useState } from 'react';
import Usuario from '../../models/Usuario';
import UsuarioServices from '../../services/UsuarioServices';
import { RotatingLines } from 'react-loader-spinner';


const Cadastrar = () => {
    const usuarioServices = new UsuarioServices();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [confirmarSenha, setConfirmarSenha] = useState<string>('');

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    });

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar();
        }
    }, [usuario]);

    const retornar = () => navigate('/login');

    const atualizarEstado = (evento: ChangeEvent<HTMLInputElement>) => {
        setUsuario({
            ...usuario,
            [evento.target.name]: evento.target.value
        });
    }

    const handleConfirmarSenha = (evento: ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(evento.target.value);
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true);

            try {
                await usuarioServices.cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario)
                alert('Usuário cadastrado com sucesso!')
            } catch (error) {
                alert('Erro ao cadastrar usuário!')
            }
        } else {
            alert('Senhas não conferem ou senha menor que 8 caracteres!')
            setUsuario({ ...usuario, senha: '' })
            setConfirmarSenha('')
        }

        setIsLoading(false);
    }

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 h-screen 
              place-items-center font-bold">
                <div className="fundoCadastro hidden lg:block"></div>
                <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrar}>
                    <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
                    <div className="flex flex-col w-full input">
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            value={usuario.nome}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => atualizarEstado(evento)}
                        />
                        <label htmlFor="nome"><i className='bx bxs-user-circle'></i> Nome</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            required
                            value={usuario.usuario}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => atualizarEstado(evento)}
                        />
                        <label htmlFor="usuario"><i className='bx bxs-id-card'></i> Usuario</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            required
                            value={usuario.foto}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => atualizarEstado(evento)}
                        />
                        <label htmlFor="foto"><i className='bx bxs-image-add'></i> Foto</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            required
                            value={usuario.senha}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => atualizarEstado(evento)}
                        />
                        <label htmlFor="senha"><i className='bx bx-key' ></i> Senha</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            required
                            value={confirmarSenha}
                            onChange={(evento: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(evento)}
                        />
                        <label htmlFor="confirmarSenha"> <i className='bx bx-key' ></i> Confirmar Senha</label>
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button className='rounded-full text-white bg-red-500 
                    hover:bg-red-700 w-1/2 py-2' >
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            className='rounded-full text-white bg-sky-400 
                             hover:bg-sky-900 w-1/2 py-2
                             flex justify-center'
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </section>
            {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
            /> :
                <span>Cadastrar</span>
            }
        </>
    );
}

export default Cadastrar;