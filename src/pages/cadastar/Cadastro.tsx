import './Cadastro.css';

const Cadastrar = () => {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 h-screen 
              place-items-center font-bold">
                <div className="fundoCadastro hidden lg:block"></div>
                <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
                    <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
                    <div className="flex flex-col w-full input">
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        />
                        <label htmlFor="nome"><i className='bx bxs-user-circle'></i> Nome</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            required
                        />
                        <label htmlFor="usuario"><i className='bx bxs-id-card'></i> Usuario</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            required
                        />
                        <label htmlFor="foto"><i className='bx bxs-image-add'></i> Foto</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            required
                        />
                        <label htmlFor="senha"><i className='bx bx-key' ></i> Senha</label>
                    </div>
                    <div className="flex flex-col w-full input">
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            required
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
        </>
    );
}

export default Cadastrar;