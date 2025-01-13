// import React from "react";

let Home = () => {
    return (
        <>
            <section style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
            }}>
                <div>
                    <div style={{
                        width:"80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <h2> Seja Bem-vindo(a)</h2>
                        <p> Expresse aqui seus pensamentos e opniões</p>
                    </div>
                    <div style={{
                        width:"80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <img src="https://i.imgur.com/VpwApCU.png" alt="Imagem da Página Home" width="400px" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;