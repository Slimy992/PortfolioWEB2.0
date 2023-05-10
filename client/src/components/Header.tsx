import * as React from 'react';
import * as Select from '@radix-ui/react-select';
import * as Menubar from '@radix-ui/react-menubar';
import { HashLink as Link } from "react-router-hash-link";

import github from "../assets/logo/github.png"


const Header = () => {

    const [estActif, setActif] = React.useState(false);

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
                <img src={github} className="m-2 w-16 h-auto object-contain hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,1)]  hover:shadow-action-10 hover:scale-95  transition  rounded-full bg-action-10" alt="Gabriel Lafrance Github" loading='lazy'/>
            </a>
            <div className='mr-4 mt-2 w-fit h-fit'>
                <Menubar.Root className='flex' onValueChange={() => setActif(!estActif)}>
                <Menubar.Menu>
                    <Menubar.Trigger className='grid place-items-center p-4 rounded-full bg-action-10 w-16 h-16 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] hover:shadow-action-10 hover:scale-95'>
                            <div className={estActif 
                                ? "tham-active tham tham-e-squeeze  tham-w-8" 
                                : "tham tham-e-squeeze tham-w-8"}>
                                <div className="tham-box">
                                    <div className="tham-inner bg-white" />
                                </div>
                            </div>
                    </Menubar.Trigger>
                    <Menubar.Portal>
                <Menubar.Content className='absolute -right-16 top-6 rounded-2xl  w-[95vw] sm:w-96 p-8 h-[28rem]  monGivrer flex flex-col justify-around text-base text-center' >
                        <Menubar.Item className='BoutonMenu'>
                            <Link smooth scroll={el => scrollOffset(el, 192)} to='#Presentation'>Ma Présentation</Link>
                        </Menubar.Item>
                        <Menubar.Item className="BoutonMenu">
                            <Link smooth scroll={el => scrollOffset(el, 192)} to='#Competence' >Mes Compétences</Link>
                        </Menubar.Item>
                        <Menubar.Item className="BoutonMenu">
                            <Link smooth scroll={el => scrollOffset(el, 128)} to='#Project'>Mes Projets</Link>
                        </Menubar.Item>
                        <Menubar.Item  className="BoutonMenu">
                            <Link smooth scroll={el => scrollOffset(el, 192)} to='#Contact'>Me Contacter</Link>
                        </Menubar.Item>
                    </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>
                </Menubar.Root>
            </div>
        </div>
    </header>
    );
}

export default Header;