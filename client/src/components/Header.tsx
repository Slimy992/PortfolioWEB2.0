import * as React from 'react';
import { HashLink as Link } from "react-router-hash-link";

import github from "../assets/logo/github.png"


const Header = () => {

    var breakpoint : number = 960; {/* Width en pixel que le menu passe de normal à burger*/}

    const [estActif, setActif] = React.useState(false);

function Switch() {   {/* Switch On/Off pour l'ouverture/fermeture du menu Burger*/ }
        setActif(!estActif);
    }

    const [largeurEcran, setLargeurEcran] = React.useState(window.innerWidth); {/* Gère la resize pour détecter quand mettre le menu bruger */}

    React.useEffect(() => {
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

    const scrollOffset = (el : any, offset : number) => {  {/* Gère le offset du scroll pour ""centrer le contenue au scroll*/ }
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });    
    }

    return (
    <header className="sticky top-0 z-10 text-center monGivrer h-fit w-auto flex flex-col">
        <div className=" flex flex-row justify-between">
            <a href="https://github.com/Slimy992" target="_blank">
                <img src={github} className="m-2 w-16 h-auto object-contain hover:scale-110  transition  rounded-full bg-action-10" alt="Gabriel Lafrance Github" loading='lazy'/>
            </a>
            <div className={largeurEcran > breakpoint ? "mt-1" : "hidden w-0 h-0"}>
                <div className=" text-lgplus flex flex-row justify-around align-middle items-center mr-4">
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#Presentation' className="BoutonMenu">Présentation</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#Competence' className="BoutonMenu">Compétences</Link>
                    <Link smooth scroll={el => scrollOffset(el, 128)} to='#Project' className="BoutonMenu">Projets</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#Contact' className="BoutonMenu">Contact</Link>
                </div>
            </div >
            <div className={largeurEcran <= breakpoint ? " mr-6 mt-2" : " hidden w-0 h-0"}>
                    <div  onClick={Switch} className={estActif ? "tham-active tham tham-e-squeeze tham-w-10 mt-5 ml-8" : "tham tham-e-squeeze tham-w-10 mt-5 ml-8"}>
                        <div className="tham-box">
                            <div className="tham-inner bg-action-10" />
                        </div>
                    </div>
            </div>
        </div>
        <div className={estActif && largeurEcran <= breakpoint ? "animate-drop-down w-full h-screen" : "hidden"}>
            <div className="w-full h-screen TextLgPlus flex flex-col justify-around align-middle">
                <Link onClick={Switch} smooth scroll={el => scrollOffset(el, 96)} to='#Presentation' className="BoutonMenuBurger">Présentation</Link>
                <Link onClick={Switch} smooth scroll={el => scrollOffset(el, 96)} to='#Competence' className="BoutonMenuBurger">Compétences</Link>
                <Link onClick={Switch} smooth scroll={el => scrollOffset(el, 96)} to='#Project' className="BoutonMenuBurger">Projets</Link>
                <Link onClick={Switch} smooth scroll={el => scrollOffset(el, 112)} to='#Contact' className=" mb-48 BoutonMenuBurger ">Contact</Link>
            </div>
        </div>
    </header>
    );
}

export default Header;