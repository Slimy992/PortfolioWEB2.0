import * as React from 'react';
import { HashLink as Link } from "react-router-hash-link";

import github from "../assets/logo/github.png"


function Header(){

    var breakpoint : number = 720; {/* Width en pixel que le menu passe de normal à burger*/}

    const [estActif, setActif] = React.useState(false);

    function Switch() {
        setActif(!estActif);
    }

    const [largeurEcran, setLargeurEcran] = React.useState(window.innerWidth);

    React.useEffect(() => {
        console.log(largeurEcran);
        const handleResize = () => {
            if (estActif){
                Switch();
            }
            setLargeurEcran(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

    const scrollOffset = (el : any, offset : number) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });    
    }

    return (
    <header className="sticky top-0 z-10 text-zinc-700 text-center monGivrer h-fit w-full flex flex-col">
        <div className=" flex flex-row justify-between">
            <a href="https://github.com/Slimy992" target="_blank">
                <img src={github} className="m-2 min-w-[4rem] min-h-[4rem] w-[14%] h-auto object-contain hover:scale-110  transition"/>
            </a>
            <div className={largeurEcran > breakpoint ? "mt-3" : "hidden w-0 h-0"}>
                <div className="GrosseurTexteNormal flex flex-row justify-around align-middle items-center mr-4">
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#Presentation' className="BoutonMenu">Présentation</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#Competence' className="BoutonMenu">Compétence</Link>
                    <Link smooth scroll={el => scrollOffset(el, 128)} to='#Project' className="BoutonMenu">Project</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#Contact' className="BoutonMenu">Contact</Link>
                </div>
            </div >
            <div className={largeurEcran <= breakpoint ? " mr-12 mb-[1.6rem]" : " hidden w-0 h-0"}>
                    <div  onClick={Switch} className={estActif ? "tham-active tham tham-e-squeeze tham-w-10 mt-8 ml-8" : "tham tham-e-squeeze tham-w-10 mt-8 ml-8"}>
                        <div className="tham-box">
                            <div className="tham-inner bg-white" />
                        </div>
                    </div>
            </div>
        </div>
        <div className={estActif && largeurEcran <= breakpoint ? "animate-drop-down w-full h-screen": "hidden"}>
            <div className="w-full h-screen GrosseurTitre flex flex-col justify-around align-middle">
                <Link smooth scroll={el => scrollOffset(el, 96)} to='#Presentation' className="BoutonMenuBurger">Présentation</Link>
                <Link smooth scroll={el => scrollOffset(el, 96)} to='#Competence' className="BoutonMenuBurger">Compétence</Link>
                <Link smooth scroll={el => scrollOffset(el, 96)} to='#Project' className="BoutonMenuBurger">Project</Link>
                <Link smooth scroll={el => scrollOffset(el, 112)} to='#Contact' className=" mb-48 BoutonMenuBurger ">Contact</Link>
            </div>
        </div>
    </header>
    );
}

export default Header;