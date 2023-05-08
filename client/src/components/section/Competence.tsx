import { CompetenceCard } from "../builder/CompetenceCard";

import { Soustitre } from "../builder/SousTitreSection";

import { competence } from "../constans";

type CompetenceProps = {
    nom: string,
    rating: number,
    experience: string,
  }

const Competence= () =>{

    return (
        <section id="Competence" className="mt-32  h-1/2 flex flex-col md:flex-row  flex-wrap align-midle justify-center content-center">
            <div className="mx-8 w-3/4 min-w-[300px] h-fit monGivrer rounded-2xl  text-secondary-30 self-center text-center shadow-2xl shadow-black p-8">
                <div className="m-4 flex flex-col"> 
                    <Soustitre soustitre="Mes Compétences"/> 
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
