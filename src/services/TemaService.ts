import Tema from "../models/Tema";
import baseApi from "./api";

class TemaService {
    
    buscarTemas =  async (url: string, setDados: Function, header: Object) => {
        const resposta = await baseApi.get(url, header);
        setDados(resposta.data);
    }

    cadastrarTema = async (url: string, dados: Object, setDados: Function, header: Object) => {
        const resposta = await baseApi.post(url, dados, header);
        setDados(resposta.data);
    }

    atualizarTema = async (tema: Tema, setDados: Function, header: Object) => {
        const resposta = await baseApi.put('/temas', tema, header)
        setDados(resposta.data)
    }

    deletarTema = async (url: string, header: Object) => {
        await baseApi.delete(url, header)
    }
}

export default TemaService;