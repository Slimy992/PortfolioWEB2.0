import * as React from 'react';
import github from "../assets/logo/github.png"


function Header(){
    var breakpoint : number = 592;

    const [estActif, setActif] = React.useState(false);

    const [largeurEcran, setLargeurEcran] = React.useState(window.innerWidth);
    React.useEffect(() => {
        console.log(largeurEcran);
        const handleResize = () => {
            setLargeurEcran(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

    return (
    <header className="sticky top-0 z-10">
        <div className="h-12 w-full monGivrer ">

        </div>

    </header>
    );
}

export default Header;

{/*
        <div className={largeurEcran > breakpoint ? "" : "hidden w-0 h-0"}>
                <div className="GrosseurSousTitre flex flex-row justify-around align-middle items-center">
                    <button className="hover:scale-110 m-4 transition">Présentation</button>
                    <button className="hover:scale-110 m-4 transition">Compétence</button>
                    <button className="hover:scale-110 m-4 transition">Project</button>
                    <button className="hover:scale-110 m-4 lgplus:mr-6 transition">Contact</button>
                </div>
        </div>
        <div className={largeurEcran <= breakpoint ? "mr-6 mb-6" : " hidden w-0 h-0"}>
                <div  onClick={ToggleMenu} className={estActifMenu ? "tham-active tham tham-e-squeeze tham-w-10 mt-8 ml-8" : "tham tham-e-squeeze tham-w-10 mt-8 ml-8"}>
                    <div className="tham-box">
                        <div className="tham-inner bg-white" />
                    </div>
                </div>
        </div>
                <a href="https://github.com/Slimy992" target="_blank">
                    <img src={github} className=" min-w-[4rem] min-h-[4rem] w-[14%] h-[14%] object-contain hover:scale-125  transition"/>
                </a>




*/}