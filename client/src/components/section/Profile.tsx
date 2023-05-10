import { useTranslation } from "react-i18next";
import logo from "../../assets/logo/imgsmall.png"
import { Soustitre } from "../builder/SousTitreSection";



const Profile = () =>{

    const { t } = useTranslation();
    
    return (
        <section  id="Presentation" className="mt-8 flex flex-col flex-wrap align-midle justify-center content-center">
            <img src={logo} className="animate-spin-slow min-w-[16rem] min-h-[16rem] w-[15%] h-[15%] mb-8  self-center " alt="Gabriel Lafrance"/>
            <div className="w-4/5 h-fit min-w-[300px] monGivrer rounded-2xl text-secondary-30 self-center text-center shadow-2xl shadow-black p-8">
                <div className="m-4">
                    <Soustitre  soustitre={t("profile")}/>
                        <div className="text-center lg:text-left flex flex-col m-2">
                            <h1 className="m-4 TextLgPlus">{t("profiletitre")}</h1>
                            <span className="m-4 TextLg">{t("profiledesc")}</span>
                            <span className="m-4 TextBase">{t("profileloc")}</span>
                            <span className="m-4 TextBase">{t("profilework")}</span>
                            <span className="m-4 TextBase"> 📧 lafgab01@hotmail.com</span>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Profile;


