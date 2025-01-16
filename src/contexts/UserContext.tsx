import { ReactNode, createContext, useState } from "react";

interface UserContextProps {
    nome: string
    trocarNome: (nome: string) => void
}

interface UserProviderProps {
    children: ReactNode
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: UserProviderProps) {
    const [nome, setNome] = useState('');

    function trocarNome(nome: string) {
        setNome(nome)
    }

    return (
        <UserContext.Provider value={{ nome, trocarNome }}>
            {children}
        </UserContext.Provider>
    )
}