import Link from "next/link";

export default function Footer() {
    return(
        <>
        <footer className="app_footer">
        <section className="social-media">
                    <div className="media">
                        <Link href="#">
                            <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                            </a>
                        </Link>
                    </div>
                    <div className="media">
                        <Link href="#">
                            <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                            </svg>
                            </a>
                        </Link>
                    </div>
                    <div className="media">
                        <Link href="#">
                            <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                            </a>
                        </Link>
                    </div>
                </section>

                <p>Zenrose by Karen H. - 2022</p>
        </footer>

        <style jsx>{`
            .app_footer {
                width:100vw;
                height:10vh;
                display:flex;
                align-items:center;
                font-family:serif;
                background:#fff;
                flex-direction:column;
                justify-content:space-evenly;
            }

            .social-media {
                display:flex;
                margin-top:.8rem;
            }

            .media {
                margin:0 .8rem;
            }

            @media screen and (max-width:1200px) {
                .app_footer {
                    display:none;
                }
            }
        `}</style>
        </>
    )
}