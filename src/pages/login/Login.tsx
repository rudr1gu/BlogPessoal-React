import './Login.css';

const Login = () => {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full input">
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            required
                        />
                        <label htmlFor="usuario">Usuário</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            required
                        />
                        <label htmlFor="senha">Senha</label>
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-sky-400 flex justify-center
                                   hover:bg-sky-900 text-white w-1/2 py-2">
                        <span>Entrar</span>
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        Cadastre-se
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </section>
        </>
    );
};

export default Login;