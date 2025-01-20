const DeletarTema = () => {
    return (
        <section className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-sky-600 text-white font-bold text-2xl'>
                    Tema
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>tema</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-sky-400 
                                   hover:bg-sky-600 flex items-center justify-center'>
                        Sim
                    </button>
                </div>
            </div>
        </section>
    )
}
export default DeletarTema