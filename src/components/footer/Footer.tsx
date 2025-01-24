import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'
import { ReactNode, useContext } from 'react'

const Footer = () => {

    const { usuario } = useContext(AuthContext)

    let data = new Date().getFullYear()
    let component: ReactNode;

    if(usuario.token !== '') {
        return (
            <>
                <footer className="flex justify-center bg-sky-700 text-white">
                    <div className="container flex flex-col items-center py-4">
                        <p className='text-xl font-bold text-slate-50'>
                            Blog Pessoal Rudr1gu - {data}
                        </p>
                        <p className='text-lg text-slate-50'>Acesse nossas redes sociais</p>
                        <div className='flex gap-2'>
                            <LinkedinLogo size={32} weight='light' />
                            <InstagramLogo size={32} weight='light' />
                            <FacebookLogo size={32} weight='light' />
                        </div>
                    </div>
                </footer>
            </>
        )
    }

    return (
        <>
           {component}
        </>
    )
}

export default Footer