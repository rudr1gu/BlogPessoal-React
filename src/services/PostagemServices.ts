import Postagem from "../models/Postagem";
import baseApi from "./api";

class PostagemServices {

    buscarPostagens =  async(url: string ,setDados: Function, header: Object) => {
        const resposta = await baseApi.get(url, header);
        setDados(resposta.data);
    }

    cadastrarPostagem = async(url: string,postagem: Postagem, setDados: Function, header: Object) => {
        const resposta = await baseApi.post(url, postagem, header);
        setDados(resposta.data);
    }

    atualizarPostagem = async(url: string ,postagem: Postagem, setDados: Function, header: Object) => {
        const resposta = await baseApi.put(url, postagem, header)
        setDados(resposta.data)
    }

    deletarPostagem = async(url: string, header: Object) => {
        await baseApi.delete(url, header)
    }
    
}

export default PostagemServices;