import * as React from "react"
import logo from "../../assets/logo/imgsmall.png"


function Profile(){
    
    return (
    <section  className="mt-48 flex flex-col lg:flex-row  flex-wrap align-midle justify-center content-center">
        <img src={logo} className="animate-spin-slow min-w-[16rem] min-h-[16rem] w-[15%] h-[15%] mb-16  lg:mb-0 self-center"/>
            <div className="m-8 monGivrer rounded-2xl flex flex-col text-center lg:text-left h-fit min-w-[300px]  w-[60%] text-slate-200 self-center">
                <span className="m-4 GrosseurTitre">Salut, je m'appelle Gabriel Lafrance 👋</span>
                <span className="m-4 GrosseurSousTitre">Je suis un jeune développeur Web</span>
                <span className="m-4 GrosseurTexteNormal"> 🌎 Situé à Rimouski, QC, Canada</span>
                <span className="m-4 GrosseurTexteNormal"> 💻 Présentement à mon propre compte</span>
                <span className="m-4 GrosseurTexteNormal"> 📧 lafgab01@hotmail.com</span>
            </div>
    </section>
    );
}

export default Profile;