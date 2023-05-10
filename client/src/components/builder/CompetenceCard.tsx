import { useTranslation } from "react-i18next";
import { Rating } from "./Rating"

type CompetenceProps = {
  nom: string,
  rating: number,
  experience: string,
}

export const CompetenceCard = ( props : CompetenceProps ) => {

  const { t } = useTranslation();
  
  return (
    <div className="  rounded-xl text-center text-primary-60  w-full mx-auto TextBasePlus hover:scale-105 transition">
      <div className="bg-secondary-30  m-6 p-4 rounded-xl shadow-2xl shadow-black ">
      <span className="inline-block TextBase">{props.nom} : <Rating rating={props.rating}/></span>
      <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-primary-60 m-auto"/>
      <div className="flex flex-col justify-center mt-4 TextBase">
          <span>{t("competenceExperience")}</span>
          <span>{t(props.experience)}</span>
      </div>
      
      </div>
    </div>
     )
}
