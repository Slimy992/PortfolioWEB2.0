import * as React from "react"
import logo from "../../assets/logo/imgsmall.png"
import { Soustitre } from "../builder/SousTitreSection";


function Profile(){
    
    return (
    <section  className="mt-16 flex flex-col flex-wrap align-midle justify-center content-center">
        <img src={logo} className="animate-spin-slow min-w-[16rem] min-h-[16rem] w-[15%] h-[15%] mb-16   self-center"/>
        <div className="w-3/4 h-fit min-w-[300px] monGivrer rounded-2xl text-slate-200 self-center text-center">
            <div className="m-4">
                <Soustitre  soustitre="Présentation"/>
                    <div className="text-center lg:text-left flex flex-col m-2">
                        <span className="m-4 GrosseurTitre">Salut, je m'appelle Gabriel Lafrance 👋</span>
                        <span className="m-4 GrosseurSousTitre">Je suis un jeune développeur Web</span>
                        <span className="m-4 GrosseurTexteNormal"> 🌎 Situé à Rimouski, QC, Canada</span>
                        <span className="m-4 GrosseurTexteNormal"> 💻 Présentement à mon propre compte</span>
                        <span className="m-4 GrosseurTexteNormal"> 📧 lafgab01@hotmail.com</span>
                    </div>
                </div>
            </div>
    </section>
    );
}

export default Profile;


{/*           
         */}