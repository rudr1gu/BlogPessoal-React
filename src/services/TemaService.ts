import baseApi from "./api";

class TemaService {
    
    buscarTemas =  async (url: string, setDados: Function, header: Object) => {
        const resposta = await baseApi.get(url, header);
        setDados(resposta.data);
    }
}

export default TemaService;