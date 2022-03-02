import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {

    const [navActive, setNavActive] = useState(false)

    const handleNav = () => {
        setNavActive(!navActive)
    }

    return(
        <>
        <header className="app_header">
            <h1>Zenrose</h1>
            <nav className={navActive === true ? "navigation nav-active" : "navigation"}>
                <section className="picture-container">
                    <section className="picture">
                        <Image src="/images/rosa2.png" alt="Zenrose" layout="fill" objectFit="cover"/>
                    </section>
                    <h2>Zenrose</h2>
                </section>

                <section className="list">
                    <li>
                        <Link href="/">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/productos">
                            <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brush" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                                <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                                <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                                <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                            </svg>Productos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre">
                            <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                                <polyline points="11 12 12 12 12 16 13 16" />
                            </svg>Sobre</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacto">
                            <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile-message" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M11 3h10v8h-3l-4 2v-2h-3z" />
                                <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
                                <path d="M10 18v.01" />
                            </svg>Contacto</a>
                        </Link>
                    </li>
                </section>

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
            </nav>

            <div className="logo">
                <Link href="/"><a href="#"><Image src="/images/rosa.png" alt="Zenrose" layout="fill" objectFit="cover"/></a></Link> 
            </div>

            <section className={navActive === true ? "burger burger-active" : "burger"} onClick={handleNav}>
                <div className={navActive === true ? "line top" : "line"}></div>
                <div className={navActive === true ? "line bottom" : "line"}></div>
            </section>
        </header>

        <style jsx>{`
            .app_header {
                height:12vh;
                width:100vw;
                display:flex;
                justify-content:space-around;
                align-items:center;
                box-shadow:1px 1px 3px #ccc;
                background:#fff;
                position:fixed;
                top:0;
                left:0;
                z-index:10;
            }

            .social-media {
                display:none;
            }

            .picture-container {
                display:none;
            }

            h1 {
                font-size:2rem;
                font-family:serif;
            }

            .list {
                display:flex;
            }

            li {
                list-style-type:none;
                margin:.7rem;
                border-bottom:2px solid transparent;
                transition:all .2s ease;
            }

            li:hover{
                border-bottom:2px solid pink;
            }

            .logo {
                position:relative;
                width:3rem;
                height:3rem;
            }

            .burger {
                flex-direction:column;
                justify-content:space-evenly;
                height:2rem;
                width:1.5rem;
                cursor:pointer;
                display:none;
            }

            .line {
                height:2px;
                width:90%;
                background:#000;
                transition:all .2s ease;
            }

            svg {
                display:none;
            }

            @media screen and (max-width:1200px) {
                h1 {
                    display:none;
                }

                .burger {
                    display:flex;
                }

                .navigation {
                    position:fixed;
                    top:12vh;
                    left:0;
                    z-index:-1;
                    height:88vh;
                    width:70vw;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:space-evenly;
                    transform:translateX(-110%);
                    transition:all .3s ease;
                }

                .picture-container {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    font-family:serif;
                }

                .picture-container .picture {
                    height:3.5rem;
                    width:3.5rem;
                    position:relative;
                    overflow:hidden;
                    border-radius:50%;
                }

                .list {
                    flex-direction:column;
                    max-width:max-content;
                    height:50%;
                    justify-content:space-evenly;
                }

                li {
                    margin:0;
                    font-size:1.2rem;
                    font-weight:500;
                }

                li a {
                    display:flex;
                    align-items:center;
                }

                svg {
                    display:inline;
                    margin-right:.5rem;
                }

                .social-media {
                    height:max-content;
                    display:flex;
                    width:100%;
                    justify-content:space-evenly;
                }

                .nav-active {
                    transform:translateX(0%);
                }

                .burger-active {
                    justify-content:center;
                }

                .bottom {
                    transform:rotate(45deg);
                    width:100%;
                }

                .top {
                    transform:rotate(-45deg);
                    width:100%;
                }
            }
        `}</style>
        </>
    )
}