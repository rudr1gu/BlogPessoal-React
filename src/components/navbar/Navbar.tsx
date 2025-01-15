const Navbar = () => {
    return (
        <>
            <nav className="w-full flex justify-center py-4 bg-indigo-900 text-white">
                <div className="container flex justify-between text-lg">
                    <h1>Blog Pessoal</h1>
                    <div>
                        <ul className="flex gap-4">
                            <li><a href="#">Postagens</a></li>
                            <li><a href="#">Temas</a></li>
                            <li><a href="#">Cadastrar Tema</a></li>
                            <li><a href="#">Perfil</a></li>
                            <li><a href="#">Sair</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;