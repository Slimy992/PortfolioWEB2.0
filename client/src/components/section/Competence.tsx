import { useTranslation } from "react-i18next";
import { CompetenceCard } from "../builder/CompetenceCard";

import { Soustitre } from "../builder/SousTitreSection";

import { competence } from "../constans";

type CompetenceProps = {
    nom: string,
    rating: number,
    experience: string,
  }

const Competence= () =>{

    const { t } = useTranslation();

    return (
        <section id="Competence" className="mt-32  h-1/2 flex flex-col md:flex-row  flex-wrap align-midle justify-center content-center">
            <div className="mx-8 w-4/5 min-w-[300px] h-fit monGivrer rounded-2xl  text-secondary-30 self-center text-center shadow-2xl shadow-black p-8">
                <div className="m-4 flex flex-col"> 
                    <Soustitre soustitre={t("competence")}/> 
                    <div className="grid mdplus:grid-cols-2 2xl:grid-cols-3">
                            {competence.map((element : CompetenceProps, index : number) => (
                                <CompetenceCard key={index }  {...element}/>
                            )
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default  Competence;
