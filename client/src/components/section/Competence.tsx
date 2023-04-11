import { CompetenceCard } from "../builder/CompetenceCard";
import { FaReact, FaNpm, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiVisualstudiocode, SiNginx, SiMysql } from "react-icons/si";
import { BsStripe } from "react-icons/bs";


import { Soustitre } from "../builder/SousTitreSection";

import { competence } from "../constans";

const Competence= () =>{

    return (
        <section id="Competence" className="mt-32  h-1/2 flex flex-col md:flex-row  flex-wrap align-midle justify-center content-center">
            <div className="mx-8 w-3/4 min-w-[300px] h-fit monGivrer rounded-2xl text-slate-200 self-center text-center BorderBlanc">
                <div className="m-4 flex flex-col"> 
                    <Soustitre soustitre="Compétence"/> 
                    <div className="grid Grid1x6 xs:Grid2x3 md:grid-cols-3 md:grid-rows-2  GrosseurTexteNormal"> {/* Interaction Weird avec breakpoint custom. md: explicit marche*/}
                            {competence.map((value) => (
                                <CompetenceCard competence={value.nom} rating={value.rating}/>
                            )
                            )}
                    </div>
                    <p className="leading-loose GrosseurTexteNormal mx4">
                        {/*Se code est très mal organisé mais je le sais :)*/}
                        Au cours de mon cheminement, j'ai eu l'occassion d'apprendre plein de choses. 
                        J'ai appris à utilisé des frameworks 
                        tel que <span className="inline-block">React <FaReact color="#61dafb" style={{display: "inline", marginTop: "-5px", marginRight: "5px"}} size="2.4vw"/></span>
                        mais aussi des librairies UI 
                        comme <span className="inline-block">Tailwind <SiTailwindcss color="#38bdf8" style={{display: "inline", marginTop: "-5px", marginRight: "5px"}} size="2.4vw"/></span>
                        ou <span className="inline-block">MUI <SiMui color="#007FFF" style={{display: "inline", marginTop: "-5px", marginRight: "5px"}} size="2.4vw"/>. </span> Pour 
                        travailler, 
                        j'utilise <span className="inline-block">Visual Studio <SiVisualstudiocode color="#61dafb" style={{display: "inline", marginTop: "-5px", marginRight: "5px"}} size="2.4vw"/></span> couplé avec <FaNpm color="#CC3534" style={{display: "inline", marginTop: "-5px", marginRight: "5px"}} size="4.0vw"/>
                         ainsi que 
                        <svg viewBox="0 0 24 24" className=" inline mt-[-5px] mx-[0.5vw] w-[2.4vw] h-[2.4vw]"  fill="white"><path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"></path></svg>
                        afin de créer mes projects. Pour le Backend, 
                        je me sert de <span className="inline-block">NGINX <SiNginx color="#009639" style={{display: "inline", marginTop: "-5px", marginRight: "5px"}} size="2.4vw"/></span>
                        , <FaNode color="#009639" style={{display: "inline", marginTop: "-5px", marginRight: "5px"}} size="4.5vw"/> et Express afin de mettre en ligne mes applications Web. 
                        De plus, j'ai quelque connaissance notable avec <SiMysql color="00758F" style={{display: "inline", marginTop: "-1.7vw", marginRight: "5px"}} size="4.5vw"/>
                        et <span className="inline-block"> Stripe  <BsStripe color="#7c6ee6" style={{display: "inline", marginTop: "-5px", marginRight: "5px"}} size="2.4vw"/></span>.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default  Competence;
