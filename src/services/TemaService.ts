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

    atualizarTema = async (url: string, dados: Object, setDados: Function, header: Object) => {
        const resposta = await baseApi.put(url, dados, header)
        setDados(resposta.data)
    }
}

export default TemaService;