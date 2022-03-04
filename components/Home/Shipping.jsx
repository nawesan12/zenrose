export default function Shipping() {
    return(
        <>
        <section className="container">
            <section className="shipping">
                <section className="content">
                    <span>Envios gratis en</span>
                    <h2>Mar del Plata</h2>
                    <span className="to-map">Ver mapa</span>
                </section>
            </section>
            <section className="shipping offer">
                <section className="content">
                    <span>No te pierdas de</span>
                    <h2>Lo que sea</h2>
                    <span className="buy">Comprar</span>
                </section>
            </section>
        </section>
        
        <style jsx>{`
            .container {
                max-width:100vw;
                display:flex;
                justify-content:space-evenly;
                margin-bottom:5vh;
            }

            .shipping {
                display:flex;
                justify-content:center;
                align-items:center;
                height:25rem;
                width:25rem;
                background:url('/images/leaves_bg.webp') right top;
            }

            .content {
                background:rgba(255, 255, 255, .9);
                height:60%;
                width:70%;
                display:flex;
                justify-content:center;
                flex-direction:column;
                text-align:center;
            }

            h2 {
                margin:.3rem auto .6rem;
                font-family:serif;
                font-size:2rem;
            }

            .to-map {
                text-decoration:underline;
                font-family:serif;
                cursor:pointer;
            }

            .offer {
                background: url('/images/stripes_bg.webp');
            }

            .buy {
                background:lightblue;
                padding:.5rem 1.8rem;
                width:max-content;
                display:block;
                margin:0 auto;
                font-family:serif;
            }

            @media screen and (max-width:1200px) {
                .container {
                    flex-direction:column;
                    width:max-content;
                    margin:auto;
                }

                .shipping {
                    width:90vw;
                    aspect-ratio:1;
                    margin:0 0 5vh;
                }

                .content {
                    width:80%;
                    height:65%;
                }
            }
        `}</style>
        </>
    )
}