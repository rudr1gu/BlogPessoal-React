import { useNavigate } from "react-router-dom";
import CardPostagens from "../cardpostagens/CardPostagens";
import { useContext, useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { DNA } from "react-loader-spinner";
import PostagemServices from "../../../services/PostagemServices";
import ToastAlerta from "../../../utils/ToastAlerta";

const ListaPostagens = () => {
    
    const navigate = useNavigate();
    const postagemServices = new PostagemServices();

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const buscarPostagens =  async() =>{
        try {
            await postagemServices.buscarPostagens('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    return (
        <>
             {postagens.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <section className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 
            	lg:grid-cols-3 gap-4'>
                 {postagens.map((postagem) => (
                    <CardPostagens key={postagem.id} postagem={postagem} />
                ))}
            </section>
        </>
    );
}

export default ListaPostagens;