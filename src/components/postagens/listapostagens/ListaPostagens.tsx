import CardPostagens from "../cardpostagens/CardPostagens";

const ListaPostagens = () => {
    return (
        <>
            <section className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 
            	lg:grid-cols-3 gap-4'>
                <CardPostagens />
            </section>
        </>
    );
}

export default ListaPostagens;