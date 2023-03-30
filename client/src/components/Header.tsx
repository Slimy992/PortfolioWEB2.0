import * as React from 'react';

function Header(){
    var breakpoint : number = 535;

    const [estActifMenu, setActive] = React.useState(false);
    const ToggleMenu = () => {
        setActive(!estActifMenu);
    }

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
    <header className="w-full h-36 monGivrer z-10 fixed top-0 flex flex-col justify-center align-middle items-center text-white">
        <span className="GrosseurTitre mt-2">Portfolio - Gabriel Lafrance</span>
        <div className={largeurEcran <= breakpoint ? "mr-6" : " hidden w-0 h-0"}>
            <div  onClick={ToggleMenu} className={estActifMenu ? "tham-active tham tham-e-squeeze tham-w-10 mt-8 ml-8" : "tham tham-e-squeeze tham-w-10 mt-8 ml-8"}>
                <div className="tham-box">
                    <div className="tham-inner bg-white" />
                </div>
            </div>
        </div>
        <div className={largeurEcran > breakpoint ? "" : "hidden w-0 h-0"}>
                <div className="GrosseurSousTitre flex flex-row justify-around align-middle items-center mt-7">
                    <button className="hover:scale-110 m-4 transition">Présentation</button>
                    <button className="hover:scale-110 m-4 transition">Compétence</button>
                    <button className="hover:scale-110 m-4 transition">Project</button>
                    <button className="hover:scale-110 m-4 transition">Me Contacter</button>
                </div>

        </div>
    </header>
    );
}

export default Header;