import { Soustitre } from "../builder/SousTitreSection";
import { ProjectCard } from "../builder/ProjectCard";

import { projects } from "../constans/";
import { useTranslation } from "react-i18next";

type ProjectProps = {
    nom : string,
    description : string,
    tags : any,
    image : any,
    lien : string
}

const Projects = () =>{
 
    const { t } = useTranslation();
 
    return (
        <section id="Project" className="mt-32 h-1/2 flex flex-col align-midle justify-center content-center">
            <div className="w-4/5 h-fit pb-4 min-w-[300px] monGivrer rounded-2xl text-slate-200 self-center text-center p-8 shadow-2xl shadow-black">
                <div className="flex flex-col"> 
                    <Soustitre soustitre={t("projet")}/>
                        <p className="mb-8 TextBasePlus">
                            {t("projetdesc")}
                        </p>
                        <div className="my-4 flex flex-row flex-wrap justify-around gap-7">
                            {projects.map((props : ProjectProps, index : number) => (
                            <ProjectCard key={index} {...props}/>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;