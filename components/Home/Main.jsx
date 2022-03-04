import Image from "next/image";
import ProductDemonstration from "./ProductDemonstration";
import Shipping from "./Shipping";

export default function Main() {
    return(
        <>
        <section className="hero">
            <section className="image">
                <Image src="/images/example.jpg" alt="Zenrose" layout="fill" objectFit="cover" objectPosition="top" priority/>
            </section>
            <section className="slogan">
                <span>Ejemplo</span>
                <h2>Arte <br /> al alcance <br /> de tus gustos </h2>
                <button>Ver Productos</button>
            </section>
        </section>
        <Shipping />
        <ProductDemonstration />

        <style jsx>{`
            .hero {
                position:relative;
                top:12vh;
                display:flex;
                height:92vh;
                max-width:100vw;
                margin:0 0 20vh;
            }    

            .image {
                height:100%;
                width:50vw;
                position:relative;
            }

            .slogan {
                width:50vw;
                display:flex;
                flex-direction:column;
                justify-content:center;
                padding:2rem;
                background:pink;
            }

            span {
                font-family:serif;
            }

            h2 {
                margin:0 .5rem 2rem;
                font-size:3.8rem;
                color:#333;
            }

            button {
                background:#222;
                border:none;
                outline:none;
                padding:1rem 2rem;
                color:white;
                width:max-content;
            }

            @media screen and (max-width:1200px) {
                .image {
                    display:none;
                }

                .slogan {
                    width:100vw;
                    background:url('/images/example.jpg');
                    background-position: center;
                    color:#aaa;
                }

                span {
                    text-shadow:2px 2px 5px #333;
                }

                h2 {
                    color:#eee;
                    text-shadow:2px 2px 5px #333;
                }
            }
        `}</style>
        </>
    )
}