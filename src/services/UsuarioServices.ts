import baseApi from "./api";

class UsuarioServices {

    cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
        const resposta = await baseApi.post(url, dados);
        setDados(resposta.data);
    }

    logarUsuario = async (url: string, dados: Object, setDados: Function) => {
        const resposta = await baseApi.post(url, dados);
        setDados(resposta.data);
    }
}

export default UsuarioServices;