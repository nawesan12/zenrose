import Image from "next/image";

export default function Main() {
    return(
        <>
        <section className="hero">
            <section className="image">
                <Image src="/images/example.jpg" alt="Zenrose" layout="fill" objectFit="cover" objectPosition="top"/>
            </section>
            <section className="slogan">
                <span>Ejemplo</span>
                <h2>Arte <br /> al alcance <br /> de tus gustos </h2>
                <button>Ver Productos</button>
            </section>
        </section>

        <style jsx>{`
            .hero {
                position:relative;
                top:12vh;
                display:flex;
                height:88vh;
                width:100vw;
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
        `}</style>
        </>
    )
}