import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemasProps {
    tema: Tema;
}

const CardTemas = ({ tema }: CardTemasProps) => {
    return (

        <section className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-sky-800 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-sky-400 hover:bg-sky-800 
                        flex items-center justify-center py-2'>
                    <button><i className='bx bxs-edit'></i> Editar</button>
                </Link>

                <Link to='' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button><i className='bx bx-trash' ></i> Deletar</button>
                </Link>
            </div>
        </section>

    )
}

export default CardTemas;